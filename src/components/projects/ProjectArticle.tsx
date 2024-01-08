import {FC, PropsWithChildren} from "react";

type ProjectArticleProps = {
    title: string,
} & PropsWithChildren

const ProjectArticle: FC<ProjectArticleProps> = ({title, children}) => {
    return (
        <article>
            <h6 className="font-semibold text-4xl text-primary mb-6">{title}</h6>
            <p className="max-w-4xl text-neutral-200 phone:text-justify text-lg whitespace-pre-wrap">{children}</p>
            <hr className="border border-primary/20 my-6"/>
        </article>
    )
}

export default ProjectArticle