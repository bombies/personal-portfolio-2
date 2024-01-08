import {FC, PropsWithChildren} from "react";

const ProjectHeaderButtonBox: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="flex flex-wrap gap-4 mt-6 bg-darker p-4 rounded-2xl w-fit">
            {children}
        </div>
    )
}

export default ProjectHeaderButtonBox