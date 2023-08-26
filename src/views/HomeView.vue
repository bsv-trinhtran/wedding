<template>
    <div class="main">
        <Header></Header>
        <div class="swiper-container">
            <swiper
                :modules="modules"
                :centeredSlides="true"
                :navigation="true"
                :autoplay="{
                    delay: 20000000,
                    disableOnInteraction: true,
                }"
                class="mySwiper"
            >
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/swiper-3.jpg) no-repeat
                                center;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/swiper-2.jpg) no-repeat
                                center;
                        "
                    ></div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="display-tc">
            <h1>Save the date</h1>
            <div class="banner-text">
                <span class="banner-text_names">Ngọc Linh </span>
                <img src="/images/heart-solid.svg" alt="" />
                <span class="banner-text_names">Ngọc Uyên </span>
            </div>
            <div class="banner-text_date">16 October 2023</div>
        </div>
    </div>
</template>
<script setup>
import Header from "../components/Header.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const modules = [Autoplay, Pagination, Navigation];
</script>
<style lang="scss">
.main {
    position: relative;
    width: 100vw;
    height: 100vh;
}
.swiper-container {
    width: 100%;
    height: 100%;
    display: flex;
}
.background {
    display: flex;
    width: 100vw;
    height: 100vh;
    filter: brightness(0.7);
}
.swiper-button-next,
.swiper-button-prev {
    background: rgba(248, 255, 254, 0.81);
    width: 55px;
    height: 55px;
    line-height: 50px;
    margin-top: -30px;
    text-align: center;
    border-radius: 60px;
    border: 4px solid rgba(248, 255, 254, 0.91);
    z-index: 10;
    opacity: 1;
    right: 10px;
    left: auto;
    &::after {
        font-size: 16px;
        color: #3e7884;
    }
    &:hover {
        opacity: 0.5;
    }
}
.swiper-button-prev {
    left: 10px;
    right: auto;
}
.display-tc {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-size: 150px;
        font-family: "Amatic SC", cursive;
        font-weight: 700;
        color: white;
    }
    .banner-text {
        color: #ffffff;
        display: flex;
        justify-content: center;
        .banner-text_names {
            font-family: "Playball", cursive;
            font-size: 45px;
            line-height: 48px;
        }
        img {
            width: 30px;
            height: 30px;
            margin: 0px 15px;
        }
    }
    .banner-text_date {
        display: flex;
        font-size: 25px;
        line-height: 28px;
        color: #fff;
        margin-top: 10px;
        font-family: "Quicksand", sans-serif;
    }
}
</style>