"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Loading from "@/components/Common/LoadingAnimation"; // Import the Loading component

interface HomeworkFormProps {
  onHomeworkAdded: () => void;
  editData?: { id: string; title: string; description: string } | null;
}

export default function HomeworkForm({
  onHomeworkAdded,
  editData,
}: HomeworkFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setDescription(editData.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      let error;
      if (editData) {
        ({ error } = await supabase
          .from("homework")
          .update({ title, description })
          .eq("id", editData.id));
      } else {
        ({ error } = await supabase
          .from("homework")
          .insert({ user_id: user.id, title, description }));
      }

      if (error) {
        console.error("Error adding/updating homework:", error);
      } else {
        onHomeworkAdded();
        setTitle("");
        setDescription("");
      }
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mb-8 bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Homework Form</h2>
      <div className="mb-6">
        <label htmlFor="title" className="block mb-2 font-bold text-gray-800">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 font-bold text-gray-800"
        >
          Description
        </label>
        <textarea
          id="description"
          className="w-full p-3 border border-gray-300 rounded min-h-[150px] resize-vertical focus:border-blue-500 focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-5 py-3 text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors duration-200"
        disabled={loading}
      >
        {loading ? "Saving..." : editData ? "Update Homework" : "Add Homework"}
      </button>
    </form>
  );
}
