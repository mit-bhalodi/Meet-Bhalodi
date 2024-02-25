
"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";

export function ThreeDCardLive() {
    return (
        <CardContainer className="inter-var w-fit bg-gray-100 dark:bg-gray-700/[0.8] z-50">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] md:w-[24rem] h-[30rem] rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    Hello, I am Meet 👋,
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    I am a full stack developer, Working on Angular 🅰️, React 🔯, Node and Django on large scale applications
                </CardItem>
                <CardItem
                    translateZ="100"
                    rotateX={12}
                    rotateZ={-5}
                    className="w-full my-10 flex items-center justify-center"
                >
                    <img
                        src="https://i.ibb.co/5TGPDxM/meet-bhalodi.jpg"
                        height="200"
                        width="200"
                        loading="lazy"
                        className="h-64 w-64 object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    {/* <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Sign up
                    </CardItem> */}
                </div>
            </CardBody>
        </CardContainer>
    );
}
