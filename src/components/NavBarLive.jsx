"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavBarMenu";
import { cn } from "../utils/cn";


export function NavBarLive() {
    return (
        <div className="relative w-full flex items-center justify-start">
            <Navbar className="top-2 md:top-4 border rounded-full mx-4 md:mx-auto border-black/[0.2] dark:border-white/[0.2]" />
        </div>
    );
}

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 boder border-red", className)}
        >
            <Menu setActive={setActive}>
                <p className="text-black dark:text-white text-left text-lg md:text-2xl flex flex-1" >Meet Bhalodi</p>
                <MenuItem setActive={setActive} active={active} item="About me">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/interface-design" scrollTo="#experiances">Expericances</HoveredLink>
                        {/* <HoveredLink> Education</HoveredLink> */}
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Resume Builder"
                            href="https://github.com/mit-bhalodi/Resume-Builder"
                            src="src/assets/resume_builder.png"
                            description="Resume builder using React, Firebase and Tailwind"
                        />
                        <ProductItem
                            title="E-Commerce store for creatives"
                            href="https://github.com/mit-bhalodi/art-by-sanskruti"
                            src="src/assets/sanskruti_store.png"
                            description="Online store using Angular, Django and Postgres"
                        />
                        <ProductItem
                            title="Password Generator"
                            href="https://github.com/mit-bhalodi/Password-Generator"
                            src="src/assets/pass_gen.png"
                            description="Password Generator using react"
                        />
                        <ProductItem
                            title="Book Ex. - Share the knowledge"
                            href="https://userogue.com"
                            src="src/assets/book_ex.png"
                            description="Book exchange platform using React and Node"
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink to="https://linkedin.com/in/meet-bhalodi" target="_blank">LinkedIn</HoveredLink>
                        <HoveredLink to="https://github.com/mit-bhalodi" target="_blank">Github</HoveredLink>
                        <HoveredLink to="mailto:mitbhalodi@icloud.com" >Email</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
