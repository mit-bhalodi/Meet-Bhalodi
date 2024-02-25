import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function Projects() {
    return (
        <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={i === 3 || i === 6 ? "md:col-span-1" : ""}
                    url={item.url}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = ({ src, chips }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl flex-col">
        <img className="h-full w-full object-cover rounded-lg" src={src} />
        <div className="flex flex-row flex-wrap gap-2 mt-3">
            {
                chips?.map((chip) => (
                    <div key={Math.random(100)} className="chip py-[3px] px-[6px] text-xs bg-gray-300 text-black dark:text-black rounded-md borde-[1px]">{chip}</div>
                ))
            }
        </div>
    </div>
);

const items = [
    {
        title: "Resume Builder",
        description: "Created a Resume Builder allowing admin users to add templates and regular users to select and create resumes, with authentication and data management handled via Firebase",
        header: <Skeleton src="https://i.ibb.co/f1BRmT4/resume-builder.png" chips={["React", "Vite", "Firebase", "Tailwind", "React Query"]} />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        url: "https://github.com/mit-bhalodi/Resume-Builder"
    },
    {
        title: "E-Commerce store for creatives",
        description: "Designed an artist-centered E-commerce platform allowing owners to list items for sale, users to view and purchase products, with payments via Razorpay, and authentication via Google and JWT, supported by Django backend and Postgres database.",
        header: <Skeleton src="https://i.ibb.co/YPTSpWm/sanskruti-store.png" chips={["Angular 16", "Django", "Postgres", "Tailwind", "Amazon EC2" ]}/>,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500"  />,
        url: "https://github.com/mit-bhalodi/art-by-sanskruti"
    },
    {
        title: "Password Generator",
        description: "Developed password generator using React and Vite, featuring checkboxes for customising password criteria including length, uppercase, lowercase, digits, and special characters. Efficiently generates secure passwords tailored to user preferences. ",
        header: <Skeleton src="https://i.ibb.co/YQHr36B/pass-gen.png" chips={["React", "Tailwind", "Vite" ]} />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        url: "https://github.com/mit-bhalodi/Password-Generator"
    },
    {
        title: "Book Ex. - Share the knowledge",
        description:
            "Developed BookEx, a book exchange platform for college students, reaching more than 200 users within 2 months. Implemented user authentication using JWT tokens and optimised front-end performance with React and back-end with ExpressJS.",
        header: <Skeleton src="https://i.ibb.co/xHMcC4n/book-ex.png" chips={["React", "Bootstrap", "Express", "Postgres", "Adbode XD" ]} />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        url: "https://github.com/Aayush-Desai/Group-21-book_exchange"
    },
];
