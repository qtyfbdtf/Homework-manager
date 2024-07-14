import React from "react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

export default function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center m-4">
      <img
        src={icon}
        alt={title}
        className="mx-auto mb-4"
        style={{ width: "50px", height: "50px" }}
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
