import * as React from "react"
import {IconProps} from "@/components/icons/icon-utils";
import clsx from "clsx";

const MongoDBIcon = ({className, fill, width, height}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? 16}
        height={height ?? width ?? 16}
        viewBox="0 0 32 32"
        className={clsx("self-center", className)}
    >
        <title>{"mongodb"}</title>
        <path
            fill={clsx(fill || "#000")}
            d="M15.821 23.185s0-10.361.344-10.36c.266 0 .612 13.365.612 13.365-.476-.056-.956-2.199-.956-3.005zm6.668-10.24c-.919-4.016-2.932-7.469-5.708-10.134l-.007-.006a9.8 9.8 0 0 1-.895-1.732l-.024-.068.001.068c0 .565-.253 1.07-.652 1.409l-.003.002c-3.574 3.034-5.848 7.505-5.923 12.508v.013l-.001.208a15.1 15.1 0 0 0 6.07 12.115l.039.028.087.063q.241 1.784.412 3.576h.601c.166-1.491.39-2.796.683-4.076l-.046.239c.396-.275.742-.56 1.065-.869l-.003.003a14.143 14.143 0 0 0 4.549-10.404l-.001-.182v.009a16.341 16.341 0 0 0-.261-2.871l.015.099z"/>
    </svg>
)
export default MongoDBIcon
