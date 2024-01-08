"use client"

import {FC, Fragment, useState} from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import {AnimatePresence, motion} from "framer-motion";
import clsx from "clsx";
import ContactDrawer from "@/components/ContactDrawer";

const NavBar: FC = () => {
    const [mobileNavVisible, setMobileNavVisible] = useState(false)

    return (
        <Fragment>
            <AnimatePresence>
                {
                    mobileNavVisible && (
                        <motion.div
                            className="z-50 top-0 left-0 fixed w-screen h-screen bg-darker/90 backdrop-blur-md py-16 px-8 flex flex-col gap-2 tablet-min:hidden"
                            initial={{opacity: 0, y: -500}}
                            animate={{opacity: 100, y: 0}}
                            exit={{opacity: 0, y: -500}}
                        >
                            <Link
                                href="/#about"
                                className="text-xl text-center hover:bg-primary/10 py-1 rounded-lg ease-in-out duration-200"
                                onClick={() => setMobileNavVisible(false)}
                            >
                                about me
                            </Link>
                            <Link
                                href="/#projects"
                                className="text-xl text-center hover:bg-primary/10 py-1 rounded-lg ease-in-out duration-200"
                                onClick={() => setMobileNavVisible(false)}
                            >
                                projects
                            </Link>
                            <Link
                                href="/AjaniGreenResume.pdf"
                                className="text-xl text-center hover:bg-primary/10 py-1 rounded-lg ease-in-out duration-200"
                                onClick={() => setMobileNavVisible(false)}
                                target="_blank"
                            >
                                resume
                            </Link>
                            <ContactDrawer />
                        </motion.div>
                    )
                }
            </AnimatePresence>
            <div className="flex justify-between px-8 py-3">
                <div className={clsx("flex items-center z-[60]", mobileNavVisible && "tablet:fixed")}>
                    <div className="mr-6 tablet-min:hidden cursor-pointer"
                         onClick={() => setMobileNavVisible(prev => !prev)}>
                        <HamburgerIcon fill="#fff" width={24}/>
                    </div>
                    <Link href="/" className="text-2xl font-bold my-2">
                        Ajani
                    </Link>
                </div>
                <NavigationMenu className="tablet:hidden">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/#about" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-xl"}>
                                    about me
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/#projects" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-xl"}>
                                    projects
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/AjaniGreenResume.pdf" target="_blank" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-xl"}>
                                    resume
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <ContactDrawer />
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </Fragment>
    )
}

export default NavBar