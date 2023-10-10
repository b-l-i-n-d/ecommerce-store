"use client";

import {
    A11y,
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IBilboard } from "@/types";

import { Billboard } from "@/components/ui/billboard";

import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BillboardSwiperProps {
    data: IBilboard[];
}

export const BillboardSwiper: React.FC<BillboardSwiperProps> = ({ data }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            effect="fade"
        >
            {data?.map((item) => (
                <SwiperSlide key={item.id}>
                    <Billboard data={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
