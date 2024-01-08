import {FC, PropsWithChildren} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {CodeIcon} from "lucide-react";

type ProjectSourceButtonProps = {
    href: string,
} & PropsWithChildren

const ProjectSourceButton: FC<ProjectSourceButtonProps> = ({href, children}) => {
    return (
        <Link href={href} target="_blank">
            <Button className="rounded-2xl gap-2 font-semibold">
                <CodeIcon width={16} />
                {children ?? "Source Code"}
            </Button>
        </Link>

    )
}

export default ProjectSourceButton