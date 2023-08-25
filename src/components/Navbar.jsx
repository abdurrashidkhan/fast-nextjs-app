"use client";

import Link from "next/link";
import ActiveLink from "./ActiveClass/ActiveLink";

const navLink = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className=" bg-[#7a7a7a59]">
      <div className="container mx-auto px-2 py-4">
        <ul className="flex items-center justify-between">
          <div className="">
            <h1>Next Pro </h1>
          </div>
          {/* nav link  */}
          <div className="flex items-center justify-center gap-5">
            {navLink.map(({ name, path }) => (
              <li key={path}>
                <ActiveLink
                  exact={path === "/"}
                  ActiveClassName="text-blue-700 "
                  href={path}
                >
                  {name}
                </ActiveLink>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
