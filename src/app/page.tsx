import {CarouselContent, CarouselItem} from "@/components/ui/carousel";
import AutoCarousel from "@/components/AutoCarousel";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
import TypeScriptIcon from "@/components/icons/TypeScriptIcon";
import HTMLIcon from "@/components/icons/HTMLIcon";
import CSSIcon from "@/components/icons/CSSIcon";
import SCSSIcon from "@/components/icons/SCSSIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import NextJsIcon from "@/components/icons/NextJsIcon";
import JavaIcon from "@/components/icons/JavaIcon";
import KotlinIcon from "@/components/icons/KotlinIcon";
import CIcon from "@/components/icons/CIcon";
import CppIcon from "@/components/icons/CppIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import ProjectCard from "@/components/projects/ProjectCard";
import {ProjectTechStack} from "@/components/projects/project-utils";

export default function Home() {
    return (
        <main>
            <section className="px-24 phone:px-6 w-full h-fit" style={{
                backgroundImage: "url(/images/blur-bg-2.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%"
            }}>
                <div className="flex flex-col justify-center h-screen phone:items-center w-full">
                    <h1 className="text-7xl phone:text-5xl font-bold mb-4 text-neutral-100">Hey 👋🏾,</h1>
                    <h3 className="text-5xl phone:text-3xl font-semibold mb-4 text-neutral-100">i&apos;m <span
                        className="text-primary font-bold">Ajani Green</span>
                    </h3>
                    <div className="border border-primary bg-primary  rounded-2xl p-6 w-fit mb-4">
                        <p className="font-semibold text-darker text-2xl phone:text-lg">Full Stack Developer</p>
                    </div>
                    <div className="w-1/2 phone:w-64 !overflow-hidden">
                        <AutoCarousel delay={5000}
                                      opts={{
                                          align: 'start',
                                          loop: true
                                      }}
                        >
                            <CarouselContent
                                className="-ml-1"
                            >
                                <CarouselItem className="basis-1/6 tablet:basis-1/4 phone:basis-1/3"><JavaScriptIcon
                                    width={48}
                                    fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><TypeScriptIcon
                                    width={48}
                                    fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><HTMLIcon
                                    width={48}
                                    fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><CSSIcon
                                    width={48} fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><SCSSIcon
                                    width={48}
                                    fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><TailwindIcon
                                    width={48}
                                    fill="#20c573"/></CarouselItem>

                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><ReactIcon
                                    width={48}
                                    fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><NextJsIcon
                                    width={48}
                                    fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><JavaIcon
                                    width={48}
                                    fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><KotlinIcon
                                    width={48}
                                    fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><CIcon width={48}
                                                                                                             fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><CppIcon
                                    width={48} fill="#20c573"/></CarouselItem>

                                <CarouselItem className="basis-1/6 tablet:basis-1/4  phone:basis-1/3"><PythonIcon
                                    width={48}
                                    fill="#20c573"/></CarouselItem>
                            </CarouselContent>
                        </AutoCarousel>
                    </div>
                </div>
            </section>
            <section className="px-24 py-12 phone:px-6">
                <h1 className="font-bold text-5xl text-neutral-100 phone:text-center mb-4">about me</h1>
                <p className="w-1/2 tablet:w-5/6 phone:w-full">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda, deserunt harum id
                    iste natus non possimus quae quam quo soluta suscipit totam unde velit voluptate? Eveniet
                    perspiciatis ratione voluptatem.
                </p>
            </section>
            <section className="px-24 py-12 phone:px-6">
                <h1 className="font-bold text-5xl text-neutral-100 phone:text-center mb-4">my projects</h1>
                <div className="grid grid-cols-3 laptop:grid-cols-2 tablet:grid-cols-1 tablet:justify-items-center gap-8">
                    <ProjectCard
                        title="Robertify"
                        description={"Robertify is a music bot written completely in Java and Kotlin using the Java Discord API (JDA)."}
                        coverImg="https://i.robertify.me/images/k59gh.png"
                        href="/robertify"
                        techStack={ProjectTechStack.Robertify}
                    />
                    <ProjectCard
                        title="Dream Logger"
                        description={"DreamLogger is a Next.js web application, seamlessly blending captivating user interfaces with robust backend technologies like Prisma, AWS, and PostgreSQL, to provide dream enthusiasts with a secure, feature-rich platform for logging, exploring, and sharing the intricate landscapes of their dreams."}
                        coverImg="https://i.ajani.me/images/mo9ac.jpg"
                        href="/dreamlogger"
                        techStack={ProjectTechStack.DreamLogger}
                    />
                    <ProjectCard
                        title="Green's Restaurant & Pub Management Dashboard"
                        description={"This website was aimed to manage the day-to-day stock, employee and invoice operations at a small business known as Green's Restaurant & Pub."}
                        coverImg="https://i.imgur.com/q8pQXZq.png"
                        href="/greenspub"
                        techStack={ProjectTechStack.GreensPub}
                    />
                    <ProjectCard
                        title="MD-GPT"
                        description={"An AI-Powered chat-based tool to help medical doctors with patient diagnosis."}
                        coverImg="https://i.imgur.com/D1KfkO2.png"
                        href="/mdgpt"
                        techStack={ProjectTechStack.MDGPT}
                    />
                    <ProjectCard
                        title="The Car Mart"
                        description={"The Car Mart Project is a comprehensive web-based application designed to facilitate the management of car dealerships across the various parishes of Jamaica. The system's primary functionality revolves around performing CRUD (Create, Read, Update, Delete) operations on car listings, while also catering to specific user roles and per"}
                        coverImg="https://i.imgur.com/8x2AYKJ.png"
                        href="/car-mart"
                        techStack={ProjectTechStack.CarMart}
                    />
                </div>
            </section>
            <section className="px-24 py-12 phone:px-6">
                <h1 className="font-bold text-5xl text-neutral-100 phone:text-center mb-4">skills & technologies</h1>
            </section>
        </main>
    )
}
