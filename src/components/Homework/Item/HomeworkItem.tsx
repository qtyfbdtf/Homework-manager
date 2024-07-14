import React from "react";

interface HomeworkItemProps {
  id: string;
  title: string;
  description: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string, description: string) => void;
}

const HomeworkItem: React.FC<HomeworkItemProps> = ({
  id,
  title,
  description,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg overflow-hidden">
      <h3 className="text-lg font-bold mb-2 break-words">{title}</h3>
      <p className="mb-4 break-words">{description}</p>
      <div className="flex justify-between">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
          onClick={() => onEdit(id, title, description)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HomeworkItem;
