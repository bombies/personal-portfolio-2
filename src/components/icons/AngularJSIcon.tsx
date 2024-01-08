import * as React from "react"
import {IconProps} from "@/components/icons/icon-utils";
import clsx from "clsx";

const AngularJSIcon = ({className, fill, width, height}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? 16}
        height={height ?? width ?? 16}
        fill="none"
        viewBox="0 0 32 32"
        className={clsx("self-center", className)}
    >
        <path fill={clsx(fill || "#DD0031")} d="M16 2 3 7l2 17 11 6 11-6 2-17-13-5Z"/>
        <path fill={clsx(fill || "#C3002F")} d="M16 2v28l11-6 2-17-13-5Z"/>
        <path
            fill="#fff"
            d="m16 5.094-8.127 18.27h3.03l1.634-4.088h6.898l1.634 4.088h3.03l-8.1-18.27Zm2.374 11.662h-4.748L16 11.03l2.374 5.726Z"
        />
    </svg>
)
export default AngularJSIcon
