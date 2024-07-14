import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  centerContent?: boolean;
}

export default function Section({
  title,
  children,
  centerContent = false,
}: SectionProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">{title}</h2>
        <div className={centerContent ? "flex justify-center" : ""}>
          {children}
        </div>
      </div>
    </section>
  );
}
