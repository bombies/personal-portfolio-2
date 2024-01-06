"use client"

import {FC, PropsWithChildren} from "react";
import Autoplay from "embla-carousel-autoplay";
import {Carousel, CarouselProps} from "@/components/ui/carousel";

type AutoCarouselProps = {
    delay: number
} & CarouselProps & PropsWithChildren

const AutoCarousel: FC<AutoCarouselProps> = ({delay = 1000, ...props}) => {
    return (
        <Carousel
            plugins={[
                Autoplay({delay})
            ]}
            {...props}
        />
    )
}

export default AutoCarousel