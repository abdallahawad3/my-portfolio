"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "./ui/3d-pin";
import { AllProjects } from "@/data";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import reactIcon from "@/public/icons/react.svg";
import motionIcon from "@/public/icons/motion.svg";
import tailwindIcon from "@/public/icons/tailwind.svg";
import typescript from "@/public/icons/typescript.svg";
const ProjectList = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
      }}>
      <div className="w-full grid gap-8 gap-y-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {AllProjects.map((ele) => (
          <motion.div
            key={ele.title}
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="w-full flex items-center justify-center ">
            <Card title={ele.href} href={ele.href}>
              <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] md:w-[16rem] md:h-[16rem] 2xl:w-[20rem] 2xl:h-[20rem] ">
                <Image
                  className="flex flex-1 w-full rounded-lg  mb-2"
                  src={ele.image}
                  alt="Image"
                  width={500}
                  height={500}
                />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {ele.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{ele.description}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center ">
                    <Image className="size-8 -mx-1" src={reactIcon} alt="React Icon" />
                    <Image className="size-8 -mx-1" src={motionIcon} alt="React Icon" />
                    <Image className="size-8 -mx-1" src={tailwindIcon} alt="React Icon" />
                    <Image className="size-8 -mx-1" src={typescript} alt="React Icon" />
                  </div>
                  <div>
                    <Link className="text-brand flex items-center gap-2" href={ele.href}>
                      Show Live <MoveUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectList;
