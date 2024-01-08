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
import {FC} from "react";
import ExpressJsIcon from "@/components/icons/ExpressJsIcon";

export enum TechStack {
    JavaScript,
    TypeScript,
    ExpressJs,
    NextJs,
    ReactJs,
    NestJs,
    Java,
    Kotlin,
    Python,
    C,
    Cpp,
    Redis,
    MongoDB,
    PostgreSQL,
    AWS,
    TailwindCSS,
    HTML,
    CSS,
    SASS,
    Spring,
    Ktor,
    Influx,
    Sentry,
    GitHubActions,
    Angular,
    Grafana
}

export const ProjectTechStack: Record<string, TechStack[]> = {
    Robertify: [TechStack.Java, TechStack.Kotlin, TechStack.TypeScript, TechStack.ReactJs, TechStack.NextJs, TechStack.NestJs, TechStack.Redis, TechStack.MongoDB, TechStack.TailwindCSS, TechStack.SASS, TechStack.Spring, TechStack.Ktor, TechStack.Influx, TechStack.Sentry, TechStack.GitHubActions, TechStack.Grafana],
    DreamLogger: [TechStack.ReactJs, TechStack.NextJs, TechStack.TypeScript, TechStack.TailwindCSS, TechStack.SASS, TechStack.PostgreSQL, TechStack.AWS, TechStack.GitHubActions],
    GreensPub: [TechStack.ReactJs, TechStack.NextJs, TechStack.TypeScript, TechStack.TailwindCSS, TechStack.SASS, TechStack.MongoDB, TechStack.GitHubActions],
    MDGPT: [TechStack.ReactJs, TechStack.NextJs, TechStack.TypeScript, TechStack.TailwindCSS, TechStack.SASS, TechStack.MongoDB, TechStack.Python],
    CarMart: [TechStack.Angular, TechStack.TypeScript, TechStack.TailwindCSS, TechStack.SASS, TechStack.MongoDB, TechStack.Redis]
}

export const parseTechStackIcon = (stack: TechStack, props?: IconProps) => {
    switch (stack) {
        case TechStack.JavaScript:
            return <JavaScriptIcon {...props} />
        case TechStack.TypeScript:
            return <TypeScriptIcon {...props} />
        case TechStack.NextJs:
            return <NextJsIcon {...props} />
        case TechStack.ReactJs:
            return <ReactIcon {...props} />
        case TechStack.Java:
            return <JavaIcon {...props} />
        case TechStack.Kotlin:
            return <KotlinIcon {...props} />
        case TechStack.Python:
            return <PythonIcon {...props} />
        case TechStack.C:
            return <CIcon {...props} />
        case TechStack.Cpp:
            return <CppIcon {...props} />
        case TechStack.TailwindCSS:
            return <TailwindIcon {...props} />
        case TechStack.HTML:
            return <HTMLIcon {...props} />
        case TechStack.CSS:
            return <CSSIcon {...props} />
        case TechStack.SASS:
            return <SCSSIcon {...props} />
        case TechStack.NestJs:
            return <NestJSIcon {...props} />
        case TechStack.MongoDB:
            return <MongoDBIcon {...props} />
        case TechStack.Redis:
            return <RedisIcon {...props} />
        case TechStack.Spring:
            return <JavaSpringIcon {...props} />
        case TechStack.Influx:
            return <InfluxDBIcon {...props} />
        case TechStack.Sentry:
            return <SentryIcon {...props} />
        case TechStack.GitHubActions:
            return <GitHubIcon {...props} />
        case TechStack.PostgreSQL:
            return <PostgreSQLIcon {...props} />
        case TechStack.AWS:
            return <AWSIcon {...props} />
        case TechStack.Angular:
            return <AngularJSIcon {...props} />
        case TechStack.Grafana:
            return <GrafanaIcon {...props} />
        case TechStack.ExpressJs:
            return <ExpressJsIcon {...props} />
        default:
            return <></>
    }
}

export const parseTechStackFullName = (stack: TechStack) => {
    switch (stack) {
        case TechStack.JavaScript:
            return "JavaScript"
        case TechStack.TypeScript:
            return "TypeScript"
        case TechStack.NestJs:
            return "NestJS"
        case TechStack.NextJs:
            return "Next.js"
        case TechStack.ReactJs:
            return "ReactJS"
        case TechStack.Redis:
            return "Redis"
        case TechStack.AWS:
            return "Amazon Web Services"
        case TechStack.ExpressJs:
            return "Express.js"
        case TechStack.C:
            return "C"
        case TechStack.Cpp:
            return "C++"
        case TechStack.Java:
            return "Java"
        case TechStack.Kotlin:
            return "Kotlin"
        case TechStack.MongoDB:
            return "MongoDB"
        case TechStack.PostgreSQL:
            return "PostgreSQL"
        case TechStack.Python:
            return "Python"
        case TechStack.CSS:
            return "CSS"
        case TechStack.HTML:
            return "HTML"
        case TechStack.SASS:
            return "SASS"
        case TechStack.TailwindCSS:
            return "TailwindCSS"
        case TechStack.Spring:
            return "Java Spring"
        case TechStack.Ktor:
            return "Ktor"
        case TechStack.Influx:
            return "InfluxDB"
        case TechStack.Sentry:
            return "Sentry"
        case TechStack.GitHubActions:
            return "GitHub Actions"
        case TechStack.Angular:
            return "AngularJS"
        case TechStack.Grafana:
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
            <p className="text-darker font-semibold text-lg self-center">{parseTechStackFullName(stack)}</p>
        </div>
    )
}