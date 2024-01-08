import {FC} from "react";
import ProjectLayout from "@/components/projects/ProjectLayout";
import {ProjectTechStack} from "@/components/projects/project-utils";
import ProjectSourceButton from "@/components/projects/ProjectSourceButton";
import ProjectHeaderButtonBox from "@/components/projects/ProjectHeaderButtonBox";
import ProjectArticle from "@/components/projects/ProjectArticle";

const GreensPubPage: FC = () => {
    return (
        <main>
            <ProjectLayout
                title="Green's Restaurant & Pub Management Website"
                description="A dashboard used to handle the managing of Green's Restaurant & Pub"
                techStack={ProjectTechStack.GreensPub}
                headerContent={(
                    <ProjectHeaderButtonBox>
                        <ProjectSourceButton href="https://github.com/bombies/greens-restaurant-website"/>
                    </ProjectHeaderButtonBox>
                )}
                carouselImages={[
                    {
                        url: "https://i.imgur.com/miGtc5e.png",
                        objectFit: "cover"
                    },
                    {url: "https://i.imgur.com/HXphz8i.gif"},
                    {url: "https://i.imgur.com/LPP7mfD.gif"},
                    {url: "https://i.imgur.com/3sDlDEP.gif"},
                    {url: "https://i.imgur.com/HE7PgbZ.gif"},
                    {url: "https://i.imgur.com/ogUNvZx.gif"},
                    {url: "https://i.imgur.com/VrAImJI.gif"},
                    {url: "https://i.imgur.com/r1hmDy2.gif"},
                    {url: "https://i.imgur.com/aXUjw8T.gif"},
                    {url: "https://i.imgur.com/gl4LEpb.gif"},
                    {url: "https://i.imgur.com/GmMatSY.gif"},
                    {url: "https://i.imgur.com/7HmQpxp.gif"},
                    {url: "https://i.imgur.com/PuTKIeS.gif"},
                    {url: "https://i.imgur.com/gf4mkYl.gif"},
                    {url: "https://i.imgur.com/EdS3b7g.gif"},
                    {url: "https://i.imgur.com/AKcGTtM.gif"},
                    {url: "https://i.imgur.com/x9gEW1Q.png"},
                    {url: "https://i.imgur.com/qtUhAh7.png"},
                    {url: "https://i.imgur.com/xeMiGJ9.gif"},
                    {url: "https://i.imgur.com/URTi3ZL.gif"},
                ]}
            >
                <ProjectArticle title={"about the project"}>
                    This project written in TypeScript is a comprehensive company dashboard designed to streamline
                    inventory management and facilitate data-driven decision-making. It offers a range of features,
                    including inventory management, insightful analysis, invoice generation, and user
                    management.<br/><br/>

                    The core functionality of the dashboard revolves around inventory management. Users can easily
                    create new inventories, providing essential details such as product names, quantities, and other
                    relevant information. The system then utilizes historical data to generate insights specific to each
                    inventory. These insights are derived from analyzing past stock data and provide valuable
                    information to make intelligent decisions about future stock choices. This enables the company to
                    optimize its inventory, minimize stockouts, and improve overall operational efficiency.<br/><br/>

                    The dashboard also manages inventory for specific locations. These locations depend on the general
                    inventories for their items and even integrate an inventory requests system for employees to move
                    items from one area to another in a tracked and organized manner.<br/><br/>

                    The dashboard also incorporates an invoice generation module, allowing the company to effortlessly
                    bill customers. The invoice formatting is highly configurable, ensuring flexibility to accommodate
                    specific business requirements. Users can define the layout, include custom fields, and tailor the
                    appearance of the invoice to align with their branding. This simplifies the invoicing process,
                    enabling swift and accurate billing for improved financial management.<br/><br/>

                    Additionally, the project includes robust user management capabilities. Administrators can easily
                    add and remove users from the system, granting or revoking access as needed. Each user&apos;s
                    permissions
                    within the dashboard are highly configurable, allowing fine-grained control over their actions and
                    access levels. The system employs binary arithmetic to handle permissions, ensuring both security
                    and computational efficiency. This approach provides a scalable and efficient way to manage user
                    access rights without compromising data integrity or system performance.<br/><br/>

                    Overall, this project offers a comprehensive company dashboard with powerful inventory management
                    features. By leveraging historical data insights, flexible invoice generation, and efficient user
                    management, the dashboard empowers businesses to make informed decisions, optimize stock management,
                    and streamline operations effectively.<br/><br/>
                </ProjectArticle>
            </ProjectLayout>
        </main>
    )
}

export default GreensPubPage