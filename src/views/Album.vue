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
                            background: url(/images/NPT07426.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07499.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07515.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07531.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07571.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 35%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07595.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07635.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 45%;
                        "
                    ></div>
                </swiper-slide>
                <!-- 8 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07679.JPG) no-repeat;
                            background-size: cover;
                            background-position: 50% 25%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07696.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07706.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07714.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07716.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07727.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07732.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07740.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07743.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07761.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 18 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07805.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 35%;
                        "
                    ></div>
                </swiper-slide>
                <!-- 19 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07827.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 20%;
                        "
                    ></div>
                </swiper-slide>
                <!-- 20 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07872.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 35%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07878.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07881.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 23 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07900.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 25%;
                        "
                    ></div>
                </swiper-slide>
                <!-- 24 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07906.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 25 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07910.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 45%;
                        "
                    ></div>
                </swiper-slide>
                <!-- 26 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07925.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 25%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07927.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07955.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07957.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT07977.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 31 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08000.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 65%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08015.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08027.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08091.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 35 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08102.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 35%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08145.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 37 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08146.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 45%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08162.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08187.JPG) no-repeat
                                center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 40 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08223.JPG) no-repeat;
                            background-size: cover;
                            background-position: 90% 65%;
                        "
                    ></div>
                </swiper-slide>
                <!-- 41 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08230.JPG) no-repeat;
                            background-size: cover;
                            background-position: 50% 100%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(/images/NPT08251.JPG) no-repeat
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