"use client"

import {FC, useMemo, useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "@/components/ui/card";
import {parseTechStackIcon, TechStack} from "@/components/projects/project-utils";
import Image from "@/components/Image";
import Link from "next/link";
import clsx from "clsx";

type ProjectCardProps = {
    title: string,
    description: string,
    coverImg: string,
    techStack?: TechStack[]
    href?: string
}

const ProjectCard: FC<ProjectCardProps> = ({title, description, coverImg, techStack, href = ""}) => {
    const [isHovered, setHovered] = useState(false)

    const stackIcons = useMemo(() =>
        techStack?.map(stack => parseTechStackIcon(stack, { fill: "#20c573", width: 32}))
    , [techStack])
    
    return (
        <Link href={href}>
            <Card className="w-96 phone:w-80 cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
            >
                <div className="relative">
                    <Image src={coverImg} alt="" objectFit="cover" fill className="w-full h-48"/>
                </div>
                <CardContent>
                    <CardTitle className={clsx("my-6 text-4xl", isHovered && "text-primary ease-in-out duration-300")}>{title}</CardTitle>
                    <CardDescription className={clsx(isHovered && "text-primary brightness-150 ease-in-out duration-300")}>{description}</CardDescription>
                </CardContent>
                {
                    stackIcons && (
                        <CardFooter>
                            <div className="w-60 grid grid-cols-5 gap-y-4">
                                {stackIcons}
                            </div>
                        </CardFooter>
                    )
                }
            </Card>
        </Link>
    )
}

export default ProjectCard