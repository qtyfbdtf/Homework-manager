import NavbarLinks from "./NavbarLinks";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <a
          href="/"
          className="text-white text-2xl no-underline flex items-center"
        >
          Homework Manager
          <Image
            src="/homework_icon.svg"
            alt="Homework Icon"
            width={24}
            height={24}
            className="ml-2"
          />
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <NavbarLinks />
      </div>
    </nav>
  );
}
