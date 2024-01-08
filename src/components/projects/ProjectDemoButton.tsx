import {FC} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {LinkIcon} from "lucide-react";

type ProjectDemoButtonProps = {
    href: string
}

const ProjectDemoButton: FC<ProjectDemoButtonProps> = ({href}) => {
    return (
        <Link href={href} target="_blank">
            <Button className="rounded-2xl gap-2 font-semibold">
                Demo
                <LinkIcon width={16} />
            </Button>
        </Link>

    )
}

export default ProjectDemoButton