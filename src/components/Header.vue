<template>
    <div class="header">
        <div class="container">
            <div class="logo">
                <router-link to="">
                    <h1>
                        L
                        <img src="/images/heart-solid.svg" alt="" />
                        U
                    </h1>
                </router-link>
            </div>
            <div class="menu">
                <ul>
                    <li>
                        <router-link to="">Cặp đôi</router-link>
                    </li>
                    <li>
                        <router-link to="">Sự kiện</router-link>
                    </li>
                    <li>
                        <router-link to="">Chuyện tình yêu</router-link>
                    </li>
                    <li>
                        <router-link to="">Album cưới</router-link>
                    </li>
                    <li>
                        <router-link to="">Phù dâu và phù rể</router-link>
                    </li>
                    <li>
                        <router-link to="">lời chúc</router-link>
                    </li>
                    <li>
                        <router-link to="">mừng cưới</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 50px;
    position: absolute;
    z-index: 100;
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
                    &:hover {
                        transform: translateY(-5px);
                    }
                }
            }
        }
        a {
            text-decoration: none;
            color: azure;
        }
    }
}
</style>