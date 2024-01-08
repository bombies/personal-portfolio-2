"use client"

import {CSSProperties, FC} from "react";
import NextImage, {ImageProps} from "next/image";
import clsx from "clsx";
import {motion} from "framer-motion";

export type ObjectFit = "contain" | "cover" | "fill" | "none" | "scale-down"

type Props = Omit<ImageProps, 'objectFit'> & {
    imgWidth?: number,
    imgHeight?: number,
    fadeIn?: boolean,
    objectFit?: ObjectFit
}

const Image: FC<Props> = ({fadeIn, imgWidth, imgHeight, className, width, height, objectFit, ...props}) => {
    return (
        <motion.div
            initial={fadeIn ? {opacity: 0, y: -50} : undefined}
            whileInView={fadeIn ? {opacity: 1, y: 0} : undefined}
            transition={fadeIn ? {duration: .5} : undefined}
            viewport={fadeIn ? {once: true} : undefined}
            className={clsx("relative", className)
            }
            style={{
                width: width && `${width}rem`,
                height: width && `${height ?? width}rem`,
            }}
        >
            <NextImage {...props} width={imgWidth} height={imgHeight} style={{objectFit}} draggable={false}/>
        </motion.div>
    )
}

export default Image