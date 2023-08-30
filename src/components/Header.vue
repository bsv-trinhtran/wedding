<template>
    <div class="header" :class="styleHeader ? 'customeHeader' : ''">
        <div class="container">
            <div class="logo">
                <a @click="scrollToSection('swiper-container')">
                    <h1>
                        L
                        <img src="/images/heart-solid.svg" alt="" />
                        U
                    </h1></a
                >
            </div>
            <div class="menu" v-if="innerHeight > 876 ? true : false">
                <ul>
                    <li>
                        <a
                            @click="scrollToSection('swiper-container')"
                            :class="isActive == 1 ? 'active' : ''"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a
                            @click="scrollToSection('couple')"
                            :class="isActive == 2 ? 'active' : ''"
                            >Cặp đôi</a
                        >
                    </li>
                    <li>
                        <a
                            @click="scrollToSection('events')"
                            :class="isActive == 3 ? 'active' : ''"
                            >Sự kiện cưới</a
                        >
                    </li>
                    <li>
                        <a
                            @click="scrollToSection('couple-story')"
                            :class="isActive == 4 ? 'active' : ''"
                            >Chuyện tình yêu</a
                        >
                    </li>
                    <li>
                        <a
                            @click="scrollToSection('gallery')"
                            :class="isActive == 5 ? 'active' : ''"
                            >Album cưới</a
                        >
                    </li>
                    <li>
                        <a
                            @click="scrollToSection('wishes')"
                            :class="isActive == 6 ? 'active' : ''"
                            >lời chúc</a
                        >
                    </li>
                </ul>
            </div>
            <div
                class="icon-menu menu"
                v-else
                @click="isIconMenu = !isIconMenu"
            >
                <img
                    :src="
                        isIconRed
                            ? '/images/icons8-menu-50_R.png'
                            : '/images/icons8-menu-50.png'
                    "
                    alt=""
                    v-if="isIconMenu"
                />
                <img
                    src="/images/icons8-close-26.png"
                    alt=""
                    v-else
                    style="width: 21px"
                />
                <ul class="column" v-if="!isIconMenu">
                    <li>
                        <a
                            @click="scrollToSection('swiper-container')"
                            :class="isActive == 1 ? 'active' : ''"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a
                            @click="scrollToSection('couple')"
                            :class="isActive == 2 ? 'active' : ''"
                            >Cặp đôi</a
                        >
                    </li>
                    <li>
                        <a
                            @click="scrollToSection('events')"
                            :class="isActive == 3 ? 'active' : ''"
                            >Sự kiện cưới</a
                        >
                    </li>
                    <li>
                        <a
                            @click="scrollToSection('couple-story')"
                            :class="isActive == 4 ? 'active' : ''"
                            >Chuyện tình yêu</a
                        >
                    </li>
                    <li>
                        <a
                            @click="scrollToSection('gallery')"
                            :class="isActive == 5 ? 'active' : ''"
                            >Album cưới</a
                        >
                    </li>
                    <li>
                        <a
                            @click="scrollToSection('wishes')"
                            :class="isActive == 6 ? 'active' : ''"
                            >lời chúc</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const styleHeader = ref(false);
const isActive = ref(1);
const isIconMenu = ref(true);
const isIconRed = ref(false);
const innerHeight = window.innerHeight;
const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
        });
    }
};
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".main");
    if (scrollContainer) {
        scrollContainer.addEventListener("scroll", function () {
            if (
                this.scrollTop + 100 >=
                3 * window.innerHeight + 114 + 286 + 2124 + 417 + 725 + 2383
            ) {
                styleHeader.value = true;
                isActive.value = 6;
                isIconRed.value = true;
            } else if (
                this.scrollTop + 100 >=
                3 * window.innerHeight + 114 + 286 + 2124 + 417 + 725
            ) {
                styleHeader.value = true;
                isActive.value = 5;
                isIconRed.value = true;
            } else if (
                this.scrollTop + 100 >=
                3 * window.innerHeight + 114 + 286 + 725
            ) {
                styleHeader.value = true;
                isActive.value = 4;
                isIconRed.value = true;
            } else if (
                this.scrollTop + 100 >=
                2 * window.innerHeight + 114 + 286
            ) {
                styleHeader.value = true;
                isActive.value = 3;
                isIconRed.value = true;
            } else if (this.scrollTop + 100 >= window.innerHeight) {
                styleHeader.value = true;
                isActive.value = 2;
                isIconRed.value = true;
            } else {
                styleHeader.value = false;
                isActive.value = 1;
                isIconRed.value = false;
            }
        });
    }
});
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 50px;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    text-transform: uppercase;
    font-weight: bold;
    .container {
        width: 1170px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 10px;
        .logo {
            font-family: "Playball", cursive;
            h1 {
                display: flex;
                font-size: 50px;
                img {
                    width: 50px;
                    height: 50px;
                    color: red;
                    margin: 0px 10px;
                }
            }
        }
        .menu {
            ul {
                display: flex;
                list-style-type: none;
                gap: 30px;
                font-size: 14px;
                font-weight: bold;
                font-family: "Quicksand", sans-serif;
                li {
                    cursor: pointer;
                    &:hover {
                        transform: translateY(-5px);
                        a {
                            color: red !important;
                        }
                    }
                }
            }
            ul.column {
                flex-direction: column;
                position: absolute;
                top: 50px;
                left: 0;
                background: #ffffffd6;
                width: 100%;
                gap: 0px;
                margin: 0px;
                padding: 0px;
                padding-bottom: 12px;
                li {
                    width: 100%;
                    a {
                        display: flex;
                        color: #000 !important;
                        border-bottom: 1px solid #8b8b8b;
                        width: 100%;
                        font-family: "Shantell Sans", cursive;
                        font-weight: unset;
                        margin: 0;
                        padding: 10px 20px;
                    }
                    &:first-child {
                        border-top: 1px solid #8b8b8b;
                    }
                }
            }
        }
        .icon-menu {
            img {
                height: 21px;
                width: 18px;
            }
        }
        a {
            text-decoration: none;
            color: azure;
            font-weight: bold;
        }
    }
}
.customeHeader {
    background: #fff;
    a {
        color: #666 !important;
    }
    .active {
        color: red !important;
    }
}
.active {
    color: red !important;
}
</style>