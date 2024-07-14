"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import HomeworkItem from "@/components/Homework/Item/HomeworkItem";

interface Homework {
  id: string;
  title: string;
  description: string;
  created_at: string;
  due_date: string | null;
}

interface HomeworkListProps {
  onEdit: (id: string, title: string, description: string) => void;
  sortOrder: "newest" | "oldest";
}

export default function HomeworkList({ onEdit, sortOrder }: HomeworkListProps) {
  const [homeworkList, setHomeworkList] = useState<Homework[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchHomework();
  }, [sortOrder]); // Re-fetch homework when sortOrder changes

  const fetchHomework = async () => {
    setLoading(true);

    const supabase = createClient();
    const { data, error } = await supabase
      .from("homework")
      .select("*")
      .order("created_at", { ascending: sortOrder === "oldest" });

    if (error) {
      console.error("Error fetching homework:", error);
    } else {
      setHomeworkList(data);
    }

    setLoading(false);
  };

  const handleDelete = (id: string) => {
    setHomeworkList(homeworkList.filter((homework) => homework.id !== id));
  };

  return (
    <div className="max-w-full mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {loading ? (
        <p>Loading...</p>
      ) : (
        homeworkList.map((homework) => (
          <HomeworkItem
            key={homework.id}
            id={homework.id}
            title={homework.title}
            description={homework.description}
            onDelete={handleDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}
