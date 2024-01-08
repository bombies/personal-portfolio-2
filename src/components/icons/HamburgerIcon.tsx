import * as React from "react"
import {IconProps} from "@/components/icons/icon-utils";
import clsx from "clsx";

const HamburgerIcon = ({className, fill, width, height}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? 16}
        height={height ?? width ?? 16}
        fill="none"
        viewBox="0 0 24 24"
        className={clsx("self-center", className)}
    >
        <path
            stroke={clsx(fill || "#000")}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M20 7H4M20 12H4M20 17H4"
        />
    </svg>
)
export default HamburgerIcon
