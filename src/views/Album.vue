<template>
    <div class="main-album">
        <div class="header">
            <h1>
                <span>Ngọc Linh</span>
                <img
                    height="50"
                    src="https://thubinh.iwedding.info/album/heart.gif"
                />
                <span>Phương Uyên</span>
            </h1>
            <h2>
                Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để
                đến đích với đầy hy vọng
            </h2>
        </div>
        <div class="border border-shadow-bottom"></div>
        <div class="swiper-container" id="swiper-container">
            <swiper
                :modules="modules"
                :centeredSlides="true"
                :navigation="true"
                :autoplay="{
                    delay: 5000,
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
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/swiper-2.jpg) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const modules = [Autoplay, Pagination, Navigation];
</script>

<style lang="scss" scoped>
.main-album {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.header {
    background-color: #111;
    color: #fff;
    text-align: center;
    padding: 10px;
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-family: "MonteCarlo", cursive;
        font-size: 45px !important;
        span {
            padding: 0 15px;
            white-space: nowrap;
        }
    }
    h2 {
        font-family: "Jura", sans-serif;
        font-size: 18px;
        margin-top: 8px;
    }
}
.border-shadow-bottom {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 15%),
        0 2px 6px 2px rgb(60 64 67 / 15%);
    width: 100%;
    height: 10px;
    background-color: #ecb503;
    background: -webkit-linear-gradient(left, #d59d02, #ffc403, #d9a602);
}
.swiper-container {
    .swiper-horizontal {
        width: 100%;
        height: 100%;
    }
    .background {
        width: 100%;
        height: 100%;
    }
}
@media (max-width: 768px) {
    .header {
        h1 {
            font-size: 30px !important;
        }
    }
}
:deep(.swiper-button-next) {
    width: 24px !important;
    height: 42px !important;
    &:after {
        font-size: 14px !important;
    }
}
:deep(.swiper-button-prev) {
    width: 24px !important;
    height: 42px !important;
    &:after {
        font-size: 14px !important;
    }
}
</style>