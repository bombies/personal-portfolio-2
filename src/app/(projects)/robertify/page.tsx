import {FC} from "react";
import ProjectLayout from "@/components/projects/ProjectLayout";
import ProjectArticle from "@/components/projects/ProjectArticle";
import ProjectDemoButton from "@/components/projects/ProjectDemoButton";
import ProjectSourceButton from "@/components/projects/ProjectSourceButton";
import {ProjectTechStack} from "@/components/projects/project-utils";
import ProjectHeaderButtonBox from "@/components/projects/ProjectHeaderButtonBox";

const RobertifyPage: FC = () => {
    return (
        <main>
            <ProjectLayout
                title={"Robertify"}
                description={"A next-gen Discord music bot with a multitude of features."}
                headerContent={
                    <ProjectHeaderButtonBox>
                        <ProjectDemoButton href="https://robertify.me/" />
                        <ProjectSourceButton href="https://github.com/bombies/Robertify-Bot">Bot Source Code</ProjectSourceButton>
                        <ProjectSourceButton href="https://github.com/bombies/Robertify-Website">Website Source Code</ProjectSourceButton>
                        <ProjectSourceButton href="https://github.com/bombies/Robertify-API">API Source Code</ProjectSourceButton>
                    </ProjectHeaderButtonBox>
                }
                carouselImages={[
                    {
                        url: "https://i.robertify.me/images/k59gh.png",
                        objectFit: "cover"
                    },
                    {
                        url: "https://i.imgur.com/m2jxRtf.png",
                    },
                    {
                        url: "https://i.imgur.com/b6g8wbJ.png",
                    },
                    {
                        url: "https://i.imgur.com/do0JwZY.png",
                    },
                    {
                        url: "https://i.imgur.com/vRXdN0T.png",
                    },
                    {
                        url: "https://i.imgur.com/fA0bCEL.png",
                    },
                    {
                        url: "https://i.gyazo.com/28e4864e6b439d081ff2962200e5f81c.gif",
                    },
                    {
                        url: "https://i.imgur.com/sSDPqig.png",
                    },
                    {
                        url: "https://i.imgur.com/ZZT2qBx.png",
                    }
                ]}
                techStack={ProjectTechStack.Robertify}
            >
                <ProjectArticle title="about Robertify">
                    Robertify is a music bot written completely in Java and Kotlin using JDA. The
                    name &quot;Robertify&quot;
                    originated from the simple fact that a friend of mine, named Robert, wanted a music bot. So I made
                    one for him. Eventually, Robertify became a bigger project to me and I have been putting in most of
                    my efforts into it ever since.<br/><br/>

                    Robertify has gone through several versions, each of which bringing a major change. Version 1
                    involved just the implementation of the bare-boned music playing capabilities, wheras the upcoming
                    version 6 is a rewrite from Java to Kotlin with features such as a web dashboard, statistics
                    tracking, data visualization and more modern features.<br/><br/>

                    All in all, Robertify is the project that has taught me the most about the software development
                    industry, especially with respect to scale. Robertify serves around 800,000 people worldwide through
                    a popular platform known as Discord. I have learn through mutliple trial and error instances to
                    manage such a user-base.<br/><br/>

                    I could go on and on about the many lessons I&apos;ve learnt from building this application but I
                    think
                    that&apos;s better fit for a blog post. Instead, you can enjoy this list of all the technologies
                    used.
                </ProjectArticle>
            </ProjectLayout>
        </main>
    )
}

export default RobertifyPage