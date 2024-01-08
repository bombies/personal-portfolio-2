import {FC} from "react";
import ProjectLayout from "@/components/projects/ProjectLayout";
import {ProjectTechStack} from "@/components/projects/project-utils";
import ProjectArticle from "@/components/projects/ProjectArticle";
import ProjectSourceButton from "@/components/projects/ProjectSourceButton";
import ProjectHeaderButtonBox from "@/components/projects/ProjectHeaderButtonBox";

const CarMartPage: FC = () => {
    return (
        <main>
            <ProjectLayout
                title={"The Car Mart"}
                description={"A collaborative imaginary car mart management website"}
                techStack={ProjectTechStack.CarMart}
                carouselImages={[
                    {url: "https://i.imgur.com/8x2AYKJ.png"},
                    {url: "https://i.imgur.com/IChHdmp.png"},
                    {url: "https://i.imgur.com/BLpUkC4.png"},
                    {url: "https://i.imgur.com/UmqPdyF.png"},
                ]}
                headerContent={(
                    <ProjectHeaderButtonBox>
                        <ProjectSourceButton href="https://github.com/MikesGit138/CarMartClient">Front-End Source Code</ProjectSourceButton>
                        <ProjectSourceButton href="https://github.com/bombies/car-mart-backend">Back-End Source Code</ProjectSourceButton>
                    </ProjectHeaderButtonBox>
                )}
            >
                <ProjectArticle title={"about The Car Mart"}>
                    The Car Mart is an imaginary business place dedicated to selling cars. This project was assigned to
                    me and one other member of the Computing Society at the University of the West Indies, Mona by the
                    club president. We were given a document of requirements to fulfil.<br/><br/>

                    The requirements stated that the front-end and back-end of the service must be separated. I chose to
                    focus on the back-end portion, however I still designed the front-end.<br/><br/>

                    The back-end was made using NestJS, a TypeScript back-end framework based on Express. This was my
                    introduction to making back-end applications using NestJS. I learnt how to speed up response times
                    with caching, use proper database schemas, implement request body validation, authorize users with
                    JWT tokens and so much more.<br/><br/>

                    The front-end was implemented using AngularJS and designed with Figma. I did not handle the more
                    complicated front-end tasks as I am not very experienced with Angular. However, I did implement a
                    lot of the styling as TailwindCSS was used.<br/><br/>
                </ProjectArticle>
            </ProjectLayout>
        </main>
    )
}

export default CarMartPage