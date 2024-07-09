"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Ensure these components are correctly imported

const projects = [
    {
        num: '01',
        category: "Frontend",
        title: "project 1",
        description: "description 1",
        stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }],
        image: "", // Ensure this path is correct
        live: "",
        github: ""
    },
    {
        num: "02",
        category: "Fullstack",
        title: "project 2",
        description: "description 2",
        stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }],
        image: "/assets/work/projectimage", // Ensure this path is correct
        live: "https://www.google.com",
        github: "https://www.github.com"
    },
    {
        num: "03",
        category: "Backend",
        title: "project 3",
        description: "description 3",
        stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }],
        image: "/assets/work/projectimage", // Ensure this path is correct
        live: "https://www.google.com",
        github: "https://www.github.com"
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div>
                            {/* outline */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        slider
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
