"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import HomeworkForm from "@/components/Homework/Form/HomeworkForm";
import HomeworkList from "@/components/Homework/List/HomeworkList";
import FilterButton from "@/components/Common/FilterButton";
import Loading from "@/components/Common/LoadingAnimation";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

export default function ProtectedPage() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [update, setUpdate] = useState(0); // To trigger updates
  const [editData, setEditData] = useState<{
    id: string;
    title: string;
    description: string;
  } | null>(null);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest"); // Sort order state
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/login");
      } else {
        setUser(data.user);
      }
    };

    getUser();
  }, [supabase, router]);

  const handleEdit = (id: string, title: string, description: string) => {
    setEditData({ id, title, description });
  };

  const handleSortChange = (newSortOrder: "newest" | "oldest") => {
    setSortOrder(newSortOrder); // Update sort order
    setUpdate((prev) => prev + 1); // Trigger update to re-fetch sorted homework
  };

  if (!user) return <Loading />;

  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <div className="w-full max-w-xl">
        <HomeworkForm
          onHomeworkAdded={() => {
            setUpdate((prev) => prev + 1);
            setEditData(null);
          }}
          editData={editData}
        />
        <div className="mt-4">
          <FilterButton onSortChange={handleSortChange} />
        </div>
      </div>
      <div className="w-full mt-8">
        <HomeworkList key={update} onEdit={handleEdit} sortOrder={sortOrder} />{" "}
        {/* Pass sortOrder prop */}
      </div>
    </div>
  );
}
