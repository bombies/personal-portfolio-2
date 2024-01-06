import Image from "@/components/Image";
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
                    <h3 className="text-5xl phone:text-3xl font-semibold mb-4 text-neutral-100">i&apos;m <span className="text-primary font-bold">Ajani Green</span>
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
                                <CarouselItem className="basis-1/6 phone:basis-1/3"><JavaScriptIcon width={48} fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 phone:basis-1/3"><TypeScriptIcon width={48} fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 phone:basis-1/3"><HTMLIcon width={48} fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 phone:basis-1/3"><CSSIcon width={48} fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 phone:basis-1/3"><SCSSIcon width={48} fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 phone:basis-1/3"><TailwindIcon width={48} fill="#20c573"/></CarouselItem>

                                <CarouselItem className="basis-1/6 phone:basis-1/3"><ReactIcon width={48} fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 phone:basis-1/3"><NextJsIcon width={48} fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 phone:basis-1/3"><JavaIcon width={48} fill="#20c573"/></CarouselItem>
                                <CarouselItem className="basis-1/6 phone:basis-1/3"><KotlinIcon width={48} fill="#20c573" /></CarouselItem>
                                <CarouselItem className="basis-1/6 phone:basis-1/3"><CIcon width={48} fill="#20c573" /></CarouselItem>
                                <CarouselItem className="basis-1/6 phone:basis-1/3"><CppIcon width={48} fill="#20c573" /></CarouselItem>

                                <CarouselItem className="basis-1/6 phone:basis-1/3"><PythonIcon width={48} fill="#20c573" /></CarouselItem>
                            </CarouselContent>
                        </AutoCarousel>
                    </div>
                </div>
            </section>
            <section className="px-24 py-12 phone:px-6">
                <h1 className="font-bold text-5xl text-neutral-100">about me</h1>
            </section>
        </main>
    )
}
