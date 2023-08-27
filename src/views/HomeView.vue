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
        <div class="seperator">
            <img src="/images/layer-5.png" alt="" />
        </div>
        <div class="couple">
            <div class="couple-heading">
                <h2>Cô dâu &amp; Chú rể</h2>
                <p>
                    Tình yêu là điều kiện trong đó hạnh phúc của người khác là
                    điều cần thiết cho chính bạn.
                </p>
            </div>
            <div class="couple-wrap">
                <div class="groom-wrap">
                    <div class="groom">
                        <img
                            src="/images/d4f47c49ddc2b7b96ad03cef05b3c47c.jpeg"
                            alt=""
                        />
                    </div>
                    <div class="desc-groom">
                        <h3>Trần Ngọc Uyên</h3>
                        <p>
                            Cô gái đến từ tỉnh Nghệ An, hiện đang sinh sống và
                            làm việc tại thủ đô Hà Nội. Sau khi tốt nghiệp đại
                            học cô đã đi làm. Là một người hay cười nhưng lại
                            sống nội tâm, thích đọc sách, trồng cây và yêu thiên
                            nhiên. Ngoài ra còn rất thích vẽ vời, nuôi chó và
                            nuôi ước mơ có cho mình một vườn hồng khoe sắc.
                        </p>
                    </div>
                </div>
                <div class="groom-wrap">
                    <div class="groom">
                        <img
                            src="/images/ee4f7a467b5e037a0c3cb52127f61c36.jpeg"
                            alt=""
                        />
                    </div>
                    <div class="desc-groom">
                        <h3>Trần Ngọc Linh</h3>
                        <p>
                            Là một chuyên viên điều khiển thiết bị bán tự động
                            của một công ty vận tải xuyên quốc gia. Là một người
                            hiền lành và ít nói. Luôn coi trọng tình cảm và yêu
                            thương gia đình. Với anh: “Gia đình là điểm tựa vững
                            chắc nhất và là bến đỗ bình yên không đâu sánh bằng
                            đối với mỗi con người. Đó luôn là nơi tràn ngập tình
                            yêu thương để ta trở về.”
                        </p>
                    </div>
                </div>
                <div class="heart">
                    <img src="/images/heart-solid.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="section-accessibilities">
            <div class="container">
                <router-link to="">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-chat"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                            ></path>
                        </svg>

                        Gửi lời chúc
                    </span>
                </router-link>
                <router-link to="">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-send"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                            ></path>
                        </svg>

                        Xác nhận tham dự
                    </span>
                </router-link>
                <router-link to="">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-coin"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"
                            ></path>
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            ></path>
                            <path
                                d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                            ></path>
                        </svg>

                        Mừng cưới
                    </span>
                </router-link>
            </div>
        </div>
        <div class="the-countdown">
            <div class="seperator">
                <img src="/images/layer-3.png" alt="" />
            </div>
            <div class="count-titles">
                <h2>The big day</h2>
                <div class="date">
                    <div class="box">
                        <span class="red">27</span>
                        <span>ngày</span>
                    </div>
                    <div class="box">
                        <span class="red">27</span>
                        <span>ngày</span>
                    </div>
                    <div class="box">
                        <span class="red">27</span>
                        <span>ngày</span>
                    </div>
                    <div class="box">
                        <span class="red">27</span>
                        <span>ngày</span>
                    </div>
                </div>
            </div>
            <div class="count-img">
                <div class="clock">
                    <img src="/images/clock-regular.svg" alt="" />
                </div>
            </div>
        </div>
        <div class="events">
            <div class="container">
                <h2>Sự Kiện Cưới</h2>
                <p>
                    Tình yêu không làm cho thế giới quay tròn. Tình yêu là những
                    gì làm cho chuyến đi đáng giá.
                </p>
                <div class="event-dates">
                    <div class="event-stack">
                        <h3 class="text-center">TIỆC CƯỚI NHÀ NỮ</h3>
                        <div style="display: flex; gap: 30px">
                            <div class="image-wrap">
                                <img
                                    src="/images/ba9fa84f3011b84a3488f0e966a60314.jpeg"
                                    alt=""
                                />
                            </div>
                            <div class="event-title">
                                <div style="display: flex; gap: 20px">
                                    <div
                                        style="
                                            display: flex;
                                            align-items: center;
                                            gap: 6px;
                                        "
                                    >
                                        <img
                                            src="/images/icons8-date-80.png"
                                            alt=""
                                        />
                                        <span>2023-09-23</span>
                                    </div>
                                    <div
                                        style="
                                            display: flex;
                                            align-items: center;
                                            gap: 6px;
                                        "
                                    >
                                        <img
                                            src="/images/icons8-clock-48.png"
                                            alt=""
                                        />
                                        <span> 11:00</span>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="/images/icons8-location-50.png"
                                        alt=""
                                    />
                                    <span
                                        >27 Lê Hồng Phong, P.Nguyễn Thái Học,
                                        Thành phố Yên Bái, Yên Bái</span
                                    >
                                </div>
                                <div>
                                    <a
                                        href=""
                                        style="
                                            text-decoration: none;
                                            color: #397eb9;
                                        "
                                    >
                                        Xem bản đồ
                                    </a>
                                    <img
                                        src="/images/icons8-arrow-50.png"
                                        alt=""
                                        style="width: 12px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="event-stack">
                        <h3 class="text-center">TIỆC CƯỚI NHÀ NAM</h3>
                        <div style="display: flex; gap: 30px">
                            <div class="image-wrap">
                                <img
                                    src="/images/ba9fa84f3011b84a3488f0e966a60314.jpeg"
                                    alt=""
                                />
                            </div>
                            <div class="event-title">
                                <div style="display: flex; gap: 20px">
                                    <div
                                        style="
                                            display: flex;
                                            align-items: center;
                                            gap: 6px;
                                        "
                                    >
                                        <img
                                            src="/images/icons8-date-80.png"
                                            alt=""
                                        />
                                        <span>2023-09-23</span>
                                    </div>
                                    <div
                                        style="
                                            display: flex;
                                            align-items: center;
                                            gap: 6px;
                                        "
                                    >
                                        <img
                                            src="/images/icons8-clock-48.png"
                                            alt=""
                                        />
                                        <span> 11:00</span>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="/images/icons8-location-50.png"
                                        alt=""
                                    />
                                    <span
                                        >27 Lê Hồng Phong, P.Nguyễn Thái Học,
                                        Thành phố Yên Bái, Yên Bái</span
                                    >
                                </div>
                                <div>
                                    <a
                                        href=""
                                        style="
                                            text-decoration: none;
                                            color: #397eb9;
                                        "
                                    >
                                        Xem bản đồ
                                    </a>
                                    <img
                                        src="/images/icons8-arrow-50.png"
                                        alt=""
                                        style="width: 12px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
.container {
    width: 1170px;
}
.main {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
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
.seperator {
    position: absolute;
    bottom: -10px;
    z-index: 100;
}
.couple {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6em 0;
    .couple-heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 4.9em;
        h2 {
            font-size: 50px;
            font-family: "Playball", cursive;
            color: #000;
        }
        p {
            font-family: "Quicksand", sans-serif;
            color: #767878;
            font-size: 18px;
            line-height: 1.5;
        }
    }
    .couple-wrap {
        display: flex;
        justify-content: space-around;
        width: 1170px;
        position: relative;
        .groom {
            width: 400px;
            height: 400px;
            margin: 0 auto 20px;
            border-radius: 50%;
            img {
                width: 400px;
                height: 400px;
                border-radius: 50%;
                border: 5px solid #f23b43;
                padding: 5px;
            }
        }
        .desc-groom {
            display: flex;
            flex-direction: column;
            align-items: center;
            h3 {
                font-size: 35px;
                color: #000;
                font-weight: bold;
                margin: 0 0 20px 0;
            }
            p {
                font-size: inherit;
                line-height: 1.6;
                margin-bottom: 1rem;
                text-rendering: optimizeLegibility;
                width: 400px;
                text-align: center;
                color: #767878;
            }
        }
        .heart {
            position: absolute;
            z-index: 1000;
            top: 10em;
            left: 0;
            right: 0;
            width: 100%;
            text-align: center;
            img {
                width: 77px;
                height: 77px;
                animation: heart 1s infinite alternate;
            }
        }
    }
}

@keyframes heart {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.2);
    }
}
.section-accessibilities {
    display: flex;
    justify-content: center;
    background: #ffe2e5;
    padding-top: 20px;
    padding-bottom: 30px;
    .container {
        display: flex;
        justify-content: center;
        width: 1170px;
        a {
            padding: 15px 20px !important;
            min-width: 220px !important;
            margin: 10px 5px 0 !important;
            text-transform: uppercase;
            text-decoration: none;
            background: #fbfbfb;
            color: #ec2328;
            border-radius: 3px;
            font-weight: 400;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            touch-action: manipulation;
            cursor: pointer;
            font-family: "Dosis", sans-serif;
            border: 1px solid #ec2328;
            font-size: 1rem !important;
            line-height: 1.42857143;
        }
    }
}
.the-countdown {
    position: relative;
    padding: 70px;
    background: url(/images/a92c4f18902576f825fb27a0894ec3f9.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    &::before {
        content: "";
        position: absolute;
        right: -105px;
        top: 0;
        bottom: 0;
        width: 40%;
        background: #fff;
        z-index: 1;
        transform: skewX(-20deg);
    }
    .seperator {
        top: -7px;
        bottom: inherit;
        transform: rotate(180deg);
    }
    .count-titles {
        width: 1170px;
        h2 {
            color: #fff;
            margin-bottom: 20px;
            font-size: 32px;
            padding: 0;
            margin: 0 0 10px;
            text-transform: capitalize;
            font-family: "Shantell Sans", cursive;
            line-height: 1.5;
            font-weight: 700;
        }
        .date {
            display: flex;
            gap: 20px;
            margin-top: 20px;
            width: 66.66666667%;
            justify-content: center;
            .box {
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 3px solid #f23b43;
                border-radius: 50%;
                background: #ffff;
                padding: 12px 20px;
                .red {
                    color: #f23b43;
                    font-weight: bold;
                }
                span {
                    color: #767878;
                }
            }
        }
    }
    .count-img {
        width: 33.33333333%;
        position: absolute;
        right: 30%;
        &::before {
            content: "";
            position: absolute;
            right: -200px;
            top: -8px;
            width: 240px;
            height: 240px;
            background-image: url(/images/f1.png);
            background-size: 100%;
            background-repeat: no-repeat;
            transform: rotate(320deg);
            z-index: 200;
        }
        .clock {
            position: absolute;
            right: 0;
            height: 150px;
            width: 150px;
            background: #fff;
            font-size: 90px;
            text-align: center;
            line-height: 1.4;
            color: #ed4144;
            border-radius: 50%;
            z-index: 300;
            border: 10px solid #d3d3d3;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 70%;
            }
        }
    }
}
.events {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5em 0;
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h2 {
        margin-bottom: 10px;
        color: #000;
        margin-top: 10px;
        font-size: 50px;
        font-family: "Playball", cursive;
        font-weight: 400;
        margin: 0 0 20px 0;
    }
    p {
        font-family: "Quicksand", sans-serif;
        color: #767878;
        font-size: 18px;
    }
    .event-dates {
        margin-top: 30px;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 50px;
        .event-stack {
            font-family: "Quicksand", sans-serif;
            color: #767878;
            font-size: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 70%;
            position: relative;
            text-align: left;
            padding: 25px;
            z-index: 1;
            overflow: hidden;
            box-shadow: 0 0 32px #cdcdcd;
            margin-bottom: 40px;
            border-radius: 10px;
            img {
                width: 192px;
                border-radius: 15px;
            }
            h3 {
                font-weight: 700;
                color: #3e3a3a;
                padding: 0;
                margin: 0 0 20px;
                text-transform: capitalize;
                font-family: "Shantell Sans", cursive;
                line-height: 1.5;
            }
            .event-title {
                display: flex;
                flex-direction: column;
                gap: 8px;
                img {
                    width: 14px;
                }
            }
        }
    }
}
</style>