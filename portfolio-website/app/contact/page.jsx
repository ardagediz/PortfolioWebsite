"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Description } from "@radix-ui/react-dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";

import { FaEnvelope } from "react-icons/fa";

const info = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "arda.gediz@mail.com"
    },
];


import { motion } from "framer-motion";

const Contact = () => {
    return <motionSection>contact page</motionSection>
}
export default Contact;