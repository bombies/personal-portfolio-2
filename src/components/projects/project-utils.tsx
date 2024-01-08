import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
import TypeScriptIcon from "@/components/icons/TypeScriptIcon";
import {IconProps} from "@/components/icons/icon-utils";
import NextJsIcon from "@/components/icons/NextJsIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import JavaIcon from "@/components/icons/JavaIcon";
import KotlinIcon from "@/components/icons/KotlinIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import CIcon from "@/components/icons/CIcon";
import CppIcon from "@/components/icons/CppIcon";
import {FC} from "react";
import TailwindIcon from "@/components/icons/TailwindIcon";
import HTMLIcon from "@/components/icons/HTMLIcon";
import CSSIcon from "@/components/icons/CSSIcon";
import SCSSIcon from "@/components/icons/SCSSIcon";
import NestJSIcon from "@/components/icons/NestJSIcon";
import MongoDBIcon from "@/components/icons/MongoDBIcon";
import RedisIcon from "@/components/icons/RedisIcon";
import JavaSpringIcon from "@/components/icons/JavaSpringIcon";
import InfluxDBIcon from "@/components/icons/InfluxDBIcon";
import SentryIcon from "@/components/icons/SentryIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import PostgreSQLIcon from "@/components/icons/PostgreSQLIcon";
import AWSIcon from "@/components/icons/AWSIcon";
import AngularJSIcon from "@/components/icons/AngularJSIcon";
import GrafanaIcon from "@/components/icons/GrafanaIcon";

export const ProjectTechStack: Record<string, TechStack[]> = {
    Robertify: ["java", "kotlin", "ts", "react", "nextjs", "nestjs", "redis", "mongo", "tailwind", "sass", "spring", "ktor", "influx", "sentry", "ghactions", 'grafana'],
    DreamLogger: ["react", "nextjs", "ts", "tailwind", "sass", "postgres", "aws", "ghactions"],
    GreensPub: ["react", "nextjs", "ts", "tailwind", "sass", "mongo", "ghactions"],
    MDGPT: ["react", "nextjs", "ts", "tailwind", "sass", "mongo", "python"],
    CarMart: ["angular", "ts", "tailwind", "sass", "mongo", "redis"]
}

export type TechStack = "js" | "ts" | "express" | "nextjs" | "react" | "nestjs" | "java" | "kotlin" |
    "python" | "c" | "cpp" | "redis" | "mongo" | "postgres" | "aws" | "tailwind" | "html" | "css" | "sass" |
    "spring" | "ktor" | "influx" | "sentry" | "ghactions" | "angular" | "grafana"

export const parseTechStackIcon = (stack: TechStack, props?: IconProps) => {
    switch (stack) {
        case "js":
            return <JavaScriptIcon {...props} />
        case "ts":
            return <TypeScriptIcon {...props} />
        case "nextjs":
            return <NextJsIcon {...props} />
        case "react":
            return <ReactIcon {...props} />
        case "java":
            return <JavaIcon {...props} />
        case "kotlin":
            return <KotlinIcon {...props} />
        case "python":
            return <PythonIcon {...props} />
        case "c":
            return <CIcon {...props} />
        case "cpp":
            return <CppIcon {...props} />
        case "tailwind":
            return <TailwindIcon {...props} />
        case "html":
            return <HTMLIcon {...props} />
        case "css":
            return <CSSIcon {...props} />
        case "sass":
            return <SCSSIcon {...props} />
        case "nestjs":
            return <NestJSIcon {...props} />
        case "mongo":
            return <MongoDBIcon {...props} />
        case "redis":
            return <RedisIcon {...props} />
        case "spring":
            return <JavaSpringIcon {...props} />
        case "influx":
            return <InfluxDBIcon {...props} />
        case "sentry":
            return <SentryIcon {...props} />
        case "ghactions":
            return <GitHubIcon {...props} />
        case "postgres":
            return <PostgreSQLIcon {...props} />
        case "aws":
            return <AWSIcon {...props} />
        case "angular":
            return <AngularJSIcon {...props} />
        case "grafana":
            return <GrafanaIcon {...props} />
        default:
            return <></>
    }
}

export const parseTechStackFullName = (stack: TechStack) => {
    switch (stack) {
        case "js":
            return "JavaScript"
        case "ts":
            return "TypeScript"
        case "nestjs":
            return "NestJS"
        case "nextjs":
            return "Next.js"
        case "react":
            return "ReactJS"
        case "redis":
            return "Redis"
        case "aws":
            return "Amazon Web Services"
        case "express":
            return "Express.js"
        case "c":
            return "C"
        case "cpp":
            return "C++"
        case "java":
            return "Java"
        case "kotlin":
            return "Kotlin"
        case "mongo":
            return "MongoDB"
        case "postgres":
            return "PostgreSQL"
        case "python":
            return "Python"
        case "css":
            return "CSS"
        case "html":
            return "HTML"
        case "sass":
            return "SASS"
        case "tailwind":
            return "TailwindCSS"
        case "spring":
            return "Java Spring"
        case "ktor":
            return "Ktor"
        case "influx":
            return "InfluxDB"
        case "sentry":
            return "Sentry"
        case "ghactions":
            return "GitHub Actions"
        case "angular":
            return "AngularJS"
        case "grafana":
            return "Grafana"
    }
}

type TechStackCardProps = {
    stack: TechStack
}

export const TechStackCard: FC<TechStackCardProps> = ({stack}) => {
    return (
        <div className="rounded-2xl bg-primary p-6 flex gap-4">
            {parseTechStackIcon(stack, {fill: "#000", width: 24})}
            <p className="text-darker font-semibold text-lg">{parseTechStackFullName(stack)}</p>
        </div>
    )
}