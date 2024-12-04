import { FC } from "react";
import ProjectLayout from "../../../components/projects/ProjectLayout";
import { TechStack } from "../../../components/projects/project-utils";

const EarleWilsonPage: FC = () => {
    return (
        <main>
            <ProjectLayout
                title="Earle & Wilson Website"
                description="A website made for the Jamaican law-firm, Earle & Wilson"
                techStack={[
                    TechStack.TypeScript,
                    TechStack.ReactJs,
                    TechStack.NextJs,
                ]}
            ></ProjectLayout>
        </main>
    );
};

export default EarleWilsonPage;
