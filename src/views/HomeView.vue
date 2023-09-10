<template>
    <!-- <LoadingHeart v-if="isLoading"></LoadingHeart> -->
    <div class="main">
        <Header></Header>
        <div class="swiper-container" id="swiper-container">
            <swiper
                :modules="modules"
                :centeredSlides="true"
                :pagination="{
                    dynamicBullets: innerHeight > 876 ? false : true,
                }"
                :navigation="innerHeight > 876 ? true : false"
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
                            background: url(/images/qr1.JPG) no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc-bxQYFRsAldQVsSOEdnEuhhIUUSXfhdhvY1EOlw4EWaDGIJYr74nV0nRIYzY8K5H961YHQkgDNDW0aNsYz7a-FdGTCTVbdFTJKn9onqG6lIO899yZOzT3qFhU4vURNnb_R5E_grhRAMUfUaAzPnQgA-5XXTGlk2i5G3wsass6JtJdfNBjsVnXOEVibCYaj6b2GFRF8wwBkss1WFimrj8frEJ-n4QeiVkniA8j9ouaxjUPkJz9N6RlUKgvYS60wcw-ymIQ2iSV4abVXB3DZzhCGRqr1RMwd_BFaZMabwVCGNyazxQHWWffOwtZPmuSsUbw6-N525rF6YIJ4tHQVho3MfgDYkfA1HiFUJy5ZoOVHHlu7Y4IwqXAafrrEHR_5R7_M13MSASaU5rFgiQ8rNDMHHl24yOTkBOQtXCnOjP0Y_DKa0-euw5eQ57CmguK7ARqrtJVMt0R7W-7vhBXcHYLd_JNUr19lPz0dQTvICekWAuMDAmQENQnRPg9HZzwn2ztFhVnZ3NcbbPHvcbqs_NAADwA2fr3kkO5TUpTh0v4sCvfVL3cVe5P4_9Vdwr2h6R0VMtt0afRZf2WOL8juWg_s3Niir6SCyc8mqDI8qwSoLUARbYnJiwHl0-Fe3bPSx4YVdG1VF9HvnwMK0t6glOu2CKMFfmWwGpVN74H271poJk08IqQXQZ-jTAUQcU8a3MQnKPPprz0vl-UXSAZYAJT7RBBO07jre-rOwFSlvMffJ8CjQ7kmjx1K4BJLIrAz_yoEYvof3CH3eGoFcv3VkVFUkk2uzwkRFi3AK9CRD7_xG1hLzyURi-bfxDs1xWeseIFa8PYbUbsPdsTVqe27CD1WnQJBsnWGauH_8SMxnSEUnjOTyVpeeal4vSbzFmpaK-nPBRZJOw8BPkwGqo3-sYFGVOvSGzQA9d1zOzHLHBKcZlUVEBvmbshWSxmL9-tn30HsF1EgYCoLYU5E51wMdlPcjFB3opopjWY29-Itm9gr_SjA6PJa2-vGEY-Lbq8Js_s=w1460-h973-s-no?authuser=0)
                                no-repeat;
                            background-size: cover;
                            background-position: 55%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_epNelhDYG1vsZnfU-wLTsUPZWNqe2C5PzqusJCq8OCGYNBINilAU-bUpUjRhk7OuhF8CFg61jtYDbzo3vp-9F9KfgWjSjEUfDmjHsyx1C_IGkshnGoKuIlxuSmWCZiHt-OZUJSHkw13TVZLb3p1tgAzTUujCkV8VjamS8aM1pLI9Qsmjgw1vqXaQdsot8Pswnp8c-LHQhvCi8HDx-DW8YMpHSMbJUXaR3Y5zXkjXkX_7S2w4ebj0kb4ymIGcsqhbJdHgG8LsHcCd8zPMjdJuQAHbtuWFPCEAOurT9mG02mXpJqTsZTT5QjjzDd5o8Sw6ns3bTQA_tDQUPk-jt4L8RMYx19hSYWHGiDD3SVssNAHrT7jVYEQtblhmbIqpM1pxoliiSX0Uu26Gq0bhdRGFiabRWLb_841LYzdlRShkp2rGOeBDm7E4aES5nDxkNsFR56gu6_DBD2-Owct77Xcz8dVNpJ-LrbxFeHUjINzcEJCr9uW8S7v4yiru6N_GevpUpLDJ6PN3oLM1h95J4PWjxG9ltdpFD2p11eh7eU5rmvVUtakT3MKUjcmyrDIBuP4ef8yhzjqsrNR9OgbZrWmdQlt6JlbOZUQs0xWEePDDYeaVcJrONBZOjoxCnkKCc6fHFN4qadbIVUBkGBmClTGcD_oTvJXQNLW9k18B-rAqL1T3UGO-I2FrqBxBzH0PWSyXAxIcGOVrxRBZ7u8PpfKb_DY16paR_VQVPutcOoswXfzhqnO2Cj8v1aV6FBAjdZsYEmhKbd8mhf8WpxAEsGHOioSN_DdfG9ihiuUKJd_wG5zcQeOMW1HxWK43SWO_4fWLpZQrs9VOagzpRWQkrJsFXbUeVLJwAxRAgRiDrIdc_nAU0EhKdLnh2me2j9aNuWvtQAfR_BwWbicEpWMcUPjk1ugkty8hSAmI5Ixywzg8lsfBQjdfxL_yBghxe4QrUpotNaKQgQEPxPK1KQrCz1weNaV9peZZ7M9yfER8eQCUO3Eq4_-mWH6C259kWHAp2BlI=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_VVpWBENgtDJbMEr-FZJYstMNi6p6rS9TolaEeB5Im85n7LrVS1Po76bEH7SG6h-D_h5c0NsZ7DO1n5B5arIcRoe65i4vkycDoerck8u6Lk5PoEbwYLcuTangwDF46OxEVRyzuHGpzmDRA5EE8MpXaGqpOzYEUfPQnUoPDkFiSIeehck2_JA1IkMWfCMGYDmD8yWCyJsm4hvl1FAP__aG7X3Tvi7O1iEEfvMXKRr9aJXEX7bnLSqdY9xmQXCqjItoL_68ihHCeUXmosMrwcAOabcUS5qjN-tyhqRbg42rDlISIW1a2QRgidYII3DJs4fU0_hz-sIwFpVgB7CmhePd4QFaJ6qUo5iHvEVD0ow2UkA67n-KxnjTrmCJ4ZQwBU4zd4r70ZKR6TInpRxIrf3myglSE5cc_DoxcBYZQRQcUxb9ZGOwEjBYwWoUDXWghfx4AJ001dJCw0O_Osr-O5GA1zqb7dqjpgaA_yKbYwwkFhCsGyMiZ7NyqJ0_B23G7KQz19ieZV5y7Inbg8uNpEaB4sIpDClQrMgPgJnlEkVDPMP0koW8N_ThCz9I05XCimY71fMLmrJ1dzbR6UlpOgG3wDR484-ARfZCbHpKJdH3rFrmxP_Iyx9QPE2wW9fVIS2c_nYULUf89NW3EwpCSoUc95VeWQwWCQ_24tbL4Axqx2tazeXWa52ciPCjKsyZMGfbtseBsvY42Y_DdlMgjzSTE8tNec9FyWrUEvsWEaN6Z4kn3a7tlLENv10YAHe9yB9w1nPj-40u6R1DzpbPV8GmIuikzKzQ5-ntXXXZkRFNQn5GSiJvWAQ9j5KvnwcHgz224_trfG9hKlnfn1nRTHxtpkPLuUF_6leT85-6C_esQuIcSEFwr3C6sAM0G5w5ka2tQEizeRkRxtseYPY6Bt92f5JdeOyPIDFof4yQ8xX6VJbqcRLSnxXi7-o7QANorRtY-qug_ePLffjq0wUceXSTN0W-S9rGNCESpCnqZlDj5cvjKRAPtTu4Q94OiIhy3D6g=w1460-h973-s-no?authuser=0)
                                no-repeat;
                            background-size: cover;
                            background-position: 60%;
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
                <span class="banner-text_names">Phương Uyên </span>
            </div>
            <div class="banner-text_date">12 October 2023</div>
        </div>
        <div class="seperator">
            <img src="/images/layer-5.png" alt="" />
        </div>
        <div class="couple" id="couple">
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
                            src="https://lh3.googleusercontent.com/pw/AIL4fc_SvxqLAK0s_SLgKFPHikGlJhGakJap3ntdsVbVpHiwNo2pW1d0M123-VE8iSlKMVKLyVuzJlmqPbTlvXzZggVZ0dOqzRXV1nAKzciQ9zZskfv26nHG32rpb1V8e7i_acpL9uMyHzjjeBzt5k-JyQPvg5jTPAB0N0yDDx4JQQl4ab3ZcrKoHIj2ZkJJ4EEoiVbCWBAnZ6uf3kgP_D6CObK3VcZXqM_QH0umvrNNIVb3iTKWM0DJiHiNGUSvhhLaG3Xfgi5jfNjZABwswXDhxcAXngiuI455wl0bYM5rmYCP4YPIiH0cvJgRkVgGTORe8NxcCYhqgbC03cBXH8C9_IM8zZzR-VDH_UzGFLpWITeIQG-DHPnUMqUcphhnSE8jr-LJ4lNBu0dUBN9PsuYKh4qxjUKnz_9fiMVGAiUya0shiv0LIGBiXgB8MV0ZPNiZP-uq7vO7xSNhskCVZgzi4-45gLYT41GoY4AHGNHlXYkQsBav787QjuJbJ6c9B9ckoNflYpTNE_6gC9HtrK0KdmrrAd7EDm8BE2B8YMnYaO0_tt8nC-CYPRIw3sLTM1vvn75a4LDrjPVc6GG4X05QtyjxOyJUn5rQLLb4eYdA9d_Abzpg3sKZSJLSKlq7aTk5bw9ajuSVIUm-ozcbgoe5bFki-kcyPGhwmaIo-Q5RE3l9FeDkBFM6X2V5yIgjqExqqNEPkciH5UsMQkCDuyWiSHdgAT1RCKCR8RhoB4iVIPmr5fMpJsD1bZHVwH25EaQkXsiyEtJ1kn6OPFmwNE2ifz6vL-bE8gr1wj9c-Z5yzL_ygXvVJjKwVM7Ren1aVoLjZoMOPKmcC9yelkX2aEClOhuU6FmjymRevQd7_4NnDeB5KrB-_Aj5Cr-QXfaVNO8y3Jj0iV6md0e7hXatpfx-GT6ISZXCzuWiU2BEK8oJopfxsJzNZQEQeAeeUuT07n7YxyQZCairoyvkLsJ8IEOQOo0vC7T7FCev5c8d8ibK14CvxMxHvzUCITxqkpBCdQEqisg=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div class="desc-groom">
                        <h3>Trần Ngọc Linh</h3>
                        <p>
                            Là một chuyên viên thiết kế xây dựng tại thành phố
                            Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn
                            coi trọng tình cảm và yêu thương gia đình. Với anh:
                            “Gia đình là điểm tựa vững chắc nhất và là bến đỗ
                            bình yên không đâu sánh bằng đối với mỗi con người.
                            Đó luôn là nơi tràn ngập tình yêu thương để ta trở
                            về.”
                        </p>
                    </div>
                </div>
                <div class="groom-wrap">
                    <div class="groom">
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc9UXi0Mtb2IuHrrDmNOvKbUiwT1MdI6DangaF04XuirF-UWTIl4vIUgF4ytlRQ2OSh-ibt955eFkJehu0X1iJgeQhxKCL0eg6WbvShC9zgQFu8W5syCcqZ05nh3UlRwF-knHG_KbU0nKQvllJnBWQT6DM42jSj6ZX95D4mTthNjIXWzLz54BuNBjfBaia6ayzK8KsZjJngRAv5n8VtabXA2_KsJ8IUaoLq-Mp6KaP-eg7paDAmGVQc-lZmtKLVUeOSVnS97ZuSr4OrBaRI1MAwfUhVhWN0YBr5rFx3fX16QcZTuh4l8tGV5SfvK6VrJkgrKQKXRD21N5AqGY4WvJLL_NoLrAHYRFgiPvCP4OI05JPlAciyaj1dRS8Du1_Dvk4IeGnD1Wg2DEfCdQn6qBtwwfkFIN4LrhbmBgqLm2IQ_P6OU28YcU1U416d51ro80TfjmrSREzoBcJ_7Pp-KOpxToJUTVHSec14UPnlp3u5M6FGbDYyIIKaTU6S1QT_Kavp21YrmgHhm-TKd9cYuG1vsm9u3O9VuWaVzGoUtesSu1buZ-4d0D5cNdkMrUOoKQkKa5qKy9NyuaDwGcU-FOWQsZXMGdqaA5VBCp6JqWaHnN0Vs7W2fv1he-2kv4UWYm85WoVkB7iF-F-co-QkviPxu1LmAL4yfYeBn2zVpDzp1-_i9NcKUxkcliA8DMUGfCdFqfYjNB41hYbnsxYYUH7vvOA58K1jChWg6T83GJZLgYNezfptLF5jOTUVi-xvTcV0ThgXikVkgVL5gIMu2LW4TKDBWOV7wMj8lObqr3bauwtgzFXuUvfhSkIxmXohZhfHwyJZvpfSWIGO2fcvohiSUCnLOkYi_9fl-lphrmIPVu0dyhQ958eXKNBjsI67sTISloz1-t2DxJk8rUhDjQPHMZSWaAgukA9XJXNBQBab2FeMXe2jOxm3W-4w340290oylDIwvsGPhXTOeB2spM4QNeppRC8o2gh9u-YxJ40VtBtR91N59lB4UyrVBNhlPivA=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div class="desc-groom">
                        <h3>Huỳnh Phương Uyên</h3>
                        <p>
                            Cô gái đến từ tỉnh Bình Thuận, hiện đang sinh sống
                            và làm việc tại thủ đô Hồ Chí Minh. Sau khi tốt
                            nghiệp đại học cô đã đi làm. Là một người hay cười
                            nhưng lại sống nội tâm, thích đọc sách, trồng cây và
                            yêu thiên nhiên. Ngoài ra còn rất thích vẽ vời, nuôi
                            chó và nuôi ước mơ có cho mình một vườn hồng khoe
                            sắc.
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
                <a @click="scrollToSection('wishes')">
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
                    </span></a
                >
                <router-link to="attend-wedding">
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
                <router-link to="" @click="isModal = !isModal">
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
            <div class="container">
                <div class="section-head">
                    <h4>We will become a family in</h4>
                </div>
                <div class="date">
                    <div>
                        <h4>{{ days }}</h4>
                        <p>NGÀY</p>
                    </div>
                    <div>
                        <h4>{{ hours }}</h4>
                        <p>GIỜ</p>
                    </div>
                    <div>
                        <h4>{{ minutes }}</h4>
                        <p>PHÚT</p>
                    </div>
                    <div>
                        <h4>{{ seconds }}</h4>
                        <p>GIÂY</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="events" id="events">
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
                                    src="https://lh3.googleusercontent.com/pw/AIL4fc8PiIFO9H005slRiZ5cghoP3HmM5FfhL95Z-ehOhcpXx8Zx2QMAM7CCVjKnZvmecdLTB01uxEmSR7RtJs9rLVNmRHzdQ7GBvymNmZzeQf5WuHn0P02jSf248GabeNWzyo8lgGuuxakUkauMsZVCJZ7BryANkFmtqHbjcXc9NBcy89je_uzck4Izck84o2g_MQ_3DZB62t3GcMASa8N8RupohosLAc0dsMpdDc1JTuc30ZWYOnCM_ffQjVSsWN7AfggPCDZFDehydBURaD3xjHgcVNe4bglE4p5uYDzu5R7-jacZMPEb7XOKN1G4nTkTuCSLpfjCwM6Up0MHaBNuB6-wiiKFIvOAWYVnfQnzcqB14NPSXgLl6nngpU2-4DPJmAOAT8n2wUCXz8V5P_7QVAGQnpn4DuAK-J9cci8T8nA7v0cQs-DDaRK9f1SZSqWd6rfo_zUjqQzZ9_41FCy_WiAV15lb1pICfyOjQ8gODMmLpt326gwop0jvmmKoLLHX1rekgD6NQW_4YeaBeWMDq5FLgspAoinYdQQPOsKdURzbn6Nr7D6s_RIa6yJf0u4hUWpJF6Kx-6NBQmWqbDU_6tr_nqyqh7KmLnnYGWOq3b_PczitsH-AlZNpt6ctMhm0PXfM1CVzhYyyzHsi7tz9JhPFIcULDQW4eQBCBy9vr9W_jlIEMX6JdixdpipvVi-4epV0jhY0Yzsnqff_lm8TAJz5h6h13j5RAfqu6rb7yKCwJFpo1-zFAmiqYxvXkFHMpGFeE8Ix8yubsS_BmZ0L6JuzuNaW8mJyxHbd84U43mWSP0x1iYrQQvW64Du9pNvWvqPOeOpsxW4BNrOTZtdMDgmGhVjCkNTD8zxK9fsT9bWw-xhNb5usrvF2NyK_MIIQHlKElr-uwlxDjIlu7xVGDs_8reEaIV6Kf_tSwqyRKFQ3XYa6eMOIvBTkH9D-2i8u8IDQDdRR5i-4i0tuYmlMyf8otrLb3igVBi03Lq7-9NLry20oD_LtVws0VFXysEAGEi0=w649-h973-s-no?authuser=0"
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
                                        <span>2023-10-12</span>
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
                                        >5B Nguyễn Công Trứ - KP5, Lagi - Bình
                                        Thuận</span
                                    >
                                </div>
                                <div>
                                    <a
                                        href="https://goo.gl/maps/UuREuBNqi644JB2D8"
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
                                    src="https://lh3.googleusercontent.com/pw/AIL4fc93Za3MdZ_ZaR1I-DcWd9ofpyB8V4FztGO5uKYtfV_Wd8vWKS03irWk7yY_K4OOR9i9ymon5rjw3qNO1QQN_Cq2gliS7C2Lh4_VEgz8kGv5DqNXRJ8QUv22jNze8ePhRa60J_De66fkAtlmIkB0fQKuZmW3tQukb8TsrUws1eEIWlaOspziLW_pBMtP9aG4lFA7KGFvy8SXpSYl55oXYJ_Un3snO--psn-iRAT_DyLYPZwrmM4ohxe7ElUBlzXU4tjtxl8WfJC0p19EU1FKT2xgVUgKdoY5UckfSFPaB5nlzdNLAXIisLDNeYOSdEW3rrPQxB9a7dAoPjFzABWtuJHsYaM9UYwaEWDm82mGl3PHnm4iiMyo-bM92zEdjRxiAjYY54YQMRSTVRBiq4XbnIRVkBzAbP3DxId-3E9g-nuG_3pHPn7jAUzc2Fv-7UiawuNSupEVc0OdOPTBGjsxXdBhTPB30_O9q3nikwSDaR79ZyuejTEBuIbuqNjX38LLxua67CbxNpT5PmofPinjwaxX0QurTnvyNMs21K6SL4yJo8x5KdqfVnAi2QYlAIWvICuRlnpCeSXknpRqBzF_Nj9NGonFPuTkGCqahqoa41hvLhWyKZ1SisSn5vww-d-Gup9x0BYf2oo4ZOzfBoF3s3LeWrejl6MNNOxzJyp6rAg9_tw1UafNfuiSoHJl4YdwPUx3edjYHpv2zwrbdgDtJpISAD9oRyxgCFOr5huwDMSzCEbTmQALVtoZW7IK4tlCkQpvHIWMRSY1jX-KTW2KbBTOUJmKOnM6j2BeyXed7eYFhbpv3aRLxPZmJavFyyaF77wEF3fBVkI0TSgS1gnE3nWyHgBwUmooKRUuZpdFv_ctX-RgaXRrPxJlHgU8Pof8jf7Q3FVrR6PaOmHsnIJAaQc-sKUgXgDs-jk2hEP8Za4u5cmJ_EycFWe-VhWhTDh1eNsbaDusIiuV9745I4uxTVj2DYIzIIPbYaJMqHvR9CpGXHckhMzc6Ym6DEWIIw0Ncs0=w649-h973-s-no?authuser=0"
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
                                        <span>2023-10-12</span>
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
                                        >5B Nguyễn Công Trứ - KP5, Lagi - Bình
                                        Thuận</span
                                    >
                                </div>
                                <div>
                                    <a
                                        href="https://goo.gl/maps/UuREuBNqi644JB2D8"
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
        <div class="invitation-section" v-if="innerHeight > 876">
            <div class="container">
                <div class="invitation-box">
                    <div class="inner">
                        <h2>Save the Date</h2>
                        <span>For the wedding of</span>
                        <h3>Ngọc Linh &amp; Phương Uyên</h3>
                        <p>
                            Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới
                            của chúng tôi có thêm một niềm hạnh phúc!
                        </p>
                        <a
                            @click="scrollToSection('wishes')"
                            class="theme-btn"
                            id="scroll"
                            >Gửi lời chúc</a
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="couple-story" id="couple-story">
            <div class="container">
                <div class="heading">
                    <h2>Chuyện Tình Yêu</h2>
                    <p>
                        Tình yêu không chỉ là một danh từ - nó là một động từ;
                        nó còn hơn cả một cảm giác - đó là sự quan tâm, chia sẻ,
                        giúp đỡ, hy sinh.
                    </p>
                </div>
                <div class="timeline">
                    <div class="timeline-badge">
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc8ZpW-Dh1IAjpGqcikiHARG35RQJUF7QTaLpFmmltOuwN-qI_WyLL5I6Ke0ryUdi1R1TQZpxuq-bU7ouvhcNv1XZJAZvsQ45pRwpSeMdmQAgCNC9qALVGqIM0m8YRUoX9pYBAn0CQbSoYoZlbbTKL5eJP1TzOx514LcD2mvVMQdPGGWwUvIEjXtwSB58G9GqdWVt7Ip9kbppOfWxbLYs4CZceg-9es1cG5vQsKxbctGPsYCjl3XrUuN3mn5XE81oPDbF3PBHE8ddELje8TcWlalh1hOAPV7khdcSgAmu6NENaaBwzZMEGZpRrEL7W2TqpLRIn9t8dv1AcNS1O75KVGVAGlfIprVJBM7TBriLeQfaWLLcYxR_npPDZOhXeljulTNtcWNBtF0hIUDRlHvQlht2zHCCghTJ9zSTkvyy2aK2Iombh-qcyW0t4yEKWMvmd3oWXxkrEUC2tjISLsa3-FT9ywKfL-EI9QvNCC4ZSHU-bxclvWeCEG9jghWRwjt7F7rRuAly0UyjZuebvVEfK3CqFTX41Kz-qPcbNeoA-rcHr2u7TAxpXCVTIarAcNoah_N3NCunz87g7xjKO2gpTEr7otf2i-cZ7JiRxm8_prBzh0GYSClqEkcQaD-cQ45J0rLZQLQ_whxhO0ycRfrNmiMa_Bf8vk0Bfnc2u7M0HQX57KwdhUR2GW2Cgk6lheIQ23nvmG-WFIY56g2vijoF9XihPJWF4Zxe0JgQT5TuERlN0QIyeizfTrlyxUHTZI53cRq7jqRzAdOcSBWy2klj2I6uos37Z1-sDHofCW9OM0g6dX9MsUgx6HSPyd-J0xpBwRzWyhpsMC7hJcXbo_g6sCC9ENawFrODrODntq7lz07PNCnK0RHhtoyb7kn3T4QJ0zqQwAxMvX9oIc8lWRHA8zcnc-X2fvhjm307KI2LQUFvyg00F8txstrmgqGG39EGXfQ62LlI4q99xKXWU7glR8LzgN0vCOEFGskq8UaefV8iasxI91DQcYkKGSXtnTtF84=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h3 class="timeline-title">
                                Bạn có tin vào tình yêu online không?
                            </h3>
                            <span class="date">December 12 2015</span>
                        </div>
                        <div class="timeline-body">
                            <p>
                                Tôi đã từng không tin vào tình yêu online. Đã
                                từng nghĩ làm sao có thể thích một người chưa
                                từng gặp mặt? Vậy mà giờ đây tôi lại đang như
                                vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu
                                thật đấy!!! Ngày ấy vu vơ đăng một dòng status
                                trên facebook than thở, vu vơ đùa giỡn nói
                                chuyện với một người xa lạ chưa từng quen. Mà
                                nào hay biết, 4 năm sau người ấy lại là chồng
                                mình.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-badge">
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc-zaWs-dpeV7Hzj3b9Jtk75rgg7nrtRp4s-sMfkcS3KlhY2VNacSO00vu3SXlRC5aMYQt4hVZ0VbdJhcMkTMwOljtd43Ee_jAQHCsVjHP1j3H-A9lly80TitOn_d3QIhcFgdQrcr7V_9XlTVIGYvFGBS73Kb-Tk-tSKDu58abMLjxfiDQD7rx_fjV17JtRTbS4UGsMRcmQMj8GX3jO9xNrj5EEfIaVhXkdE9KGTHBo1tUxK_-taCfD0Rsy7z1rN9CTQDy8xFDJEcpUG_lyqZACKLVLCUBsvVDj6DPbd3Jr1OOiAyuLj72tG3mLO_3ujZQs0xG_othlyMH8KYD7fH0-We1_duU43HJAgkAozMmp0agfZobDKn7GWkb2X8kJjkC0vRi1nERrACVldT8m1imvdhhKnykWBTVCiE4nslE9_wGs8SZmjrag6NHJetU8em5dkcGJM6a5sANM3bO_o_atJrnjmLAOZaQuKgsjRAymX7ljNR4VMN-x0RmjqWDKNqypOomv6mryQ_clPopnPUkwQ8Cmq6UPXQfmnfF86AeSxiUERXduxAKpmd_coiwIab3ktkanjc5wbCuyDZyPShATAR26btdJSLWTjildyCa0Q4OEbvRnPdzYPZtAyLP8jHWgFPIb_vCqtovJf0sd27S7iX5SM_CWSvBnStU7De-79n97tcuYrvi2IMFeCCewAcYSrZPP0GIwDDi_PQrtVPoQ6EepSocCARunz27hlCx-7XWl-OIPnqQFSvwHBhHjJi5J0K7qUTNEzQl0k2f9ps1wj3gJDururSYNapIJ3CNjfDDrUNEyakQUiyKdAzBsxTqpILgWnEtT6z5ztm-S9WxORRrV3bNpMDkhoVpZFc6TbEv-7t9GGaAYALZTyxCyceskiDAO5-gvbO-0nmfTkd6-8-ZVObB3MWwWiJlgtw_mBvSWm48EvQVWbZ4GyMojSLcQVh54llchKBNgkFqxPE44bPRa3hpHA6hvErztLTLbZpdr6tqgFfbh6Zcg9WPzL3m8=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div class="timeline-panel right">
                        <div class="timeline-heading">
                            <h3 class="timeline-title">
                                Lời tỏ tình dễ thương^^
                            </h3>
                            <span class="date">AUGUST 04 2016</span>
                        </div>
                        <div class="timeline-body">
                            <p>
                                Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập.
                                Mỗi chiều cuối tuần thường chạy xe vòng quanh
                                qua những con phố, len lỏi trong từng dòng người
                                tấp nập. Hay thậm chí là ghé vào một quán cà phê
                                ven đường để ngồi đó và cảm nhận về cuộc sống
                                của riêng mình. Đôi khi lạc lõng và hơi cô đơn.
                                Nhưng rồi một ngày đẹp trời, người con trai ấy
                                xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng
                                sau này anh được làm những điều ấy cùng em”.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-badge">
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc8NVg3_VjQTNdRjm_3GtfPjMzefrs-_5JN952l9hQ1D3oF0dwDKjbBgkSpj9O9yIeHBmbt2RGpsKTaOAxJ4gcRK--E9sFBs3GV2TUpOL-gqc1pJtzRW2W3hH3lCjtobc3QSn67B6Esz68c3zho0HFB20OGeW00AciH-JguZMN7ayDkrzCPve-xePbthV-go3DiMByJJ0PQ3e-g3O1TKdejGqqXPrWkqJzTq-K7tPSDNQ0XNp-e0TavCyQn5lmNAlhWGi6DRQGexgxGpZmCT9p9xMAWli3qRhVMEA9jXEQphTG34I-Ilr9iS6BkWPONSKIJMK6iqdF7vnvTxiFu12Dn9AR1dMVFIaoxQSxV-g7zBXdn73qQXIKTxaj6laBvHnDfI8_T6c3DV-1qJYNYoM8vS0DP1YKU0s-Tc8rYRzvhRhiJL3pQTkB-eT9ZuuodWJT6yA7o_KDwlPouWGQqkS3Jko4xVYLOlznm07fs5qY9EgciPv0C48LUrNCkN0lvCyrUhDrSNRwWx7JhlKOUN2AI7RYh1NgmzsLLRqdj55x7Tc2gMLmYw4t81JsM1SfvYGZUbkl0gy4XqVpQbzkDWElUj3MyoC8IVWhsvR1xKsbd5Vwn8HdxgkkuFta-H94aeeeVVpqG9h8WofhxM-qA_HqkhJIheJZFnyumCBDDVoMGS66JdmrpK_kg1RSWid43CNc4R0LoM74iSVWx3EX0dClET8R6T5TehJ7abbfvzzT5rWLXfeykmyKnfCW6w5NOBah6-woGt-xOw6j5EDcMj17cFgkjeGy9hm4Mm2HdHrZjmPoz0lmkwW6XH1-89o-_oDp9pl72fMKjePbGmeEXGTzr13yAQTb9afIlTWnzppx8NUs9G5H3TtdKMSSA3xybfF8Vxp4nclgI-9iJMJws3f7MkV4NU1TnEX_iHGCn1WEKugvEdwKaVpgU3Ws-fzEtx48ZELPDUC4dO0r9AMEPBd-Fpw3V6NMlJO5WLV_-QldjXPEI_DqTiywumUvhJabQZMKA=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h3 class="timeline-title">Phút giây cầu hôn</h3>
                            <span class="date">MAY 10 2018</span>
                        </div>
                        <div class="timeline-body">
                            <p>
                                5 năm bên nhau không phải là quãng thời gian quá
                                dài, nhưng đủ cho chúng ta nhận ra được rất
                                nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng
                                nỗ lực vượt qua những khó khăn trong cuộc sống.
                                Chúng ta từ 2 con người xa lạ mà bước vào cuộc
                                đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau
                                sang trang mới. Giây phút anh ngỏ lời “Làm vợ
                                anh nhé!”, em đã nguyện ý đời này, đi đâu cũng
                                được, miễn là cùng anh.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-badge">
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc-1X-nOz5sxJ6EEVu6gDyD7o-coEulD3tNFJ-yl71AZMSwk8Hjm4OPRPcOPYEd_c3_GOuSPlZKjQUqeZ1OKBoX2NcB3Hk_XVAttEfHQ8Db9vQjLaYrqzJJqE-VgbcEZ-bPMg2rVD4e9mZutkD2JgJwNiiTiBZb-PWalDzOslRw0DxRzeqLa5xTJFpsInMfE9wWB5L7UCrHdh5-tQkAOLQEzCtsbNZqLD7D3PpXouxws0PqUzju62cQesMrl5yJguI8V5XO8-0u0WisDUZAKSXHrDU9UlFcDLhXNmWsE4QiToS3yRaPE9p0yY9kH9rNZwAm2Iimy8_r5jTWzodOqRY50x3rtCxGCwjQ4Gf_wYJIJVSDJagtjxsEmkTHro99Mig5LbYGu611zq577WpurS-VhHgFNejt76KkfQ6SI94XrenNyaop6syUFg5ev1BScYWmmzqSVAvVM6VmxU0EIHW7yYg8dHpdLFGYYpQV1A4SZv8x1pTwFuHEv6R6Yq4Sn0ugZqzfQmTjfGBoOJY8VJZ5F7tLsw7kVqKNxfuc0Un0osDCKjjeA5qBA8IkORZ0aIz-RpK6Py_G_F4mZXFUJznpcRCV63iEyx_wkNSfZWOYJqGjb_w2-rvV-uJ4_O_aKEoUqelJH8wZvlaV3LYOv3zNW8IFctTndmBhVGGV33wu9BFZbopi4cELkbIaunincYB1ui__i_QnZsvMnNAyyKsiz0yaJoEWdEY16Hixl0vEZfkuHPi3f3jbrFR9cK2GgoWLgmpw77RyYkkLNCTzfSpcT9xukCHhB21bSFBuasNngn21aXQuYyK8oekJ16wjLHIbyVddW0f4beGbPI7w75OVAV_zHEP1kDCAjUYhqBDXJs8qMIiPDqh0bzAtlNv-z7Jc4-0Rc_gOhvNwSGpDtKIaFtXsaaGTAuLM0a17rZdUbM6VVyMLCPfNlYmMJSv6eCiwAKLzyqmlfvsMl7oe43LbhNq6Qs87X6lCLHzypXuC4fe7GcVB_2h5k_FsHSH-fe3w=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div class="timeline-panel right">
                        <div class="timeline-heading">
                            <h3 class="timeline-title">Ngày lễ đính hôn</h3>
                            <span class="date">JULY 28 2018</span>
                        </div>
                        <div class="timeline-body">
                            <p>
                                “Tiếng trái tim đôi ta đập thật nhanh. Thì thầm
                                lời yêu thương. Ngày tình về chung đôi...” Sau
                                bao nhiêu chờ đợi, cuối cùng ngày vui của chúng
                                ta cũng tới rồi. Cảm ơn vì mình đã luôn là một
                                phần trong cuộc sống của nhau. Em và anh không
                                chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày
                                hôm nay, em sẽ là cô dâu của anh và sau này sẽ
                                là mẹ của các con anh.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="countdown">
            <div class="overlay"></div>
            <div class="container">
                <h2>Xem video cưới của chúng tôi</h2>
                <p>
                    Tình yêu không làm cho thế giới quay tròn. Tình yêu là những
                    gì làm cho chuyến đi đáng giá.
                </p>
                <div class="video-btn">
                    <img src="/images/icons8-play-64.png" alt="" />
                </div>
            </div>
        </div>
        <div class="gallery" id="gallery">
            <div class="container">
                <div class="heading">
                    <h2>Album Hình Cưới</h2>
                    <p>
                        Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh,
                        trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.
                    </p>
                    <div class="text-center">
                        <router-link to="album" class="btn btn-danger btn-sm"
                            >Xem Album</router-link
                        >
                    </div>
                </div>
                <div class="grid">
                    <div class="grid-item" style="left: 0%; top: 0px">
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc-R-LNDDhCdtD6pNT8BbBX_x7vDlgX0Oc_GAr_6YiKxWu_-6ipF6ldoz9f_Ke1ReqTrAFmbO8_lqSd0CvKvzjCb0ugdwO4R8_oz3KHn3KaWLwkZiPcaN5d3OvEt0zVsqfimVFVDxMkN1V2LhfVlJRIYo8EPAnitxU0hU-A_by3FpJxwtijGktGtW21yvgcrOuN1vAMzKbtrTR_CRfYjXlUeUrR2f93keaDL7GZbueC3OE53-wlvE5LffFwA5VXmamQ1lP-SqTkcN8tgbpld1DxNoO2wzz7l-ZiQzHLZGzhbicsFDV95brZoirFl5eLGNP4qONsSU3YoGHMEn74IxRgzhKbfstGwXrrHUkCcC7qF36A4oKTzViivLgG2__GskTwf3ivTBLjvm9XnBikWtfWR9to87YB2CWNUEJiMpytY6DCZa1qFyu-F2zJulvr_zDlP7J1DjA4BNygajo8p-A2W7AFVdevK7jG9SpheT6dw8bkVxtGohvzpdS1zaMEwQboUlN3k5Qatu77PTTy3Jyh4iCXZTCBhDY9eX4J1XBTpmMu0NniLUOdj8edujr20Kcdbu4BtvBQn5W9P8nSjD_VCh_p1xtyUzW6aTs--GRIyRy-So7PoQVyNTMSbW6UmZgOwJVZIfJhEHy7MJ9bzyKwF7krO0O8bMY2OwdWbyHQxJZbWFgP293QRzwXBR7-4_7rye8OgaOP54ivtsnxZLlj89WoaiqaFEJ4zkGqms0lyD_LLLqpxz2J7ieR9bSkMEzQcQgLIHaWmLH3hT7QoUo0VedSHOQZy6YFDvaNR7y0kQHyrsNNBaGQGaCdOSSkmxotuo2eqou2O3KX2QC3BGDY12EjiQ1MBkeYOhOn3R9VhOiNkWVsh_SCwfHavMIqCjxhxz_iszN3smtBJjIzjQMF89eZAPU-KLFKqHyDuDCXx7NQsiNiP6W4HvYx_RgcuaCtNiqleLacmVjZ6kDFtvHcFqT4eyyUWTu0tTdlqT8VPrq0woY2SBzPAwBMe6GCAgMA=w1460-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div
                        class="grid-item"
                        style="position: absolute; left: 33.3333%; top: 0px"
                    >
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc93Za3MdZ_ZaR1I-DcWd9ofpyB8V4FztGO5uKYtfV_Wd8vWKS03irWk7yY_K4OOR9i9ymon5rjw3qNO1QQN_Cq2gliS7C2Lh4_VEgz8kGv5DqNXRJ8QUv22jNze8ePhRa60J_De66fkAtlmIkB0fQKuZmW3tQukb8TsrUws1eEIWlaOspziLW_pBMtP9aG4lFA7KGFvy8SXpSYl55oXYJ_Un3snO--psn-iRAT_DyLYPZwrmM4ohxe7ElUBlzXU4tjtxl8WfJC0p19EU1FKT2xgVUgKdoY5UckfSFPaB5nlzdNLAXIisLDNeYOSdEW3rrPQxB9a7dAoPjFzABWtuJHsYaM9UYwaEWDm82mGl3PHnm4iiMyo-bM92zEdjRxiAjYY54YQMRSTVRBiq4XbnIRVkBzAbP3DxId-3E9g-nuG_3pHPn7jAUzc2Fv-7UiawuNSupEVc0OdOPTBGjsxXdBhTPB30_O9q3nikwSDaR79ZyuejTEBuIbuqNjX38LLxua67CbxNpT5PmofPinjwaxX0QurTnvyNMs21K6SL4yJo8x5KdqfVnAi2QYlAIWvICuRlnpCeSXknpRqBzF_Nj9NGonFPuTkGCqahqoa41hvLhWyKZ1SisSn5vww-d-Gup9x0BYf2oo4ZOzfBoF3s3LeWrejl6MNNOxzJyp6rAg9_tw1UafNfuiSoHJl4YdwPUx3edjYHpv2zwrbdgDtJpISAD9oRyxgCFOr5huwDMSzCEbTmQALVtoZW7IK4tlCkQpvHIWMRSY1jX-KTW2KbBTOUJmKOnM6j2BeyXed7eYFhbpv3aRLxPZmJavFyyaF77wEF3fBVkI0TSgS1gnE3nWyHgBwUmooKRUuZpdFv_ctX-RgaXRrPxJlHgU8Pof8jf7Q3FVrR6PaOmHsnIJAaQc-sKUgXgDs-jk2hEP8Za4u5cmJ_EycFWe-VhWhTDh1eNsbaDusIiuV9745I4uxTVj2DYIzIIPbYaJMqHvR9CpGXHckhMzc6Ym6DEWIIw0Ncs0=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div
                        class="grid-item"
                        style="position: absolute; left: 66.6667%; top: 0px"
                    >
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc_VVpWBENgtDJbMEr-FZJYstMNi6p6rS9TolaEeB5Im85n7LrVS1Po76bEH7SG6h-D_h5c0NsZ7DO1n5B5arIcRoe65i4vkycDoerck8u6Lk5PoEbwYLcuTangwDF46OxEVRyzuHGpzmDRA5EE8MpXaGqpOzYEUfPQnUoPDkFiSIeehck2_JA1IkMWfCMGYDmD8yWCyJsm4hvl1FAP__aG7X3Tvi7O1iEEfvMXKRr9aJXEX7bnLSqdY9xmQXCqjItoL_68ihHCeUXmosMrwcAOabcUS5qjN-tyhqRbg42rDlISIW1a2QRgidYII3DJs4fU0_hz-sIwFpVgB7CmhePd4QFaJ6qUo5iHvEVD0ow2UkA67n-KxnjTrmCJ4ZQwBU4zd4r70ZKR6TInpRxIrf3myglSE5cc_DoxcBYZQRQcUxb9ZGOwEjBYwWoUDXWghfx4AJ001dJCw0O_Osr-O5GA1zqb7dqjpgaA_yKbYwwkFhCsGyMiZ7NyqJ0_B23G7KQz19ieZV5y7Inbg8uNpEaB4sIpDClQrMgPgJnlEkVDPMP0koW8N_ThCz9I05XCimY71fMLmrJ1dzbR6UlpOgG3wDR484-ARfZCbHpKJdH3rFrmxP_Iyx9QPE2wW9fVIS2c_nYULUf89NW3EwpCSoUc95VeWQwWCQ_24tbL4Axqx2tazeXWa52ciPCjKsyZMGfbtseBsvY42Y_DdlMgjzSTE8tNec9FyWrUEvsWEaN6Z4kn3a7tlLENv10YAHe9yB9w1nPj-40u6R1DzpbPV8GmIuikzKzQ5-ntXXXZkRFNQn5GSiJvWAQ9j5KvnwcHgz224_trfG9hKlnfn1nRTHxtpkPLuUF_6leT85-6C_esQuIcSEFwr3C6sAM0G5w5ka2tQEizeRkRxtseYPY6Bt92f5JdeOyPIDFof4yQ8xX6VJbqcRLSnxXi7-o7QANorRtY-qug_ePLffjq0wUceXSTN0W-S9rGNCESpCnqZlDj5cvjKRAPtTu4Q94OiIhy3D6g=w1460-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div
                        class="grid-item"
                        style="position: absolute; left: 0%; top: 259.75px"
                    >
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc-uYvFT6Sz_QBlJdaLssfEdz-h-xtXTSVY0fxs3jqLWfof5DHAyy3t7SPXcdO2W0DmFTBBTM3PZ0Rv20PIolEf3ueohZtEknvRBOCQ4pWTJpPB7QAE5QtscpjpRvmMIr4ZoDGzzNh9ehK4HLusXeLbC8GmgvTLrwI0blxNMdFktibE2HJeGE2bzuf9FnA1NXL7N8sBOS5NsrdK3H2dmqrTaf9rOqm-pluiT-fiwS8p9qB_n8nlb6SYLfnpPTjFd86lBGhRtabm-sUuC_a_tnlmZbrDcsGEqWFmhxJDIdkDS4JW4I9lvKRo5Ip1JSLapnarAPP2MRm1jGja-4X-EMI-eWGlH-DK__igZ2EWoqEndl6Bz0E9qkvbOwH0l4SyYQZomIoZ-dPwJboHh2GMjzSlzodsa5Ke6hfS7PBjWmF6JWEE6qMjXaHYzLIms3Cr9bsq3DeZzfXTkQTuSLuZ5OU-lQAVjRBhBuUwRnwTJZrC-SNYtHzziqGk3QP5tcSBEVANZww9fwCYtiplbOdKwNuYNrkG7Fm-eUikdJTvrthg0j0whjboQynlMsKU9-WIl2VCjPNQY7rcSmrdWHepbCyJ0zGlYfF8Lf51oQ3pEodqfTu91zA3rJVsrf0BEEhLCVzjmpH2VdhRHxL5o_5wEYxfMtvJBXpqy_IhFi8oSZ3bN_UXSK_AT7ybX5BtUgIZVogbMilijzFOaUKzr4KQTTriHiOd3_Nm82qUhtS9tsjvTWXo7DeOVyXNDknRRrQNwDD6Ui0LnedfoqqgLDkNuqi01-W02EwByRaW3tH2F8w_jwojejthsKx69zOzn7gpyNJ0KvC7RZ5h8o3Rn52famPb08L7AZ6Sm8TjzaIyqhShjohY58E0fdDZDRkPgEC_Luzve9PT2jY2JmLM5SaGV7ODrco3q5N5CIvgXNWdqXBeBLQRGwJY4inzF2bExyPQim8efF8MXKwjzsT0kFTcYGRoh172ncFrNjkMxPJshGWvG6z5Zjzvk2D1bd5eUGRhkEUQ=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div
                        class="grid-item"
                        style="
                            position: absolute;
                            left: 66.6667%;
                            top: 293.594px;
                        "
                    >
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc_epNelhDYG1vsZnfU-wLTsUPZWNqe2C5PzqusJCq8OCGYNBINilAU-bUpUjRhk7OuhF8CFg61jtYDbzo3vp-9F9KfgWjSjEUfDmjHsyx1C_IGkshnGoKuIlxuSmWCZiHt-OZUJSHkw13TVZLb3p1tgAzTUujCkV8VjamS8aM1pLI9Qsmjgw1vqXaQdsot8Pswnp8c-LHQhvCi8HDx-DW8YMpHSMbJUXaR3Y5zXkjXkX_7S2w4ebj0kb4ymIGcsqhbJdHgG8LsHcCd8zPMjdJuQAHbtuWFPCEAOurT9mG02mXpJqTsZTT5QjjzDd5o8Sw6ns3bTQA_tDQUPk-jt4L8RMYx19hSYWHGiDD3SVssNAHrT7jVYEQtblhmbIqpM1pxoliiSX0Uu26Gq0bhdRGFiabRWLb_841LYzdlRShkp2rGOeBDm7E4aES5nDxkNsFR56gu6_DBD2-Owct77Xcz8dVNpJ-LrbxFeHUjINzcEJCr9uW8S7v4yiru6N_GevpUpLDJ6PN3oLM1h95J4PWjxG9ltdpFD2p11eh7eU5rmvVUtakT3MKUjcmyrDIBuP4ef8yhzjqsrNR9OgbZrWmdQlt6JlbOZUQs0xWEePDDYeaVcJrONBZOjoxCnkKCc6fHFN4qadbIVUBkGBmClTGcD_oTvJXQNLW9k18B-rAqL1T3UGO-I2FrqBxBzH0PWSyXAxIcGOVrxRBZ7u8PpfKb_DY16paR_VQVPutcOoswXfzhqnO2Cj8v1aV6FBAjdZsYEmhKbd8mhf8WpxAEsGHOioSN_DdfG9ihiuUKJd_wG5zcQeOMW1HxWK43SWO_4fWLpZQrs9VOagzpRWQkrJsFXbUeVLJwAxRAgRiDrIdc_nAU0EhKdLnh2me2j9aNuWvtQAfR_BwWbicEpWMcUPjk1ugkty8hSAmI5Ixywzg8lsfBQjdfxL_yBghxe4QrUpotNaKQgQEPxPK1KQrCz1weNaV9peZZ7M9yfER8eQCUO3Eq4_-mWH6C259kWHAp2BlI=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div
                        class="grid-item"
                        style="position: absolute; left: 33.3333%; top: 560px"
                    >
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc_Sc4bYDURCgkLbAucK_8VtfQOE6X2zI8u8iAmYV67TrD52TXS9v-FF-lj9g0fC6miYUBBfubw1QfDLZSbhvN6Oh8joToxBW2tTapwDKlqGm7PgcSL1td_uHszCNn9AwZpFzxyGdQV42tDxRi4vcW1L5WRPOkQ0JXAbe1shDn6tbkyeHral2Bw-bBLgpUj1EwVD5bW-uL_Ip6ygeYgdIJURzVg5IuGt4I65MtZoryfTdW78yBO3xkx72J5cadJSSiuTepeEn0_YHyh0HUmz-R1RS145SyK5QRGu0o1GRMet_VEIgm1Dxa6NBVXZULXD1J9yhmzDnyfm5CDngtIRvonEHwDXwLtc6ry8CzxbyA42iNz15E0am4v8UX-iFBOGjUAsitCkPrBxmZrM53pX_cgkizWqKdaWO4i7K_yrZQluCaP1r03tWPj4Y9T5kfsX35dTmy7cullfQjuARZ1TsAujVBHDxJuKxTA1zfx5NvHFKcjn3JI8t7pgyX09Aft8BrR5C-1Qc3pC90LbCnJ7DP0D-4Jr82liqSFQpzvzR3oWY6aFfodagj6nGei4ABLAoTeF5QwI7lAjifmKsQ1eS2NuDSIwPqOnI2bcGLFRbKGp7hDhBJJr9d043YsxhWxhbuqzEV34hf9Jl2qyyHSTRzHfNyIT675q8wLN-GRiTC4ItaUioAzw_k0Rt1gvgtswin8aLe6fyGdLQ0lGs8JofGPYfuDHZI8twidVXwioJFNWxyWfn7aczkS9gUJJUwG4q1r48S_IglOuhaoq3DrxeasIrYrLvmz8i3rJiOK9hsiUn4dfCof08pRRgFIpY1mul9c0N4k3ViLh0QFehuhs5RbGumJKuvn9YnsbfMeAdjYHY1Um6XZH6-6cdxdFqNQvy3x86VqjPg1Rj88DHHVLdIKj1WqHoM41nbIWP2Ieqg_coPtT6KUhnGFrbfb25qsWz2uop6Xgt97r8YqnEhMUqzDDTlrtdMS2DMzxhwKvZNim2caGTWGB905HIA0gwfuZERY=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div
                        class="grid-item"
                        style="position: absolute; left: 0%; top: 819.75px"
                    >
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc-9iiEbzg2I0DGO6IHH0pSpxHSp05_ZJ6YDvLNVpiC2vahDkfdeWAdNlCvn1ik4X9qV34a-x4oCggr1tBTW47R0sfDTroFm2vgs3Nm5MA5gbwnEhqQ1az_nDWSQF4Jx3RxwUYIHUrgo5jvgBvigDAQ-bNPxHcEPTFpoUKkqIvDxkijx1_4edg-zdkJI-xhvHysxerpdyF4YtQ9AKQNCBMydKrK-S_RA6IObk7gL1IfXjfseqsn2gSrhFDOrN4opPoGx7xHZ41Bq4fz3cfVqEbTSvYujIdXbw1iozLZJmETsF3xhPJ23UPZdF_J6y7bY0HTFcQa2wXEOtbAqF7mYZZn7yAYCcyuadzVQSX6KtQ4gBjl_pDKCAAAI8Onhc7LDvyBEEZ5q2eXSB8U3fLfXRwBQtiJREv4Uhdq6SBC0wU1-uZ5O0yWscOZD94rGjafs59m27Vg5tafYGNvpMswaQ7WOmhJHbt6FVjOcqo1VaFIz5VPalWg5hDo0XGCxgCGv0zDFcWfl4kPswjKkqCSUjqs5jWGHTmopG9zBMBVgCwor2BaVB2sfh_UgJeJVebN-5l0-1bJ0dqVULg_Sbvekg7BV8_TIDL3Yo6umru-BVV_P5JIt6s-YOXvSB_WoDyFu8puS4Kz3qGCBzu_S7HRTuqHNZ8kZmIZAVV4IjsnWEC0p4uLSULWpTqexxawb5XVxRwSF6NNEaWE8gF9rBK_sr71HG4M-vIFZrWtYkuc44msCvqIF0eUo9VumhfL0NOjvu0m3X0yx84fKNP2YmYGU-jPATvYBCR_U2ox4W_HKuNgcG18vdSMTZ98YB_c9Uky_KiMuIbIeWZgDaRAqmJhBBFHuWTUT8P-k7G9FB6uuOUu0iLa-U9vactvMaKTHBeeNEhzYaeOrD3UNx3_NkHGKPyF940IyIyCRUO1S4iq6MgLKbPmrFibWRD-OSPpp7nbT8HmDgaEy20qztMPwfOiCZvq6XmrDXOHku-C70l3s7SioE6t4VqK2mCNVhmQVawSOBdQ=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div
                        class="grid-item"
                        style="position: absolute; left: 33.3333%; top: 1120px"
                    >
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc-8sEGDzLi11-pdd_7m79QS8-Bf-9ryZyK72UAcFONa9i2sWZ0ew1aCw9UXAXmX8YY1KyB5w9y2gwtF-Qcnh0LX3N0CXrSi0wtLgixuZd8H0DrkDyIEViTHvYTxopz4aLA85rmdvk3vFvETZTVWz2ccoktTadlQyeoMl9PBdx4fdRPH3y9ereZ0CUc-_Iyc8izSg_9a99m34bI13UcwSSYzXxovQQ41KPpR8YsOxSd3iOo1p_tHny2nuqKE94ZsGVCCEM1aCZafQKYdWiMrns1mCliSX0G7zMIUK9sBBxO-6b1nQrUzlk_jWGFOGvDVm1HeQNyWkXqBs9Wpn-VhSm-y0WVgdyLJGyT6Ue6d4lIqxhgUoeZCnBAm9kc87uWV02ye4HnfoujwhJjY00JgLh0GZyKONHSYNSGzKKs4Vcf-u8DF8VIIlnoCE6FMelVaPBFA1oJ7dqsImFyiFQ_ScWfvlHKL-seaJG-ECsWnu1T0QEUjzEeZbBWOgrjiMWJTjKVOODviikM-rWdKjlPRcATL8waUNQfuXIQMd8IJMIu4tgXlM8kWYJAVNbhlZA1o6vfB-MqKiJJpnD8o1dpkKdRUsMA8IaELo2A7q0hJokE0k-SG3y7C_OVqHYWqd3WN-THbAEL1yma9X45G4tgT44b1PZ0sUy9L4VCi-WBDkEmqM3mDAHzSYO39Ac1TI9m-AFZCuDC6zLmkSYw3yLSTNq7RYHlhTGJKfIUm0MfnJ6zg-3MxJCwNt53Urmr6sjGTWvXHsI6faOmlPjlQhbOCvUBIzMuN_vsOn0pcJRTCfas0YjsTuSv0jEOHQQbk1Gs2ULtfmEX7gMxQ-lg_hYSLCkB3h6hRZPqbik-K9zGeavcShcxVJJZDWknRuuttVhpEWomxmjWK-qC38GzFZsYuVNashz2BsV4sxf3z5CQfTzPHEBLnFsS2LwDFtJiJ5FjJKv7DAC0ERiY0cFAaH79kBpqA2eCMJUrsU7PKiYO2K0j1RWXkLDlnKRsjqSxjpRiLnYI=w1460-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div
                        class="grid-item"
                        style="
                            position: absolute;
                            left: 66.6667%;
                            top: 853.594px;
                        "
                    >
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc8ve1I6g6MkGPDKO2IkJLg5sHM10ZX3VtChM5k6bXkpO_GGy23uNZJPmrw09evtxioSbGRxhfF94ZhrgrQZ3SNmiK8Wv02IApXpwVTrOnOxZ_958GFiljyRQEvMkJhnEG6HUln-4oNY5VkJrslWbIrxYY4Aj8T4ffqQjdG9XMXaWTUPlY161db8J3FxH2P9dnkYdQ3zo1KqVvgUuEuYNLK0OYmUiNhlt_OlyIBcrThc6KmEUS8y3zz1bYOTjY-3tkVAfJf3wldJiYjyHmDU_FLGFhhkLkezcfpbp6MgzrFS9rx1K9_Ilbvvp-u5-UOUMighDpb3rlBmkvrWzD6H8VTUFLsD_-vrtXpd1jrMkiMABlqL-5BQNiAb7eAvW29oe6hUcqNyIe2j1HaOmVAZ9ck8bcVRd8IPwbZB_bNRMfx_HGS4VkfBkhgBeqjPrhNPJ_CSTlTl5eCZJD2-9zt_LOaVKVoJCQyk0hcYD5oMCuRcytbyrwa-lLD3VQOyaWKUGzGvt9Odj3cDEhyGi61xREAxagRbPPqrdfCDKkkBf6Ne-8FCXF2XCiZObYgurrNJslY-TiddQHcTe6vRlBHBc8iW5IVldas0VfCxyfX9uk3MVWITH3z93uGFqsUVttuonjzEID7hX6LCfMLeEE0W9C8IQOr1-hrr54KiFowFLJgebfd8yFUF3STbrGSBA_Sb0-0UElb41PlhrKvH_8g_4eGdadJty8qOQVsyeBhvRiZHYfifdezajlJZWSmvpaEuj_HC94VZNzu0ztEoB0-xdYNFHrG1b7-_tH_DoPfuISZ8rRsJv6F89FV0OOZgkkiw1xvotP-xw7Mnz5j9HEj8XvyRrGBLu7ZgIWDARQMHaTBFNN7xKQbR-V1h9KUGM9LqvPCxJ3tVK3iBQvF2xs3Ynko0zKPDoKw2FJDYy7wnkMioLmfqQ-doSY65NCBTvvKIL0Ho8ZbGVUgxMNqlyPRRQE8RJKGhka72ZzTY8Xbg0-M_wX8G6LZouS4LilkEeacUKNA=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div
                        class="grid-item"
                        style="position: absolute; left: 0%; top: 1390.75px"
                    >
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc_nxt6r6PKagc6tHpOnly2p_eayNIaIMQ4V3xotZu_RLQ9AG6iQAbcN8zI7NY_vZJEwEiIvXSM-MG9tmBKgqOMte5JqXxin4J8WiHJUkBZ38xuM1JjGNiCHFnBT9Mq81Uz9ZXh-qnHHF4CNY9W5izqlNNg_AbdgEEXDaNDlTHUMWWaRtlk0YE6bWTuX0G35ROySzbS_un_VxhECFws0AiPxnPzTROuEz8__YK_4YDefQo2EA9efy2RzfmJBFdptyDqrXXeSw35Cb29857SSv_hMIfKcICahQwYz_hl-oQM_rRAKC_EojUjcHZalXJsX3PL-qqVItLkYmMe8T2Nrdiz1cGXBIVgczVqGKNIsj8EpBE1w18gr5SkQaIB75tegvOCGnRV3NG8ElKwvGeL-Jim77L1eEcEvJV24hxhNgK9Qui6x_wShRpgAmGXp1TMPsggWR_ehY0mRQ4Eoi-gxUxhhDtqieIy8doZ_NJhyN8_wC6l_hSIHLjOkdrWxE9rhuMAgNBN6a4TWOrkqZbO067QQWMwcfd7rqBUmivOfX7QVPU6gd6CC5oMhgzcpDB3oHA7b-wRKv22tfPIB3fTmsdX7g27_X68JHwn6PHdmIc3RxHSMtyOkpNRSVLC2vgfy3binXb6J2yBXMcywmMevw7d--JUxLsnVRDlfMxYroCJyK_m0teeTxpL_ylP2EwaVI2moYaGqOb9v5djOtdzOhWu5rgv9ZpGiGS3nE6OBi_0exkIJ6jPDYzZ-ftMElu6hy6cv60vBYiA3oVYL5_RxtpAn7rAirWmJKeF1Acuviw0uNonNd6ZUL00ge6ipbgunPumKzipy9HcIMBPWwZfsXrEQOO6_FINu6bRG-sJg6oOuM80Y105o_uOH7edU5ZnFazKsSrPr4L7PXyBwB_DMn5Nr67ogPMMZWGUfVovGzZQ3aIdMq8xV_-C74j-CIyzsdImhVuB-BC2RJBIBBzGyfXQXLx6nn1txWyEaS2U9iec0BufHzbGdduCKzlnTul6apwE=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div
                        class="grid-item"
                        style="
                            position: absolute;
                            left: 66.6667%;
                            top: 1414.31px;
                        "
                    >
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc8ol6DC8T8ZlWVCJXqu3Wl_SVT8Xvgz84Ad9lTq_G1WfuqtRvW7Yy2Fh4YJWElgscWkMWuQp4KkYGMSw6WRcVoF1UrzC-4dIxVPCcMQc7_-P7qxcwqWkjgYMQC4Kv3FlC8oGkuo_XFXKlRlJYxMSQPs1xIqEkDQfUNxzHqIekRmw-PUQ2Ph_woCGklgptpA0M7NoDle5prPSHvffI758SS8gpQm6x6IBahXPafp5Pr76ruiu_lIwbbmbgORv3UPaXfQ_I2IicUR7X2rGF9X_RU8QXNnti9QSYKaIKOjE1CJChZGC4DjxigHThpvoRo9pcKIvrDsNiwXMMY94A5f7ZWiTYcpDwKIOtovKaGHr8l30DS5qwKMC_iemuTeFY7t6_BhocHcMOXag5U5iWZJrhClKx_2-YKhC-gUy5oGzQRvGMaogoT1dKJxR1vFx0Cg-mHIyLND9_GKt8p91vtFbRRixIa_wMcdtGiYPyAowN7fIkdf1ecZvg1Js7m2N-6dEPU8TAtXB6GIvhtBVr9Nvt-UtlVTh-DY63G8sf8pZkQ8_iwV3xdQ0sFyAp61i-oPwFtzkwy_NPBrKf2fXylSzrZRXsRryoB8ggCKn1UrSxuzgSvSSDf_rVhF0yhlXP92NW2ZLnFiIsCfFKg_HdvX3GI0r9AZ_A_EiANdUbIoYp0g-4xUUbz7j4IS2s5wlo5DC7UKBkSStFOgxitDTZdjYTU21jFGGXvwEuQfqqAWVIqbLAqFov0T1o1pnHVTN21M86IyNkSkuzRNU-YpPBzxkNR_nuJl6gJy_NcZphsCYK_FIqGXTuaRdo_w4jeCWbQA0kVy_ocaCWk7adTWVzuKB9f8XXnfbhXjKslKO1X0ajLviEpy7XkJ3tVos_iPmZVxrj4VmrmdNwtCv7oLyUaRCcLN2rj9Np_k20q1IPBmgEQvFfe976AYtL9B63Jd7mJkZee9CXXAZckW66Ae8EA-LjX_hKLfpUQk8mwuoFlKg4KsIAIzpPe-ZpKnzsEPTsMRFlg=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                    <div
                        class="grid-item"
                        style="
                            position: absolute;
                            left: 33.3333%;
                            top: 1380.31px;
                        "
                    >
                        <img
                            src="https://lh3.googleusercontent.com/pw/AIL4fc-3NaBZ1EK4bgyqydKHQTtwZfL35N5LpG0_rcAwT4ky0vbsd0ZunZ-cligLrEP4M1kgcLDn26fUtqL3PpI1Oo6H6BAxdLfCb40pxgm_-3CddSBh9vU0lnBcKlO4JhoQ4qWk2WDphxgUqrukzcNHlvcbrW-6NJIozkwu8weKSSd7pI-m7NuPLYj7saZbxqwE4xxfq8jTEzdcdvczo5Z5GlJ4NxM11xdxI_EldPQy2JyEIIg35POHFS6b_uEo74tE-wG_W2cTSAdjJQk8f5hJ0QnOrP1Pk0DgYP1IAFt8PKGOS9B28csRV5h8NhSajN9_Esaxnbh4DKWnCELjy5EJR18s5wkJcRiicA5C1oYlaacOupGF3epLBfr2OBQKQ-beYK3N8GH_xpP_HXXD_m4yJrbbJDgA0uhoQWedAkGtwCPFVrWruEvd93mfmns580j3Wxit6pgEAOM9RTwVl38gQ5vsSxbPC0SRgjbV7y4QhgQfgD0NGpBQP3uViyTvUU6nHlKWRWOYNJnOubQHWSx3f-myt2_Ogwm4IAEK8ap94fDSO1HB1mwgqJ1tb7p42nNtpCnpQ8wngGtbEu83POQWB4HwD0GKT3bFqg5QULoXC05FIj2dYKG0US449YjKuhXokD36Zhy-SHY4u0QUxe_4jm4QsAXuDsoEGNHutGhTIWpKWHk7OEBvfGwgremrKozCbYN61p0fcQqGYpW6G4fByNYcMg0ALwRl-nYaLeLdfyfjmagrgDISrt7wW5IqIEvbiO0sPCL7yHvmTwcC2wbMTI4FpV4SJgUBovyW_--eEbu9Wn6u8wgywVj7uj6IOob_Bco5gDDF0rUeyhl3PhbIy2nYZTwWRS5V7di1CkIjUugkoxFkY_lTus9Xb_yc7a-z1JxECog79WxTHo4ih79lBIG96iEvTiVifFN0sFiMdLJUiYjdEhSYDPhW5JnC5_EvxSjGBw5DokX0J7YL7KoQbrLnPajarZx1Sc9Uo8t2UJpzPf8HO5RMhPFxgeJ3xF5XDJ8=w649-h973-s-no?authuser=0"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="wishes" id="wishes">
            <div class="overlay"></div>
            <div class="container">
                <div class="heading">
                    <h2>Sổ Lưu Bút</h2>
                    <p>
                        Tình yêu đích thực đứng về phía nhau trong những ngày
                        tốt đẹp và sát cánh hơn trong những ngày tồi tệ.
                    </p>
                </div>
                <div style="display: flex; gap: 30px" class="content">
                    <div class="wish-form" style="width: 50%">
                        <h3 class="invitation_heading">
                            Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng
                            tốt đẹp nhất đến đám cưới của chúng tôi!
                        </h3>
                        <div style="display: flex; gap: 20px">
                            <input
                                type="text"
                                placeholder="Nhập họ tên"
                                v-model="name"
                            />
                        </div>
                        <div>
                            <textarea
                                name=""
                                id=""
                                rows="10"
                                style="width: 100%"
                                placeholder="Nhập lời chúc của bạn"
                                v-model="loichuc"
                            ></textarea>
                        </div>
                        <div style="display: flex; justify-content: center">
                            <div class="btn" @click="post">GỬI LỜI CHÚC</div>
                        </div>
                    </div>
                    <div class="wish-box" style="width: 50%">
                        <div
                            class="wish-box-item"
                            v-for="(item, index) in arrayLoiChuc"
                            :key="index"
                            :class="index % 2 == 0 ? 'bg' : ''"
                        >
                            <strong>{{ item.username }}</strong>
                            <p>{{ item.loichuc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="site-footer">
            <div class="inner">
                <div class="couple-pic"></div>
                <div class="inner-bottom">
                    <h2>Thanh you!</h2>
                    <span>( Ngọc Linh - Phương Uyên )</span>
                </div>
            </div>
        </div>
        <div class="bii-player" @click="playAudio">
            <div class="playerIcon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="27"
                    fill="#fff"
                    class="bi bi-volume-mute-fill"
                    viewBox="0 0 16 16"
                    v-if="!isPlay"
                >
                    <path
                        d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"
                    ></path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="27"
                    fill="#fff"
                    class="bi bi-volume-up-fill"
                    viewBox="0 0 16 16"
                    v-else
                >
                    <path
                        d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"
                    ></path>
                    <path
                        d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"
                    ></path>
                    <path
                        d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
                    ></path>
                </svg>
            </div>
            <audio id="myAudio">
                <source
                    src="/images/Perfect-EdSheeran-6445593.mp3"
                    type="audio/mpeg"
                />
            </audio>
        </div>
        <!-- <Heart></Heart> -->
        <Modal
            :showModal="isModal"
            @update:modelValue="(v) => (isModal = v)"
        ></Modal>
    </div>
</template>
<script setup>
import axios from "axios";
import Header from "../components/Header.vue";
import Modal from "../components/Modal.vue";
import LoadingHeart from "../components/LoadingHeart.vue";
import { ref, onMounted } from "vue";
import Heart from "../components/Heart.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const modules = [Autoplay, Pagination, Navigation];
const innerHeight = window.innerHeight;
const isPlay = ref(false);
const isLoading = ref(true);
const isModal = ref(false);
const name = ref("");
const loichuc = ref("");
const arrayLoiChuc = ref([]);
const days = ref();
const hours = ref();
const minutes = ref();
const seconds = ref();
const countdownDate = new Date("2023-10-12 11:00:00").getTime();
function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
}
const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Hết thời gian!";
        days.value = "00";
        hours.value = "00";
        minutes.value = "00";
        seconds.value = "00";
    } else {
        days.value = addLeadingZero(
            Math.floor(distance / (1000 * 60 * 60 * 24))
        );
        hours.value = addLeadingZero(
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        minutes.value = addLeadingZero(
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        );
        seconds.value = addLeadingZero(
            Math.floor((distance % (1000 * 60)) / 1000)
        );
    }
}, 1000);

setTimeout(() => {
    isLoading.value = false;
}, 3000);

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
        });
    }
};

const playAudio = () => {
    const myAudio = document.getElementById("myAudio");
    if (myAudio.paused && myAudio.currentTime >= 0 && !myAudio.started) {
        myAudio.play();
        isPlay.value = true;
    } else {
        myAudio.pause();
        isPlay.value = false;
    }
};

const post = async () => {
    if (name.value && loichuc.value) {
        const { data } = await axios.post(
            "https://vue-firebase-wedding-default-rtdb.firebaseio.com/data.json",
            {
                username: name.value,
                loichuc: loichuc.value,
            }
        );
        console.log(data[0]);
        name.value = "";
        loichuc.value = "";
        await get();
    }
};
const get = async () => {
    const { data } = await axios.get(
        "https://vue-firebase-wedding-default-rtdb.firebaseio.com/data.json"
    );
    arrayLoiChuc.value = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            arrayLoiChuc.value.unshift(data[key]);
        }
    }
    console.log(arrayLoiChuc.value);
    // console.log(name.value, loichuc.value);
};
onMounted(async () => {
    await get();
    // countdownInterval();
});
</script>
<style lang="scss" >
.container {
    width: 1170px;
}
.main {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
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
.swiper-pagination-bullet {
    opacity: 1 !important;
    height: 10px !important;
    width: 10px !important;
    transform: scale(1) !important;
}
.swiper-button-prev {
    left: 10px;
    right: auto;
}
.display-tc {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -30%);
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
        opacity: 0;
        animation: fadeInUp 1s forwards;
        animation-delay: 0.1s;
    }
    .banner-text {
        color: #ffffff;
        display: flex;
        justify-content: center;
        animation: fadeInUp 1s forwards;
        animation-delay: 0.3s;
        opacity: 0;
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
        opacity: 0;
        animation: fadeInUp 1s forwards;
        animation-delay: 0.6s;
    }
}
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(-20px);
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
    background: url(https://lh3.googleusercontent.com/pw/AIL4fc8dOyabVeU3h0Ye9luQujPFDKUdWCyxGEnWQHY2iM0i9C95icXE0XUWIZIx72UIwKKegxoHfHdcS4THH_KeWYvQYaipVf-eozTQOERdKZhHpsK6EQYZon-4bHbDZo-cpHeZpXXXqf2RB7RSq8qTKgRSKbPo9bsiF8A1qXZzOXdXYW0g_ISOjTlrXC5EeCckjpyD6gBzza6lgJ9AZa09iTRGR_g8jZ6fJYZuVfMq8QDZLFIzuARrMEH-2c4nTfpavlF0wMINXIFORR9obqZ6dRVaxMt-41VkYZcKM3T-1EhSA-TN0yReojFD6JveoVkSfRLr9ttu1LuiCAkeV6BIvFqvBkkke1vZyDmv9ctLZ4BygpoJiiuxYuv4ZJtfhnP3Xr0zNW76qAwsHwQEweVoda9wnSIJg3-iHh6j-y5_fXy7f8XbufV4pbgis2gkMt5XiFKKNQla10OXdi18WggKGUWGAtc_PE1DojFZJzaKxU2OqJfNrwpXhZAhnggWLRpR_Nit4AexQs1pLtc0TYtPRIn_SqUKA7t2O9V1FTKG46sXWafJZZ6VCtSGbj1-xjl9OuQPp76S4odcGA3OAuXtKo_lMSM3N4u02ijdLGYEbVGI-J3zsrgpyLueNaMZ2ry6D3Vu5gTa2UIy_jR8HG2HqZCd3lbAG6UqeKsdI5k4LY6z4T__8YbS2qw71vVXMpBqHwcsoLddqPzvteP18N88B8Ts2VAm4KVsQjOVNgIwrvG604TvZ4nlhvsA09A2uOKYmEUpj_pl2IyueXP1wJcszgSPKLr8-AOTC_i6C50lEbd83BB3-mzBF6_nD1JFgqvZXl7ASTBzhamlyYfa92C0gD6dZSea4EB1OwO-FBEnn1vG872FCdXaDRCwmmvpkB9iehSQjdiFYDiaGX9psErN5j0oWruGXwRCqnblcB0URUAJOcFwuBUjpgTHotJ1IsTKRPkKuI0PVZfUqP6oVRD5E-jVV4d0Hi5cOv6tzMZkN3kbeZS4__MW7qEJZV-tMF1QIu8=w1460-h973-s-no?authuser=0);
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45%;
    &::before {
        top: 0;
        left: 0;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgb(0 0 0 / 30%);
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .section-head {
        // margin-bottom: 15px;
        h4 {
            position: relative;
            color: #fff;
            font-family: "Alex Brush", cursive;
            font-weight: 400;
            font-size: 60px;
            margin-bottom: 0;
        }
    }
    .date {
        position: relative;
        display: flex;
        color: #fff;
        font-weight: bold;
        > div {
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: "Nunito Sans", sans-serif;
        }
        h4 {
            color: #fff;
            font-size: 60px;
            font-weight: bold;
        }
        p {
            font-size: 15px;
        }
    }
}
.events {
    display: flex;
    justify-content: center;
    // align-items: center;
    padding: 7em 0;
    height: 100vh;
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
        margin-top: 100px;
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
.invitation-section {
    background: url(https://lh3.googleusercontent.com/pw/AIL4fc-_kyeX6QAPpS_LeugSIU9XQoNA4AWofYt-nuHGJU17MLshYnoL60HvMruY5WcwY2gxGObvM8yeTs1n15ahZq2fSOQ0ylyHukUCfmFHGt904m7l82nPr2mIF9S5tev1AeYIo1TTAOtPMnx66jof4CmmvGwsjWvls-9iE-id-tuoKmiQxdtojgacJIFKwGXVr1WjUKcelx0uwtUxWSm5opuOy1E5LiiX8zPA1ejXskP6OWSlNv79gh8dzrK9zs_6A3i543KWf2Ux_jSS5KsBwmj8WptE5m_lCrAXg_2-6_F-sApo1LBUY8UMscVe_mTfmaWDWb1FC2VI77gVfaqYS-UjF3tGnrgWn99XIKAFCmAuWkr7QDukXOaLY0JdXiPDMhnH3Yhui3cY3Z_DeS2TeLv8NA-wbV8IhwROnVLUhUPR0Y5n8dbg6nwIZ4EvjzeADVxaBdEAshx5rwC-q_Ko7h2T3hcchJ7CgiUMJgx1pbUhi3w7yrM6PmC-uDZlkGOWZrShhxLmjaQtu4unwYAjGFbkkx4I0RC45VYe7m0ACf-i7GZttK-kwTVtjdW7HwTuGd4lpkb-Ff8M_sxKD2Bg8zPmC5PSPdV5lJ6px3HWPsifreMFxXOYjope_GuDHoVUxn5P-HuhWzB9CTFbYVmchqhNwqZHluJ4X7mUbaQADbR8E5ss0MTG57l-6vdwHXJrVt1ni3DtLD5KcUbakbHPZwEhRow0eR6ZHTg5_M2n4ndX7A5zGsD7bjzX2NSDpddHTJTGHLSGT-o3uT60UIOhwX9yH4B2kbYJlRLWzhKAHnIsdEb4LxicidBk8Qic0jDhXoyC2ukYZKLPEhKFYCbu0C1I9gTfmATvKPTdq7U8fwlHpa0hIg2QYf0URedpZuBvyWHxwZOguL-gB7IAu4qwEaCLeRJyNkmKA2cDXIz4HZ_3P03y7jeFnx09DgStz0MIjYp-2EV6dhFmMAfuOPhtMdWaB6K05XkCoK0hQhcw209lmYN2q1YPd5xUDJ_yzL3WZOg=w1920-h960-s-no?authuser=0)
        center center/cover no-repeat local;
    display: flex;
    justify-content: center;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        background: rgba(206, 205, 175, 0.3);
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
    .invitation-box {
        background: url(/images/date-bg.png) center center/cover no-repeat local;
        background-size: 100% 100%;
        max-width: 886px;
        padding: 120px 100px;
        text-align: center;
        margin: 100px auto;
        position: relative;
        height: 525px;
        display: flex;
        align-items: center;
        justify-content: center;
        &::before {
            content: "";
            width: calc(92% - 100px);
            height: calc(87% - 100px);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: 4px double rgba(146, 91, 72, 0.7019607843137254);
        }
        h2 {
            font-family: "Great Vibes", cursive;
            font-size: 50px;
            color: #925b48;
        }
        span {
            font-size: 16px;
            font-weight: 300;
            color: #000;
        }
        h3 {
            font-size: 32px;
            font-weight: 600;
            margin: 0.83em 0 1em;
            color: #925b48;
        }
        p {
            font-size: 15px;
            color: #797979;
            margin-bottom: 2em;
        }
        a {
            background-color: #925b48;
            color: #fff;
            padding: 13px 25px 13px 25px;
            font-weight: 500;
            border: 0;
            border-radius: 0;
            text-transform: uppercase;
            display: inline-block;
            position: relative;
            text-decoration: none;
            text-align: center;
            cursor: pointer;
        }
    }
}
.couple-story {
    background: #e9e9e9;
    padding: 7em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    position: relative;
    .container::before {
        content: "";
        position: absolute;
        border: 1px solid #ccc;
        height: 60%;
        left: 50%;
        top: 20%;
    }
    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 4.9em;
        h2 {
            margin-bottom: 10px;
            color: #000;
            margin-top: 10px;
            font-weight: 400;
            margin: 0 0 20px 0;
            font-size: 50px;
            font-family: "Playball", cursive;
        }
        p {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 1rem;
            text-rendering: optimizeLegibility;
            margin: 0 0 10px;
            font-family: "Quicksand", sans-serif;
            color: #767878;
        }
    }
    .timeline {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-bottom: 200px;
        .timeline-badge {
            img {
                width: 220px;
                height: 220px;
                border-radius: 50%;
                box-shadow: 0 0 10px rgb(0 0 0 / 15%);
            }
        }
        .timeline-panel {
            position: absolute;
            top: -30px;
            left: 40px;
            width: 400px;
            background: white;
            box-shadow: 0 0 10px rgb(0 0 0 / 15%);
            border: 1px solid #ccc;
            padding: 30px;
            border-radius: 4px;
            &::after {
                content: "";
                border-top: 14px solid transparent;
                border-left: 0 solid #ffffff;
                border-right: 14px solid #ffffff;
                border-bottom: 14px solid transparent;
                position: absolute;
                right: -14px;
                left: auto;
                border-left-width: 14px;
                border-right-width: 0;
                top: 91px;
            }
            .timeline-title {
                margin-top: 0;
                font-size: 24px;
                color: #f23b43;
                font-weight: 400;
                margin: 0 0 20px 0;
            }
            .date {
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #000;
                font-family: "Quicksand", sans-serif;
            }
            .timeline-heading {
                margin-bottom: 20px;
            }
            .timeline-body {
                font-size: inherit;
                line-height: 1.6;
                text-rendering: optimizeLegibility;
                margin: 0 0 10px;
                font-family: "Quicksand", sans-serif;
                color: #767878;
            }
        }
        .right {
            left: unset;
            right: 0;
            &::after {
                left: -14px;
                right: unset;
                border-top: 14px solid transparent;
                border-left: 0 solid #ffffff;
                border-right: 14px solid #ffffff;
                border-bottom: 14px solid transparent;
            }
        }
    }
}
.countdown {
    background: url(https://lh3.googleusercontent.com/pw/AIL4fc8lW3LL_dDI4UnB-iCZiuyWUnR7F_EOyB4P6hIDh9LuBOR1DpW6OtSac7PXscrUdkkClsZu6SptoinkoLG9CEYUWDa-vbCVCpaGW78SsWX8YbioW_Gp6BeR_ELGzhSPOTtMHSHpAs0qfHqqzsB1rb4p0brwpJIn6NxbE-gwJkM5Zl5queWNGyNv7l88Izoo3qBkUhEJysO7Bgohs9qjbUYLYLv8p6hhJsYv31hmfTk922tN8N8lmDIBTEc3r4lRENmAU11Js8alG6XUVVAOdiCstI0QBdq85uJj4ZJL4vsxBoyE9YjREzFEpZA1IdAV2KY-BTWZbFgyM6XQ3KLAn6GfPpgv02eHDaLv25NUIhWCqDdPJICtn7TNJiGgx79BIjObI7gNEntYUjr60AQImbid5GJN7Rl5Yc-OJRmqT1loK3MmJLsnRGHW6UjM73kxi0WPPNSPcUBPCvVkMnc1iDBEr_88gU0-C7oSPIA97lWrpR7MCnqKYDdB26DZRM2b7BSxuYwOQCJnTD4TbUi_NvKv0FGSD3NVsZuYchI_kQdX57PN-sXm7P-4TDab_QMjsjU6mLmv3fYC8GLfUe0pCwESI2fGWS8qLKwhz7_2Uin6a4RzDM2Ic-Bc8s4iM9F8b2lcvB6rA9H2WQ_SxsiVZtwiJOZzx7SyykEuecpVf7QCRvNcHfUIZGcLMjvoJ0J9df2mB8UKVotER68mjFTw8Ba2StaZMTyaD1e-F7Q7FcrFxVtRYniXA_eo73TSBR4E_QnCFlFxV9-lUuoevcnLlUelPmYxa3v2eQR1yo_pZDFsUjnTEkQGI1VPm-zt51iaDJWjTivmGAej3A1yXVYGDBtTd2qkgCmVyqBy__2tOg-ynhAXBh4blCfTgOdojhEm19bGipzS-h_iahH1R6szPptF6y3IXNCF_Xr8efbYYLl0SQ4C7MunQ55CNhmaIWpaQK_gEzz-tcwvLiITquzkfi9QMwoR5pcVwpKpkEjylOQncOnhlRkjcbqsfAJXGnDjsx8=w1460-h973-s-no?authuser=0);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-position: center center;
    width: 100%;
    padding: 7em 0;
    display: flex;
    justify-content: center;
    .overlay {
        z-index: 0;
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h2 {
        color: #ffffff;
        font-size: 50px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: 400;
        margin: 0 0 20px 0;
        line-height: 1.4 !important;
        font-family: "Playball", cursive;
        position: relative;
        text-align: center;
    }
    p {
        color: #ffffff;
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 1rem;
        text-rendering: optimizeLegibility;
        margin: 0 0 10px;
        font-family: "Quicksand", sans-serif;
        position: relative;
    }
    .video-btn {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid rgb(175 115 114);
        background: rgba(200, 157, 156, 0.3);
        position: relative;
        img {
            width: 20px;
        }
    }
}
.gallery {
    padding: 7em 0;
    display: flex;
    justify-content: center;
    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
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
            font-size: 18px;
            line-height: 1.5;
            color: #767878;
            margin-bottom: 1rem;
        }
        .btn-danger {
            color: #ffffff;
            border: 2px solid #f44336;
            font-family: "Open Sans", sans-serif;
            font-size: 16px;
            font-weight: 400;
            padding: 8px 20px;
            text-transform: uppercase;
            border-radius: 0;
            background: #f23b43 !important;
            cursor: pointer;
            text-decoration: none;
            white-space: nowrap;
        }
    }
    .grid {
        position: relative;
        height: 1975.03px;
        .grid-item {
            position: absolute;
            width: 33.333333%;
            border: 10px solid rgba(0, 0, 0, 0);
            img {
                max-width: 100%;
            }
        }
    }
}
.wishes {
    background: url(https://lh3.googleusercontent.com/pw/AIL4fc9m_cR4C5MNkbPDSPXb_wS869ATA6cnHs07TwkQ7IfvjCphTii_fn2I5eLNsIVtm_fvqhj0ou6Mp1s_OicTqRYm_2srOpfJotto-snL5Wdwmz5nmtt2wtUeuTLmU6nUtEsCbc4t8JhdA0VSKZsylpS-dy6-3ZISf-vPwKXR060OyYH2WEUetfg-PaZ7-me45hhl-31BlIb0BDjp3aUg5o_GShUVrBgSEWw4C5ggsHSzMclyuEz09JgITbpV88lM2-ZoDhjFqzrwY5lH6J9xhBSvggewC_kHL51q35PGTyKNqLP8FZ4EZVzxFEpV9IOtc1eE7ZUacTrHneI15RZd0dgM1oD5eQEvwUOzzlSC59RQ03_0oAuzgsASfJxUTZLuVkdxZ7ACaV-k4qpCAVHewqVPBH4Ub098e7TV8IowiHrZm75H2nrqUgFyE2wwoX3zPgaQ5XXkLHfKRrnL4uqIuj08V6vchLlijXhZIppiOjXEUJ7Q6qfDR9k0ooCqzKQoK90F9XowdXEL4Zh27UYzqTfn2Kt5DysMRDeQhDmI4BlN5lFXLqc9iuKhW0LqhK73ZUxLt66KtdNuVKmUs_qu-MY6OAoY7F9KRTfnQCa8zv5NT_NCLMYuRVMYmFwRngpHReNR8Nb8xghbUHss1Bx1sXdHlVHF_Ff2pAX2F_SjXy0409L8WAbnh01WKK0yEC5jg0g671GvWhc3x8UStjtBBA31d2QAufxt5eNQAe_fGIDGwJXoAaOIZhhzRbahuBjCf11CoSuuD6IqyvttxKaz1ojNSjPDLe-dKwkLP6LgZJWqwy5TIIMOINiYvEdxtaSwJkJiTitpdVcB239_8rPaSPnDWgiGbeGPyYHRkUkKS2fCvFozynOzRfHfL-bdmth6EQCvBSuwml6K1ApnX5K01uGxhMzSW4iKi27mPzGzafEv1Sr2fkTUQtn_2nqmdSmx5UNTpa_I_52Y967sWh6vwhpP_pJMIK4Kz4YhaWnNd6my8qtVa1YFv1SBTVfsMqolzqs=w649-h973-s-no?authuser=0);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    background-position: center center;
    width: 100%;
    height: 100vh;
    padding: 7em 0;
    display: flex;
    justify-content: center;
    .overlay {
        z-index: 0;
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
    }
    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 300;
        font-size: 40px;
        font-family: "Playball", cursive;
        margin-bottom: 3em;
    }
    h2 {
        color: #fff;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    p {
        font-size: 18px;
        line-height: 1.5;
        color: #fff;
        font-family: "Quicksand", sans-serif;
    }
    .wish-form {
        position: relative;
        z-index: 300;
    }
    .invitation_heading {
        font-weight: 400;
        color: #fff;
        margin: 10px 0;
        font-size: 18px;
        font-family: "Quicksand", sans-serif;
    }
    input {
        margin: 17px 0;
        border: 1px solid #dddddd;
        border-radius: 0;
        height: 50px;
        font-size: 18px;
        font-weight: 300;
        width: 100%;
        padding: 0px 16px;
        outline: none;
    }
    textarea {
        padding: 16px;
        outline: none;
    }
    .btn {
        background: #f23b43 !important;
        margin-top: 10px;
        padding: 14px 43px;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
    }
    .wish-box {
        overflow-y: auto;
        height: 390px;
        background-color: rgb(255 255 255 / 70%);
        margin: 0.5rem 0;
        border: 5px solid #f23b43;
        color: #333;
        position: relative;
        .wish-box-item {
            padding: 10px;
            color: #333;
            strong {
                font-weight: 700;
            }
            p {
                color: #333;
                margin: 0.5rem 0;
            }
        }
        .bg {
            background-color: #fff0f1;
        }
    }
}
.site-footer {
    background: url(https://lh3.googleusercontent.com/pw/AIL4fc-9iiEbzg2I0DGO6IHH0pSpxHSp05_ZJ6YDvLNVpiC2vahDkfdeWAdNlCvn1ik4X9qV34a-x4oCggr1tBTW47R0sfDTroFm2vgs3Nm5MA5gbwnEhqQ1az_nDWSQF4Jx3RxwUYIHUrgo5jvgBvigDAQ-bNPxHcEPTFpoUKkqIvDxkijx1_4edg-zdkJI-xhvHysxerpdyF4YtQ9AKQNCBMydKrK-S_RA6IObk7gL1IfXjfseqsn2gSrhFDOrN4opPoGx7xHZ41Bq4fz3cfVqEbTSvYujIdXbw1iozLZJmETsF3xhPJ23UPZdF_J6y7bY0HTFcQa2wXEOtbAqF7mYZZn7yAYCcyuadzVQSX6KtQ4gBjl_pDKCAAAI8Onhc7LDvyBEEZ5q2eXSB8U3fLfXRwBQtiJREv4Uhdq6SBC0wU1-uZ5O0yWscOZD94rGjafs59m27Vg5tafYGNvpMswaQ7WOmhJHbt6FVjOcqo1VaFIz5VPalWg5hDo0XGCxgCGv0zDFcWfl4kPswjKkqCSUjqs5jWGHTmopG9zBMBVgCwor2BaVB2sfh_UgJeJVebN-5l0-1bJ0dqVULg_Sbvekg7BV8_TIDL3Yo6umru-BVV_P5JIt6s-YOXvSB_WoDyFu8puS4Kz3qGCBzu_S7HRTuqHNZ8kZmIZAVV4IjsnWEC0p4uLSULWpTqexxawb5XVxRwSF6NNEaWE8gF9rBK_sr71HG4M-vIFZrWtYkuc44msCvqIF0eUo9VumhfL0NOjvu0m3X0yx84fKNP2YmYGU-jPATvYBCR_U2ox4W_HKuNgcG18vdSMTZ98YB_c9Uky_KiMuIbIeWZgDaRAqmJhBBFHuWTUT8P-k7G9FB6uuOUu0iLa-U9vactvMaKTHBeeNEhzYaeOrD3UNx3_NkHGKPyF940IyIyCRUO1S4iq6MgLKbPmrFibWRD-OSPpp7nbT8HmDgaEy20qztMPwfOiCZvq6XmrDXOHku-C70l3s7SioE6t4VqK2mCNVhmQVawSOBdQ=w649-h973-s-no?authuser=0)
        center center/cover no-repeat local;
    text-align: center;
    height: 100vh;
    min-height: 900px;
    position: relative;
    &::before {
        content: "";
        background: rgba(14, 14, 14, 0.5);
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
    .inner {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .couple-pic {
        background: url(/images/footer-love.png) center center/cover no-repeat
            local;
        width: 200px;
        height: 164px;
        margin: 0 auto;
        position: relative;
    }
    .inner-bottom {
        position: relative;
        h2 {
            font-family: "Great Vibes", cursive;
            font-size: 72px;
            color: #fff;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        span {
            font-size: 30px;
            color: #fff;
            padding: 0.3em 0 0.3em;
        }
    }
}
.bii-player {
    position: fixed;
    z-index: 500;
    bottom: 70px;
    left: 50px;
    width: 40px;
    height: 40px;
    .playerIcon {
        cursor: pointer;
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #df4758;
        padding-top: 7px;
        padding-left: 9px;
        position: absolute;
        z-index: 2;
        &::after {
            background-color: rgba(242, 59, 67, 0.3);
            width: 120%;
            height: 120%;
            left: -10%;
            top: -10%;
            content: "";
            position: absolute;
            border-radius: 50%;
            animation: biilogo-pulse 1s infinite;
        }
    }
}
@keyframes biilogo-pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

@media (max-width: 768px) {
    .display-tc {
        top: 70%;
        h1 {
            font-size: 50px;
        }
        .banner-text_names {
            font-size: 30px !important;
            white-space: nowrap;
        }
    }
    .seperator {
        height: 30px;
        bottom: 0;
        img {
            height: 100%;
        }
    }
    .swiper-pagination {
        margin-bottom: 20px;
        .swiper-pagination-bullet {
            height: 10px;
            width: 10px;
        }
        .swiper-pagination-bullet-active-prev {
            background: #fff !important;
        }
        .swiper-pagination-bullet-active {
            background: #ec2328;
        }
        .swiper-pagination-bullet-active-next {
            position: relative;
            background: #fff !important;
        }
    }
    .bii-player {
        left: 20px;
        bottom: 30px;
    }
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    .logo {
        h1 {
            font-size: 25px !important;
        }
        img {
            height: 25px !important;
            width: 25px !important;
        }
    }
    .couple {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        padding-top: 4em;
        padding-bottom: 2em;
        .couple-heading {
            text-align: center;
            margin-bottom: 1.9em;
        }
        .couple-wrap {
            width: 90%;
            flex-direction: column;
            align-items: center;
            padding-right: 15px;
            padding-left: 15px;
            .groom-wrap {
                width: 100%;
                margin-bottom: 40px;
                .groom {
                    max-width: 100%;
                    max-height: 100%;
                    height: unset;
                    margin: unset !important;
                }
                img {
                    max-width: 100%;
                    max-height: 100%;
                    height: unset;
                }
                .desc-groom {
                    p {
                        width: unset;
                    }
                    h3 {
                        font-size: 29px !important;
                    }
                }
            }
        }
        .heart {
            display: none;
        }
    }
    .section-accessibilities {
        .container {
            flex-direction: column;
        }
    }
    .events {
        padding: 5em 0 3em 0;
        height: auto;
        .container {
            width: 100%;
            p {
                text-align: center;
            }
            .event-dates {
                flex-direction: column;
                align-items: center;
                gap: 0;
                margin-top: 35px !important;
                .event-stack {
                    width: 100%;
                    margin-bottom: 20px;
                    > div {
                        flex-direction: column;
                        gap: 20px !important;
                        .image-wrap {
                            width: 100%;
                            img {
                                width: 100%;
                                border-radius: 8px;
                            }
                        }
                        .event-title {
                            align-items: center;
                            color: black;
                        }
                    }
                }
            }
        }
    }
    .couple-story {
        padding-bottom: 0px;
        .container {
            &::before {
                border: none;
            }
            width: 100%;
            .heading {
                p {
                    text-align: center;
                }
            }
            .timeline {
                gap: 20px;
                margin-bottom: 70px;
                .timeline-badge {
                    position: unset;
                }
                .timeline-panel {
                    position: relative;
                    top: unset;
                    left: unset;
                    width: 100%;
                    &::after {
                        right: 48%;
                        top: -27px;
                        border-bottom: 14px solid #ffffff;
                        border-left: 14px solid transparent;
                        border-top: 14px solid transparent;
                        border-right: 14px solid transparent;
                    }
                }
                .right::after {
                    left: unset;
                }
            }
        }
    }
    .gallery {
        padding-bottom: 3em;
        .grid {
            display: flex;
            flex-direction: column;
            height: unset;
            .grid-item {
                position: unset !important;
                width: 100%;
            }
        }
    }
    .wishes {
        height: unset;
        .heading {
            p {
                text-align: center;
            }
        }
        .content {
            flex-direction: column;
            .wish-form {
                width: 100% !important;
            }
            .wish-box {
                width: 100% !important;
            }
        }
    }
    .the-countdown {
        .section-head {
            h4 {
                font-size: 37px;
            }
        }
        .date {
            flex-wrap: wrap;
            justify-content: center;
            h4 {
                font-size: 36px;
            }
        }
    }
    .modal-content {
        transform: translateY(22%);
        margin: unset !important;
        padding: unset !important;
    }
    .donate-modal-content {
        margin-bottom: 100px !important;
    }
    .donate-modal-body {
        padding: unset !important;
    }
    .donate-box {
        flex-direction: column;
        .donate-card {
            width: calc(100% - 40px) !important;
        }
    }
    .playerIcon {
        cursor: unset !important;
    }
}
@media (max-width: 369px) {
    .couple .couple-heading h2 {
        font-size: 45px;
    }
    .gallery .heading h2 {
        font-size: 45px;
    }
}

@media (max-width: 356px) {
    .couple .couple-wrap .desc-groom h3 {
        font-size: 30px;
    }
    .section-head {
        h4 {
            font-size: 34px !important;
        }
    }
    .donate-modal-header {
        span {
            font-size: 25px;
        }
    }
}

@media (max-width: 334px) {
    .couple .couple-heading h2 {
        font-size: 41px;
    }
    .gallery .heading h2 {
        font-size: 41px;
    }
    .couple-story .heading h2 {
        font-size: 41px;
    }
    .section-head {
        h4 {
            font-size: 30px !important;
        }
    }
    .date {
        flex-wrap: wrap;
        justify-content: center;
        h4 {
            font-size: 34px !important;
        }
    }
}
</style>