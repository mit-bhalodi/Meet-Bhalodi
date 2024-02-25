import React from "react";
import { ThreeDCardLive } from "./ThreeDCardLive";
import Experiances from "./Experiances";
import { Projects } from "./Projects";
import Footer from "./Footer";
import Certifications from "./Certifications";

export function GridBackgroundDemo() {
    return (
        <div className="h-full w-full dark:bg-gray-700 bg-gray-100 dark:bg-grid-gray/[0.1] bg-grid-black/[0.2] relative flex flex-col overflow-auto">
            <div className="h-full w-full flex flex-col items-center">
                {/* HERO SECTION */}
                <div className="py-28 grid grid-col-1 md:grid-cols-2 sm:w-96 md:w-[900px]">
                    <div>
                        <ThreeDCardLive />
                    </div>
                    <div>
                        <div className="pointer-events-none dark:bg-gray-700 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                        <p className="text-4xl sm:text-7xl font-bold py-8 px-10 md:px-0 relative bg-clip-text text-transparent bg-gradient-to-t from-gray-600 via-gray-500 to-gray-700 dark:bg-gradient-to-t dark:from-gray-400 dark:to-white whitespace-normal">
                            I Like to build large, scalable apps with great user experiances
                        </p>
                    </div>
                </div>

                {/* EXPERIANCES */}
                <div className="md:w-[900px] p-10" id="experiances">
                    <p className="text-4xl pb-4 font-bold">Experiances</p>
                    <Experiances />
                </div>

                {/* PROJECTS */}
                <div className="md:w-[900px] p-10" id="myProjects">
                    <p className="text-4xl pb-4 font-bold">Projects</p>
                    <Projects />
                </div>

                {/* CERTIFICATIONS */}
                <div className="md:w-[900px] p-10" id="myProjects">
                    <p className="text-4xl pb-4 font-bold">Certifications</p>
                    <Certifications />
                </div>

                <Footer />
            </div>
        </div>
    );
}
