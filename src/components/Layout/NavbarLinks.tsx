import React from "react";
import Link from "next/link";
import AuthButton from "../Auth/AuthButton";

export default function NavbarLinks() {
  return (
    <>
      <Link
        className="text-white no-underline text-base transition-[color] duration-[0.3s]  border-0 hover:text-[#007bff] text-center px-0 py-4"
        href="/protected"
      >
        Create Homework
      </Link>
      <AuthButton />
    </>
  );
}
