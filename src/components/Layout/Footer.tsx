import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
      <div className="text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Homework Manager
        </p>
      </div>
    </footer>
  );
}
