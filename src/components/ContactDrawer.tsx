import {FC, ReactElement} from "react";
import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import GitHubIcon from "@/components/icons/GitHubIcon";
import Link from "next/link";
import MailIcon from "@/components/icons/MailIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const ContactDrawer: FC = () => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="ghost" className="text-xl hover:bg-primary/10">
                    contact
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Contact Me</DrawerTitle>
                        <DrawerDescription>You can reach me through the following...</DrawerDescription>
                        <div className="grid grid-cols-1 gap-6 mt-12">
                            <ContactCard
                                href="mailto:ajani.green@outlook.com"
                                icon={<MailIcon width={48} fill={"#000f03"}/>}
                                title={"Email"}
                                content={"ajani.green@outlook.com"}
                            />
                            <ContactCard
                                href="https://github.com/bombies"
                                icon={<GitHubIcon width={48} fill={"#000f03"}/>}
                                title={"GitHub"}
                                content={"bombies"}
                            />
                            <ContactCard
                                href="https://www.linkedin.com/in/ajani-green-83b469225/"
                                icon={<LinkedInIcon width={48} fill={"#000f03"}/>}
                                title={"LinkedIn"}
                                content={"Ajani Green"}
                            />
                        </div>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button>Okay!</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default ContactDrawer

type ContactCard = {
    href: string,
    icon: ReactElement,
    title: string,
    content: string,
}

const ContactCard: FC<ContactCard> = ({href, icon, title, content}) => {
    return (
        <Link href={href}>
            <Card className="bg-primary">
                <CardContent className="py-6">
                    <div className="flex gap-4">
                        {icon}
                        <div>
                            <p className="self-center text-xl font-semibold text-darker text-left">{title}</p>
                            <p className="text-darker underline">{content}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}