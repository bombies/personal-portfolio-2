import {FC} from "react";
import ProjectLayout from "@/components/projects/ProjectLayout";
import {ProjectTechStack} from "@/components/projects/project-utils";
import ProjectHeaderButtonBox from "@/components/projects/ProjectHeaderButtonBox";
import ProjectDemoButton from "@/components/projects/ProjectDemoButton";
import ProjectSourceButton from "@/components/projects/ProjectSourceButton";
import ProjectArticle from "@/components/projects/ProjectArticle";

const DreamLoggerPage: FC = () => {
    return (
        <main>
            <ProjectLayout
                title={"Dream Logger"}
                description="Your Personal Dream Journal and Character Odyssey"
                techStack={ProjectTechStack.DreamLogger}
                headerContent={(
                    <ProjectHeaderButtonBox>
                        <ProjectDemoButton href="https://dreamlogger.ajani.me/"/>
                        <ProjectSourceButton href="https://github.com/bombies/dream-logger-website"/>
                    </ProjectHeaderButtonBox>
                )}
                carouselImages={[
                    {
                        url: "https://i.ajani.me/images/9sdz6.png"
                    },
                    {
                        url: "https://i.ajani.me/images/jk6jg.png"
                    },
                    {
                        url: "https://i.ajani.me/images/yo6qa.png"
                    },
                    {
                        url: "https://i.ajani.me/images/8udvr.gif"
                    },
                    {
                        url: "https://i.ajani.me/images/plowk.gif"
                    },
                    {
                        url: "https://i.ajani.me/images/gg6pn.png"
                    },
                    {
                        url: "https://i.ajani.me/images/pkwc5.png"
                    },
                    {
                        url: "https://i.ajani.me/images/6f0me.png"
                    },
                    {
                        url: "https://i.ajani.me/images/pqi0f.gif"
                    },
                    {
                        url: "https://i.ajani.me/images/nhgzk.gif"
                    },
                    {
                        url: "https://i.ajani.me/images/8v2ck.gif"
                    },
                    {
                        url: "https://i.ajani.me/images/shbvq.png"
                    },
                    {
                        url: "https://i.ajani.me/images/6uoys.png"
                    },
                ]}
            >
                <ProjectArticle title={"about DreamLogger"}>
                    DreamLogger is a showcase of my expertise in full-stack web development, featuring a captivating
                    Next.js front-end enriched with TypeScript, SASS, TailwindCSS, and UI libraries. The
                    application&apos;s
                    robust back-end utilizes Prisma for efficient database queries, Next-Auth for secure user
                    authentication, and leverages AWS components like S3, CloudFront, and Route53 for scalability. The
                    meticulous design process, initiated in Figma, resulted in a seamless user experience, ensuring
                    dream enthusiasts can effortlessly log, categorize, and share their dreams while exploring
                    personalized features like the Dream Calendar, custom tags, and character tracking. DreamLogger
                    represents not just a web application, but a fusion of innovative technologies and thoughtful
                    design, encapsulating the potential of modern web development.
                </ProjectArticle>
                <ProjectArticle title={"the back-end"}>
                    The backend of DreamLogger is a robust architecture carefully designed to ensure scalability,
                    security, and seamless functionality.<br/><br/>

                    <span className="text-xl text-secondary font-semibold">Next.js and Prisma</span><br/><br/>
                    The backbone of the backend is built on Next.js, a versatile React framework that enables
                    server-side rendering, routing, and efficient development. Prisma, a powerful database toolkit,
                    handles database queries efficiently with a type-safe approach, ensuring data integrity and
                    minimizing errors.<br/><br/>

                    Route handling in DreamLogger is implemented using Next.js Route Handlers, enabling efficient
                    request handling and allowing for the creation of dynamic routes that seamlessly integrate with the
                    frontend.<br/><br/>

                    <span className="text-xl text-secondary font-semibold">PostgreSQL</span><br/><br/>
                    DreamLogger utilizes a PostgreSQL database to manage the related nature of the data, offering a
                    reliable and scalable solution for storing user information, dream logs, and associated
                    metadata.<br/><br/>

                    <span className="text-xl text-secondary font-semibold">AWS Integration</span><br/><br/>
                    DreamLogger integrates AWS services to enhance performance and reliability:<br/><br/>

                    Amazon Simple Storage Service (S3) is employed to store and retrieve static assets, ensuring
                    efficient data storage and retrieval.<br/><br/>

                    Amazon CloudFront is used as a content delivery network (CDN) to accelerate the distribution of
                    static and dynamic web content, improving the overall speed and responsiveness of the
                    application.<br/><br/>

                    AWS Route53 handles DNS management, providing a scalable and highly available Domain Name System
                    (DNS) web service for routing end-user requests to the appropriate resources.<br/><br/>

                    <span
                        className="text-xl text-secondary font-semibold">Authentication and Authorization</span><br/><br/>
                    Authentication is achieved through Next-Auth, a secure and versatile authentication library for
                    Next.js applications. DreamLogger leverages Google&apos;s OAuth provider to ensure a secure and
                    streamlined authentication process. Authorization levels are implemented to manage access to various
                    features and functionalities, ensuring that user data is accessed only by authorized
                    individuals.<br/><br/>

                    <span className="text-xl text-secondary font-semibold">Encryption and Data Security</span><br/><br/>
                    Ensuring the security of user data is a top priority for DreamLogger. Several measures are in place:<br/><br/>

                    HTTPS: The entire application is served over HTTPS to encrypt data in transit, preventing
                    unauthorized access during communication between the user&apos;s browser and the server.<br/><br/>

                    Password Hashing: User passwords are hashed before storage, employing industry-standard hashing
                    algorithms to protect sensitive information.<br/><br/>

                    Secure Cookies: Secure cookies are used to manage user sessions securely, preventing unauthorized
                    access to sensitive data.<br/><br/>

                    Client-Side Encryption: Additional layers of security are implemented through client-side
                    encryption, enhancing the protection of user data.
                </ProjectArticle>
                <ProjectArticle title={"the front-end"}>
                    DreamLogger&apos;s front-end is meticulously crafted to deliver a captivating and user-friendly
                    interface, incorporating various technologies to ensure responsiveness, state management, and
                    efficient data fetching and mutation.<br/><br/>

                    <span className="text-xl text-secondary font-semibold">Next.js with TypeScript</span><br/><br/>
                    The front-end is built using Next.js, taking advantage of its powerful features like server-side
                    rendering, automatic code splitting, and seamless integration with TypeScript. TypeScript adds a
                    layer of static typing for enhanced development and codebase robustness.<br/><br/>

                    <span className="text-xl text-secondary font-semibold">SWR (Stale-While-Revalidate)</span><br/><br/>
                    DreamLogger leverages SWR, a React Hooks library for remote data fetching, to optimize the user
                    experience. SWR allows for the seamless integration of data from the server while providing a
                    responsive and reactive interface.<br/><br/>

                    <span
                        className="text-xl text-secondary font-semibold">Custom Global Application State Handling</span><br/><br/>
                    To manage global application state, DreamLogger employs React Contexts. This custom state management
                    solution ensures a centralized and efficient approach to handling shared state across various
                    components, promoting maintainability and scalability.<br/><br/>

                    <span className="text-xl text-secondary font-semibold">Custom Components and NextUI</span><br/><br/>
                    DreamLogger&apos;s user interface is enriched by custom components, tailored to the
                    application&apos;s unique
                    design. These components are built upon NextUI, a UI library that provides a set of React components
                    with a clean and modern design. This ensures a consistent and visually appealing look and feel
                    across the application.<br/><br/>

                    <span
                        className="text-xl text-secondary font-semibold">Custom API Handlers with Axios</span><br/><br/>
                    API handling in DreamLogger is streamlined through custom handlers built upon Axios, a popular HTTP
                    client for the browser and Node.js. This ensures efficient communication between the front-end and
                    back-end, with the ability to manage API requests and responses seamlessly.<br/><br/>

                    <span
                        className="text-xl text-secondary font-semibold">Figma for Design and Prototyping</span><br/><br/>
                    Before translating the design into code, DreamLogger&apos;s user interface is designed and prototyped
                    using Figma. Figma allows for collaborative design, ensuring that the final product aligns with the
                    initial vision and user experience goals.<br/><br/>
                </ProjectArticle>
            </ProjectLayout>
        </main>
    )
}

export default DreamLoggerPage