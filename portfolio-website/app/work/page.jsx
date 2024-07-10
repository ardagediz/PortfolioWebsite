"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const projects = [
    {
        num: '01',
        category: "Premier League Match Predictor using Machine Learning",
        title: "Premier League Match Predictor using Machine Learning",
        description: "This project uses machine learning to predict the outcomes of Premier League football matches. It employs a Random Forest Classifier to analyze historical match data and forecast future results. The data used spans from 2020 to 2022, and various features including categorical, temporal, and rolling averages of key performance metrics are used to enhance the prediction accuracy.",
        stack: [{ name: "Python" }, { name: "Sci-kit learn" }],
        image: "/assets/work/shutterstock_735045550-1536x960.png",
        github: "https://github.com/ardagediz/PLMatchPredictor"
    },
    {
        num: "02",
        category: "Full Stack Employee Management System",
        title: "Full Stack Employee Management System",
        description: "Developed a full-stack CRUD application using ReactJS for the frontend and Spring Boot for the backend",
        stack: [{ name: "SpringBoot" }, { name: "ReactJS" }, { name: "MySQL" }],
        image: "/assets/work/9a368c5a-fce2-429d-ac08-f538a7235912.png",
        github: "https://github.com/ardagediz/FullStackEmployeeSys"
    },
    {
        num: "03",
        category: "AI Football Analysis System",
        title: "AI Football Analysis System",
        description: "Developed an AI/ML football analysis system using YOLO for object detection, OpenCV for image processing, and Python for data handling and integration",
        stack: [{ name: "Python" }, { name: "OpenCV" }, { name: "YOLO" }],
        image: "/assets/work/3ee39308-56dc-4776-b7f3-c4c202fca476.png",
        github: "https://github.com/ardagediz/AIFootballAnalysis"
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay:2.4, duration:0.4, ease:"easeIn"},}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                            {/* project descriptiopn */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {/* removes comma from last item */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSideChange}>
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex items-center justify-center bg-pink-50/20 ">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        {/* image */}
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-cover" alt=""/>
                                        </div>
                                    </div>
                                </SwiperSlide>;
                            })}
                            {/* buttoning */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
