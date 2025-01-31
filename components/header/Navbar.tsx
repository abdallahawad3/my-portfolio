"use client";

import { Button } from "../ui/button";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import { scrollToSection } from "@/lib/scroll";
import { ModeToggle } from "../ModeToggle";
import { Routes } from "@/data";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="">
      <Button variant="secondary" size="sm" className="lg:hidden" onClick={() => setOpenMenu(true)}>
        <Menu className="!w-6 !h-6" />
      </Button>
      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-white dark:bg-black lg:dark:bg-transparent lg:bg-none transition-all duration-200 h-screen lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-5`}>
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-8 right-10 lg:hidden"
          onClick={() => setOpenMenu(false)}>
          <XIcon className="!w-6 !h-6" />
        </Button>
        {Routes.map((ele) => (
          <li key={ele.name}>
            <a
              aria-label={`Scroll to ${ele.name}`}
              role="button"
              onClick={() => {
                setOpenMenu(false);
                scrollToSection(ele.link);
              }}
              className="font-bold cursor-pointer text-lg font-mono text-gray-600 hover:text-gray-950 dark:text-foreground dark:hover:dark:text-foreground/90 transition duration-100 ">
              {ele.name}
            </a>
          </li>
        ))}
        <ModeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;
