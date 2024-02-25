import React from "react";
import { ThreeDCardLive } from "./ThreeDCardLive";

export function GridBackgroundDemo() {
    return (
        <div className="h-full w-full dark:bg-gray-700 bg-gray-50 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center items-center">
            
            {/* HERO SECTION */}
            <div className="py-24 grid grid-col-1 md:grid-cols-2 w-[900px]">
                {/* Left side */}
                <div>
                    <ThreeDCardLive />
                </div>
                {/* right side */}
                <div>
                    <div className="pointer-events-none dark:bg-gray-700 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <p className="text-4xl sm:text-7xl font-bold py-8 px-10 md:px-0 relative z-20 bg-clip-text text-transparent bg-gradient-to-t from-gray-300 to-gray-700 dark:bg-gradient-to-t dark:from-gray-400 dark:to-white">
                        I Like to build scalable and apps with great user experiances
                    </p>
                </div>
            </div>

            {/* ABOUT ME */}
            <div>

            </div>
        </div>
    );
}
