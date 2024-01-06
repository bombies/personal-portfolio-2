import * as React from "react"
import {IconProps} from "@/components/icons/icon-utils";
import clsx from "clsx";

const KotlinIcon = ({className, fill, width, height}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? 16}
        height={height ?? width ?? 16}
        viewBox="0 0 32 32"
        className={clsx("self-center", className)}
    >
        <path fill={clsx(fill || "#000")}
              d="m1.734 32 15.068-15.333L32 32zM0 0h16L0 16.667zm17.865 0L0 18.667V32L32 0z"/>
    </svg>
)
export default KotlinIcon
