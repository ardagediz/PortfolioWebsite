"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiC, SiDjango, SiSpringboot, SiSqlite } from "react-icons/si";

// about data
const about = {
    title: "About Me",
    description: "I am a Computer Science student at the University of Leeds with a passion for technology and software development.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Arda Gediz",
        },
        {
            fieldName: "Experience",
            fieldValue: "4+ years",
        },
        {
            fieldName: "Email",
            fieldValue: "arda.gediz@mail.com",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Turkish",
        },
    ],
};

// experience data
const experience = { 
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: 'An ambitious and driven individual, I possess strong problem-solving, teamwork, and communication skills, gained from my diverse work history. I thrive in high-energy environments and can adhere to strict guidelines. I am eager to gain further experience in software engineering.',

    items: [
        {
            position: 'Web Developer',
            company: 'Dalston Auto Centre Ltd',
            date: '2024 - Present',
            description: '',
        },
        {
            position: 'Operations Assistant',
            company: 'Dalston Auto Centre Ltd',
            date: '2021 - 2023',
            description: '',
        },
        {
            position: 'Software Engineering Virtual Internship',
            company: 'Goldman Sachs',
            date: '2022 - 2022',
            description: '',
        },
    ],
};

// education data
const education = { 
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: 'I am a Computer Science student at the University of Leeds with a passion for technology and software development.',

    items: [
        {
            institution: 'University of Leeds',
            degree: ' BSc Computer Science',
            date: '2023 - Present',
        },
        {
            institution: 'Codecademy',
            degree: 'Learning Intermediate Python',
            date: '2024',
        },
        {
            institution: 'Codecademy',
            degree: 'Learning DSA with Python',
            date: '2024',
        },
    ],
};

// skills data
const skills = { 
    title: 'My Skills',
    description: 'I have experience in a range of programming languages and frameworks, including Python, Java, Django, and React. I am also familiar with HTML, CSS, and JavaScript. I am always eager to learn new technologies and improve my skills.',

    skillList: [
        {
            icon: <FaPython />,
            name: 'Python',
        },
        {
            icon: <FaJava />,
            name: 'Java',
        },
        {
            icon: <SiC />,
            name: 'C',
        },
        {
            icon: <SiDjango />,
            name: 'Django',
        },
        {
            icon: <SiSpringboot />,
            name: 'Spring Boot',
        },
        {
            icon: <SiSqlite />,
            name: 'SQLite',
        },
        {
            icon: <FaHtml5 />,
            name: 'HTML 5',
        },
        {
            icon: <FaCss3 />,
            name: 'CSS 3',
        },
        {
            icon: <FaJs />,
            name: 'JavaScript',
        },
        {
            icon: <FaReact />,
            name: 'React',
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwind CSS',
        },
        {
            icon: <SiNextdotjs />,
            name: 'Next.js',
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { animate, motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.date}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text=left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                    })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.date}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text=left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                    })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                                        {about.info.map((item, index) => {
                                            return <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                    })}
                                    </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;
