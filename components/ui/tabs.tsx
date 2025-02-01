"use client";
import { ProjectsTabs } from "@/data";
import React, { useState } from "react";
import { motion } from "framer-motion";
const ProductTaps = () => {
  const [active, setActive] = useState("all");
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
      }}>
      <ul className="flex flex-wrap md:gap-3 gap-1 md:flex-col">
        {ProjectsTabs.map((item) => (
          <li
            onClick={() => setActive(item.id)}
            className={`${
              active == item.id ? "bg-[#060b30] rounded-full dark:text-brand text-gray-200" : ""
            } transition duration-200 border dark:border-[#060b30] text-gray-700 shadow-md rounded-full text-center text-base font-normal md:text-lg md:font-bold dark:text-brand dark:hover:text-brand/90 cursor-pointer py-2 px-5 md:p-2`}
            key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProductTaps;
