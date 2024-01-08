import {FC, PropsWithChildren, ReactElement} from "react";
import Image, {ObjectFit} from "@/components/Image";
import AutoCarousel from "@/components/AutoCarousel";
import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {TechStack, TechStackCard} from "@/components/projects/project-utils";
import {Button} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";

type ProjectLayoutCarouselImage = {
    url: string,
    objectFit?: ObjectFit
}

type ProjectLayoutProps = {
    title: string,
    description: string,
    headerContent?: ReactElement | ReactElement[],
    carouselImages?: ProjectLayoutCarouselImage[],
    techStack: TechStack[]
} & PropsWithChildren

const ProjectLayout: FC<ProjectLayoutProps> = ({
                                                   title,
                                                   description,
                                                   headerContent,
                                                   carouselImages,
                                                   techStack,
                                                   children
                                               }) => {
    return (
        <>
            {
                carouselImages?.length && (
                    <section className="px-20 phone:px-14">
                        <AutoCarousel delay={10000} opts={{
                            loop: true
                        }}>
                            <CarouselContent>
                                {carouselImages.map((image, i) => (
                                    <CarouselItem key={i}>
                                        <Image
                                            className="w-full h-[55vh]"
                                            src={image.url}
                                            alt=""
                                            objectFit={image.objectFit ?? "contain"}
                                            fill
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </AutoCarousel>
                    </section>
                )
            }
            <section className="py-12 px-20 phone:p-6">
                <div className="border border-primary bg-primary rounded-2xl p-6 max-w-xl mb-12">
                    <Link href="/">
                        <Button variant="link" className="text-darker gap-2 p-0">
                            <ArrowLeft width={16} />
                            Go back
                        </Button>
                    </Link>
                    <h1 className="font-bold text-5xl phone:text-3xl mb-4 text-black">{title}</h1>
                    <h3 className="font-semibold text-darker text-lg phone:text-sm">{description}</h3>
                    {headerContent}
                </div>
                {children}
            </section>
            <section className="py-12 px-20 phone:p-6">
                <h6 className="font-semibold text-3xl text-primary">tech stack</h6>
                <hr className="border border-primary/20 my-6"/>
                <div className="grid grid-cols-3 gap-4 tablet:grid-cols-2 phone:grid-cols-1">
                    {techStack.map((stack, i) => (
                        <TechStackCard key={`${i}#${stack}`} stack={stack}/>
                    ))}
                </div>
                <hr className="border border-primary/20 my-6"/>
            </section>
        </>
    )
}

export default ProjectLayout