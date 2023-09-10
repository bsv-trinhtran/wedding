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
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_VVpWBENgtDJbMEr-FZJYstMNi6p6rS9TolaEeB5Im85n7LrVS1Po76bEH7SG6h-D_h5c0NsZ7DO1n5B5arIcRoe65i4vkycDoerck8u6Lk5PoEbwYLcuTangwDF46OxEVRyzuHGpzmDRA5EE8MpXaGqpOzYEUfPQnUoPDkFiSIeehck2_JA1IkMWfCMGYDmD8yWCyJsm4hvl1FAP__aG7X3Tvi7O1iEEfvMXKRr9aJXEX7bnLSqdY9xmQXCqjItoL_68ihHCeUXmosMrwcAOabcUS5qjN-tyhqRbg42rDlISIW1a2QRgidYII3DJs4fU0_hz-sIwFpVgB7CmhePd4QFaJ6qUo5iHvEVD0ow2UkA67n-KxnjTrmCJ4ZQwBU4zd4r70ZKR6TInpRxIrf3myglSE5cc_DoxcBYZQRQcUxb9ZGOwEjBYwWoUDXWghfx4AJ001dJCw0O_Osr-O5GA1zqb7dqjpgaA_yKbYwwkFhCsGyMiZ7NyqJ0_B23G7KQz19ieZV5y7Inbg8uNpEaB4sIpDClQrMgPgJnlEkVDPMP0koW8N_ThCz9I05XCimY71fMLmrJ1dzbR6UlpOgG3wDR484-ARfZCbHpKJdH3rFrmxP_Iyx9QPE2wW9fVIS2c_nYULUf89NW3EwpCSoUc95VeWQwWCQ_24tbL4Axqx2tazeXWa52ciPCjKsyZMGfbtseBsvY42Y_DdlMgjzSTE8tNec9FyWrUEvsWEaN6Z4kn3a7tlLENv10YAHe9yB9w1nPj-40u6R1DzpbPV8GmIuikzKzQ5-ntXXXZkRFNQn5GSiJvWAQ9j5KvnwcHgz224_trfG9hKlnfn1nRTHxtpkPLuUF_6leT85-6C_esQuIcSEFwr3C6sAM0G5w5ka2tQEizeRkRxtseYPY6Bt92f5JdeOyPIDFof4yQ8xX6VJbqcRLSnxXi7-o7QANorRtY-qug_ePLffjq0wUceXSTN0W-S9rGNCESpCnqZlDj5cvjKRAPtTu4Q94OiIhy3D6g=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_SkKW94TO4PWTC5r94qFhps10IAgTORL7iXeS3z8MxvxoNuANops8pRyMlLgiKk7WLHtCyvPTMDH2R0gb2QQds4ZcWEmPFUk-20gqelN6qhpbGOOhfSakj2AK1SJNctz1yjeQ50FF4J8bIWQRK8wDoCfk_c9mRnyIXXE6oaQh57kVQilCzLaK08Oz_JOYwsTTPI8AO4Juwq1oqmSHFev1OJK-xor7oxCC_yRW_yiuOGl_kYtZoYSXnTrtuxfSNWoFPlihXD-LYGxV8pbgSLs5WVJBlnM6S8RtBq4_aOh2GsyoTe-vb8qxTPwSt_BhWpA3-qZ1zZsxrp2OiDw9TbKk_UVBvp4o_efva58yGS58agQCD-VToZbumps1d4lXGXRjhDQrt8i67FcWqifCDrvJudNauI-rSTcDrOk0gKhK_onAUNzBlfWM4v-KkoYRiSbuaODrl1ZryONNEA4Ylr0UgT4-5A_tvkaI51FX02RKIEm4lqpvOZAmFglEhTCbZYwOTqtHy8RU144yMIj-bYXgHm_2tPYwNTnUIged9O-a9iZIKCt9j_Maii-pMoofs9kEAzYMex7t_E6_l3kqdZYvJqC5wYZxhaqQfVSWiyCaEkSdJtxh_IzcQM_phcrCRoAeWTSQyRss22baR4EiWBP4val2t6x3lHRcGykkLd7p5qv9Hc1jNDMVhMlQJtxUlk16Su1DUKPN07-PR2PTCSqgu4uUZkOx5Jh9aXtirrHaqyCyQLJgiFBE8313pAAWqX0lwRUNfiMoh-jOXMQ010RZm08JKnpLUvaYQ5id-V4UzZm8KRDvqfmVsqcFl19IkkG7eMEgdwD0u-nfaegk9GpDUKsWbte28yZSLoR0iPtQaQO1eAFZue6i54WA6YPYx6M1qff9uhB1Uow1b6m5M9jD3cqD7jpvqc2bNCME6yDw9Y6wu9pUCTMCImiIlr3vgLvOMZ3UGMtOAfJV5W1mBHxj5mCQgvMQ517q63nozaD-B3iwhQ3Q4WSK03jwng09wJa4=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc8ed-m9hoBtlGhcdgzL7f9bGVhLyJzItCXMvDdKgxzNwJeRqVMi7wZztTn7kZMoqONv-aNUQqnNGWSGHPD1IEp8TaoeWeBOCm4P3h4FTrazd3PYwMIKT7seUquAUwtAfoE45dt0pxJD42x5Hth61JOswFZEY6zVg3dhDii2mINGP9Lze072G0C9sdE6owSdUK-WiYcWSrOVo-XEgRFZU4cwTiZojf3DDBKvxBx0g__DSPpCsS9kQN60zF7RyBSCvDEDTZVNYK_lubZ3F3hfCqYvKnaExkmTbshy7y0LJ_qE9UErx3PH8PZxuhKtD8C91nfjttZ1Xk0T-3Z5mFJeIp0iZ4nLgL-yVP93X_ouRN_py5jieG7YE6w1i0rGsoRSjY8W-S9eSpTveMyrcsexL_gYpldaXhbzdOVgSGa7XiXlYIywBUj7u5HOJaRa915i69BcVEDSqQXYncvSpTjKrLFswQ_31U6ZipH5wPg7MovhUV-k-aNRcdE9OzEmrOtMh-VxyypkesGm1lgdtwYDd19eUIbaMl0B5rwjqVBfJg6k5AQelHeBDjnMLylnjcspZ4HDN05cM-vJiYeYliuPGOkDiJasDpeD5ONEceeBwDaRfxCbJUpcaTdnLcRjn8LtEpbKdEu70LO9OKGS-dZvIOz7Uxiwf-P-vaYn71uWuVoZp94p66CfxSZ8s8A7sb_7PJ1k7djOoAGZ8j9QaTX8mwAuo5mGS1b0imJyPC6-xPRe5ky5JkiwTnjfmRVcpJTHQNOlCtJOqcltYsqrllBV2bZG54g_sQbf7wR9p2OtTTduQYlVPo23kHiMqTDKqIMHTxG3sraJYlXKTX6sNQe_6AHS6qwqHXveH_47XVKQ0jpzbxjmTuETqIbRG_h08VqVfN6ubf8IxCeVdwINT3UURJgGk9WkmuvLTlG1Yz7n36PEamof_O7NqtBxKW7wZfdchULdxgkyyJT88DTMHzS2YK_chaL--Mw9qb4uwUMZ7OtEdSamxLyI_kg7tUJFdHO4dYM=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc9UXi0Mtb2IuHrrDmNOvKbUiwT1MdI6DangaF04XuirF-UWTIl4vIUgF4ytlRQ2OSh-ibt955eFkJehu0X1iJgeQhxKCL0eg6WbvShC9zgQFu8W5syCcqZ05nh3UlRwF-knHG_KbU0nKQvllJnBWQT6DM42jSj6ZX95D4mTthNjIXWzLz54BuNBjfBaia6ayzK8KsZjJngRAv5n8VtabXA2_KsJ8IUaoLq-Mp6KaP-eg7paDAmGVQc-lZmtKLVUeOSVnS97ZuSr4OrBaRI1MAwfUhVhWN0YBr5rFx3fX16QcZTuh4l8tGV5SfvK6VrJkgrKQKXRD21N5AqGY4WvJLL_NoLrAHYRFgiPvCP4OI05JPlAciyaj1dRS8Du1_Dvk4IeGnD1Wg2DEfCdQn6qBtwwfkFIN4LrhbmBgqLm2IQ_P6OU28YcU1U416d51ro80TfjmrSREzoBcJ_7Pp-KOpxToJUTVHSec14UPnlp3u5M6FGbDYyIIKaTU6S1QT_Kavp21YrmgHhm-TKd9cYuG1vsm9u3O9VuWaVzGoUtesSu1buZ-4d0D5cNdkMrUOoKQkKa5qKy9NyuaDwGcU-FOWQsZXMGdqaA5VBCp6JqWaHnN0Vs7W2fv1he-2kv4UWYm85WoVkB7iF-F-co-QkviPxu1LmAL4yfYeBn2zVpDzp1-_i9NcKUxkcliA8DMUGfCdFqfYjNB41hYbnsxYYUH7vvOA58K1jChWg6T83GJZLgYNezfptLF5jOTUVi-xvTcV0ThgXikVkgVL5gIMu2LW4TKDBWOV7wMj8lObqr3bauwtgzFXuUvfhSkIxmXohZhfHwyJZvpfSWIGO2fcvohiSUCnLOkYi_9fl-lphrmIPVu0dyhQ958eXKNBjsI67sTISloz1-t2DxJk8rUhDjQPHMZSWaAgukA9XJXNBQBab2FeMXe2jOxm3W-4w340290oylDIwvsGPhXTOeB2spM4QNeppRC8o2gh9u-YxJ40VtBtR91N59lB4UyrVBNhlPivA=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_SvxqLAK0s_SLgKFPHikGlJhGakJap3ntdsVbVpHiwNo2pW1d0M123-VE8iSlKMVKLyVuzJlmqPbTlvXzZggVZ0dOqzRXV1nAKzciQ9zZskfv26nHG32rpb1V8e7i_acpL9uMyHzjjeBzt5k-JyQPvg5jTPAB0N0yDDx4JQQl4ab3ZcrKoHIj2ZkJJ4EEoiVbCWBAnZ6uf3kgP_D6CObK3VcZXqM_QH0umvrNNIVb3iTKWM0DJiHiNGUSvhhLaG3Xfgi5jfNjZABwswXDhxcAXngiuI455wl0bYM5rmYCP4YPIiH0cvJgRkVgGTORe8NxcCYhqgbC03cBXH8C9_IM8zZzR-VDH_UzGFLpWITeIQG-DHPnUMqUcphhnSE8jr-LJ4lNBu0dUBN9PsuYKh4qxjUKnz_9fiMVGAiUya0shiv0LIGBiXgB8MV0ZPNiZP-uq7vO7xSNhskCVZgzi4-45gLYT41GoY4AHGNHlXYkQsBav787QjuJbJ6c9B9ckoNflYpTNE_6gC9HtrK0KdmrrAd7EDm8BE2B8YMnYaO0_tt8nC-CYPRIw3sLTM1vvn75a4LDrjPVc6GG4X05QtyjxOyJUn5rQLLb4eYdA9d_Abzpg3sKZSJLSKlq7aTk5bw9ajuSVIUm-ozcbgoe5bFki-kcyPGhwmaIo-Q5RE3l9FeDkBFM6X2V5yIgjqExqqNEPkciH5UsMQkCDuyWiSHdgAT1RCKCR8RhoB4iVIPmr5fMpJsD1bZHVwH25EaQkXsiyEtJ1kn6OPFmwNE2ifz6vL-bE8gr1wj9c-Z5yzL_ygXvVJjKwVM7Ren1aVoLjZoMOPKmcC9yelkX2aEClOhuU6FmjymRevQd7_4NnDeB5KrB-_Aj5Cr-QXfaVNO8y3Jj0iV6md0e7hXatpfx-GT6ISZXCzuWiU2BEK8oJopfxsJzNZQEQeAeeUuT07n7YxyQZCairoyvkLsJ8IEOQOo0vC7T7FCev5c8d8ibK14CvxMxHvzUCITxqkpBCdQEqisg=w649-h973-s-no?authuser=0)
                                no-repeat;
                            background-size: cover;
                            background-position: 90% 35%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc-8sEGDzLi11-pdd_7m79QS8-Bf-9ryZyK72UAcFONa9i2sWZ0ew1aCw9UXAXmX8YY1KyB5w9y2gwtF-Qcnh0LX3N0CXrSi0wtLgixuZd8H0DrkDyIEViTHvYTxopz4aLA85rmdvk3vFvETZTVWz2ccoktTadlQyeoMl9PBdx4fdRPH3y9ereZ0CUc-_Iyc8izSg_9a99m34bI13UcwSSYzXxovQQ41KPpR8YsOxSd3iOo1p_tHny2nuqKE94ZsGVCCEM1aCZafQKYdWiMrns1mCliSX0G7zMIUK9sBBxO-6b1nQrUzlk_jWGFOGvDVm1HeQNyWkXqBs9Wpn-VhSm-y0WVgdyLJGyT6Ue6d4lIqxhgUoeZCnBAm9kc87uWV02ye4HnfoujwhJjY00JgLh0GZyKONHSYNSGzKKs4Vcf-u8DF8VIIlnoCE6FMelVaPBFA1oJ7dqsImFyiFQ_ScWfvlHKL-seaJG-ECsWnu1T0QEUjzEeZbBWOgrjiMWJTjKVOODviikM-rWdKjlPRcATL8waUNQfuXIQMd8IJMIu4tgXlM8kWYJAVNbhlZA1o6vfB-MqKiJJpnD8o1dpkKdRUsMA8IaELo2A7q0hJokE0k-SG3y7C_OVqHYWqd3WN-THbAEL1yma9X45G4tgT44b1PZ0sUy9L4VCi-WBDkEmqM3mDAHzSYO39Ac1TI9m-AFZCuDC6zLmkSYw3yLSTNq7RYHlhTGJKfIUm0MfnJ6zg-3MxJCwNt53Urmr6sjGTWvXHsI6faOmlPjlQhbOCvUBIzMuN_vsOn0pcJRTCfas0YjsTuSv0jEOHQQbk1Gs2ULtfmEX7gMxQ-lg_hYSLCkB3h6hRZPqbik-K9zGeavcShcxVJJZDWknRuuttVhpEWomxmjWK-qC38GzFZsYuVNashz2BsV4sxf3z5CQfTzPHEBLnFsS2LwDFtJiJ5FjJKv7DAC0ERiY0cFAaH79kBpqA2eCMJUrsU7PKiYO2K0j1RWXkLDlnKRsjqSxjpRiLnYI=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc-3NaBZ1EK4bgyqydKHQTtwZfL35N5LpG0_rcAwT4ky0vbsd0ZunZ-cligLrEP4M1kgcLDn26fUtqL3PpI1Oo6H6BAxdLfCb40pxgm_-3CddSBh9vU0lnBcKlO4JhoQ4qWk2WDphxgUqrukzcNHlvcbrW-6NJIozkwu8weKSSd7pI-m7NuPLYj7saZbxqwE4xxfq8jTEzdcdvczo5Z5GlJ4NxM11xdxI_EldPQy2JyEIIg35POHFS6b_uEo74tE-wG_W2cTSAdjJQk8f5hJ0QnOrP1Pk0DgYP1IAFt8PKGOS9B28csRV5h8NhSajN9_Esaxnbh4DKWnCELjy5EJR18s5wkJcRiicA5C1oYlaacOupGF3epLBfr2OBQKQ-beYK3N8GH_xpP_HXXD_m4yJrbbJDgA0uhoQWedAkGtwCPFVrWruEvd93mfmns580j3Wxit6pgEAOM9RTwVl38gQ5vsSxbPC0SRgjbV7y4QhgQfgD0NGpBQP3uViyTvUU6nHlKWRWOYNJnOubQHWSx3f-myt2_Ogwm4IAEK8ap94fDSO1HB1mwgqJ1tb7p42nNtpCnpQ8wngGtbEu83POQWB4HwD0GKT3bFqg5QULoXC05FIj2dYKG0US449YjKuhXokD36Zhy-SHY4u0QUxe_4jm4QsAXuDsoEGNHutGhTIWpKWHk7OEBvfGwgremrKozCbYN61p0fcQqGYpW6G4fByNYcMg0ALwRl-nYaLeLdfyfjmagrgDISrt7wW5IqIEvbiO0sPCL7yHvmTwcC2wbMTI4FpV4SJgUBovyW_--eEbu9Wn6u8wgywVj7uj6IOob_Bco5gDDF0rUeyhl3PhbIy2nYZTwWRS5V7di1CkIjUugkoxFkY_lTus9Xb_yc7a-z1JxECog79WxTHo4ih79lBIG96iEvTiVifFN0sFiMdLJUiYjdEhSYDPhW5JnC5_EvxSjGBw5DokX0J7YL7KoQbrLnPajarZx1Sc9Uo8t2UJpzPf8HO5RMhPFxgeJ3xF5XDJ8=w649-h973-s-no?authuser=0)
                                no-repeat;
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
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc8ve1I6g6MkGPDKO2IkJLg5sHM10ZX3VtChM5k6bXkpO_GGy23uNZJPmrw09evtxioSbGRxhfF94ZhrgrQZ3SNmiK8Wv02IApXpwVTrOnOxZ_958GFiljyRQEvMkJhnEG6HUln-4oNY5VkJrslWbIrxYY4Aj8T4ffqQjdG9XMXaWTUPlY161db8J3FxH2P9dnkYdQ3zo1KqVvgUuEuYNLK0OYmUiNhlt_OlyIBcrThc6KmEUS8y3zz1bYOTjY-3tkVAfJf3wldJiYjyHmDU_FLGFhhkLkezcfpbp6MgzrFS9rx1K9_Ilbvvp-u5-UOUMighDpb3rlBmkvrWzD6H8VTUFLsD_-vrtXpd1jrMkiMABlqL-5BQNiAb7eAvW29oe6hUcqNyIe2j1HaOmVAZ9ck8bcVRd8IPwbZB_bNRMfx_HGS4VkfBkhgBeqjPrhNPJ_CSTlTl5eCZJD2-9zt_LOaVKVoJCQyk0hcYD5oMCuRcytbyrwa-lLD3VQOyaWKUGzGvt9Odj3cDEhyGi61xREAxagRbPPqrdfCDKkkBf6Ne-8FCXF2XCiZObYgurrNJslY-TiddQHcTe6vRlBHBc8iW5IVldas0VfCxyfX9uk3MVWITH3z93uGFqsUVttuonjzEID7hX6LCfMLeEE0W9C8IQOr1-hrr54KiFowFLJgebfd8yFUF3STbrGSBA_Sb0-0UElb41PlhrKvH_8g_4eGdadJty8qOQVsyeBhvRiZHYfifdezajlJZWSmvpaEuj_HC94VZNzu0ztEoB0-xdYNFHrG1b7-_tH_DoPfuISZ8rRsJv6F89FV0OOZgkkiw1xvotP-xw7Mnz5j9HEj8XvyRrGBLu7ZgIWDARQMHaTBFNN7xKQbR-V1h9KUGM9LqvPCxJ3tVK3iBQvF2xs3Ynko0zKPDoKw2FJDYy7wnkMioLmfqQ-doSY65NCBTvvKIL0Ho8ZbGVUgxMNqlyPRRQE8RJKGhka72ZzTY8Xbg0-M_wX8G6LZouS4LilkEeacUKNA=w649-h973-s-no?authuser=0)
                                no-repeat;
                            background-size: cover;
                            background-position: 50% 25%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc-TqRSASFJSSTI0xdsVtYUtXjnkegeBOzDuhRy3qeH1GjKoBfcXvjWCZA0k3uglBqYictB-JiHEVqpEYyDTfzNNFzf5ZR5mm4bphZ9Kj6h4Em_HKjd-gbnmJXYJTvtH89-4zQkfEbZ8gaYTde8ISu2E3UTDyhg0XU-7zsFV8VFltzGipGFSHhpktdmCEswGJAzKGHeo34G-yCZdEvNOpJTTug66uddfkuAzkfxI6GWy6QnDbaIAUb3TzxsiyX5a0mcmXIoyLZsp9w2heGKbm-5zIvOcPy7fpRvEM9PkLvuk3-QOWj7z6_4R25_AGtqEgiYw_J8y5UzIxkEjBUWTclrv5etuB_dTjCPjgMTCRGxtJ9mBLyjVdYmWS0VXa9bB3ZQPyN3qzIWYeyudAO3LrOyq8B8KSRhoZBtaFhR8xvpMK3tG8bpD470SSBZ4IvlHT-f64dCD_rehYMn1Tk6ZLO_BU8MNUoh7Bww2-mI00iWitjzILxEOIbtJeVIhwkH7rL1MXW2xZipVpuP1WkC3R35aDkvUiXVYEyjtInfxBGcFCPJN7BtVajrs0WJ7whHBlEs6jJvL6E_62bMVRlH_myUqqbkvFLUq0Afvgj0ShSfDGbcKfZ3uZcTUGM1MfFmv7s00gcn8QdsKZb5JqEKAtwe_wjZDxptF3CHASDPdrm8Q-1lttO_23HMnhWk7A07cIiyhzJroH9ErX7uS7gexLTEHyZT8urG5wFPnoRt7GJIxAUFLc17PiWSI2Ro0YwwC_DICRYgT83PWVQaDaQ0NEDd4SzOkAiZsJfhKQaBRSA_jIpOhdWNsIwouSamUIuiA2QJlzNxkaNNxixDEMJpsye6jyzG6w95JZMk7cl-q-I6VvDO1lEzPRDavmh-8KOpGvOVu6OAaFJmVUpcfmU4rl7E8toOlPKx6FH1KndS1D5pTtPwOdGy0htFbaQkUn_hPfZeBtTkFFUQKW-_TsYyEl3Y4TPHMUVWarpXK0PBZX2tgjmhbcXOb5bFP0-XwfwX0zkw=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc9kWmrMFEh0yNibrzicFGAbgS_4bnhadeGaO1Bz3_-1rNpXhDyiYq5sSbwn5IsPE69uF2MJOB03ebOKUC_3swbJgKSBH95mghX3thEb9t9LE8OQ69zAhPz2JtYly-BwnubM5OHbmeAq-18NWld7E3Bbb2dvq7znacFUGoAhdjNyO_lnmF8bX9EMdwiwfKIo1FO5RXCBTThZR2afY45J-QTxDaKkxxG7RcshW-Vbmnbl_PQGAgeF-fSQQjHt0mx4XhtlNwKrpup_na_Rl0TPjJV_Ee8kP_r9G9iZD36YknQoer1kY30vcBeu3onbg3faI1Pvvl1n0xdG_bfnZiQwXE2pv8ZPkHljBMNA1bGHOS39Ug3rl89uQrxgu2G2sYRLR8FiTeMvgRz03_0BsyqdLToP-sxvjcHHnIfmJDWOMJwaEqL69UYnroopTCK3S4qa37BlhXt6IWfHflDstW7Rn-6ogRko_yLyST5NXPuFiuD7dAADo_j9rBEMT0HhiRiFv5we3uXr4zXjkFyDYdKFdg3wszg3z8qxmHVd9SkYHi-NgpRi_LJHvTqwhq0gghwSZeIv2IMNBbGirYSNoDFNCpaUosi_ScYF7r-MRtCdRIVxbl9_x9QObbxQjYkg_gZ4DtIZc7Ai3M1xbH7CgcK6dXe3YGxoMhlVbBlymoX8u-GePD3k-wgSj7IabUu8CkSTpIDoKQa3tUkU-JiGH1fygSoVAc_I6GWdKhTUNVhuvsfRsnkU4Jz1baFsJ-9XUzhHAcVKA1_S2j5rLYXTm_EwjiWScCAdS-OTCq7D0wDcFbPC76ZONvUZ3oRYDMqC8lVB0-OUcQLcHIt3qNFsGZt5-ZQoFmsQudGQJtOBnQtPM4PANmiFaiFyfyx32HL-147Fz7B4LeAc1lHgIvvOexSZamOZJjEJMKkHZnnmwPlvrSU5v68ks7Pc-2oCa8K5NpIzJ5qw1pA7s0gaPufeYCGoSCkWu-xTyPqbT2ZIjGvNQPlsmZcUo0W-XcA_wlU3Zd8fiL0=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_nxt6r6PKagc6tHpOnly2p_eayNIaIMQ4V3xotZu_RLQ9AG6iQAbcN8zI7NY_vZJEwEiIvXSM-MG9tmBKgqOMte5JqXxin4J8WiHJUkBZ38xuM1JjGNiCHFnBT9Mq81Uz9ZXh-qnHHF4CNY9W5izqlNNg_AbdgEEXDaNDlTHUMWWaRtlk0YE6bWTuX0G35ROySzbS_un_VxhECFws0AiPxnPzTROuEz8__YK_4YDefQo2EA9efy2RzfmJBFdptyDqrXXeSw35Cb29857SSv_hMIfKcICahQwYz_hl-oQM_rRAKC_EojUjcHZalXJsX3PL-qqVItLkYmMe8T2Nrdiz1cGXBIVgczVqGKNIsj8EpBE1w18gr5SkQaIB75tegvOCGnRV3NG8ElKwvGeL-Jim77L1eEcEvJV24hxhNgK9Qui6x_wShRpgAmGXp1TMPsggWR_ehY0mRQ4Eoi-gxUxhhDtqieIy8doZ_NJhyN8_wC6l_hSIHLjOkdrWxE9rhuMAgNBN6a4TWOrkqZbO067QQWMwcfd7rqBUmivOfX7QVPU6gd6CC5oMhgzcpDB3oHA7b-wRKv22tfPIB3fTmsdX7g27_X68JHwn6PHdmIc3RxHSMtyOkpNRSVLC2vgfy3binXb6J2yBXMcywmMevw7d--JUxLsnVRDlfMxYroCJyK_m0teeTxpL_ylP2EwaVI2moYaGqOb9v5djOtdzOhWu5rgv9ZpGiGS3nE6OBi_0exkIJ6jPDYzZ-ftMElu6hy6cv60vBYiA3oVYL5_RxtpAn7rAirWmJKeF1Acuviw0uNonNd6ZUL00ge6ipbgunPumKzipy9HcIMBPWwZfsXrEQOO6_FINu6bRG-sJg6oOuM80Y105o_uOH7edU5ZnFazKsSrPr4L7PXyBwB_DMn5Nr67ogPMMZWGUfVovGzZQ3aIdMq8xV_-C74j-CIyzsdImhVuB-BC2RJBIBBzGyfXQXLx6nn1txWyEaS2U9iec0BufHzbGdduCKzlnTul6apwE=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc8EvyOgpOoRc3rhOfk6bWk95CxF0kgW6RleEbdRyJXP8wQuJdlLYFrX9eFYz0hBekbcMfZmda69f1lbVnoSnZWGB3UWSpYCO56vc4H0GRGOJoaGb70uwDcPfrpl80UOjFq3UqNX77jXmE9iOajd9Yo52cBbVwyGRz1C1ulI4K8_NmyHeA80qmKk6qBmppzSBiivo4zdDyIhEMpV33RH8MtrIKcCRRAToqkLKFF2bk_ULFiMd55RWrsnM71jTPIvyPX8r2dFIOkm7r4V4sDH9BsI9l9XgygywJ56CW9LBNRA63oQ3MgjaO8oZSKQZBERWeOfpA1fxPy2Y5UXiRwvLDccLAB-L2cXth7krspsQKm3-MS8dppuhKjafbW1SFnbiAeR0fDeuK-Q4TGtlXFv6IMC5wBmGz9BEPqM0F2p0WJwoNWtXseRpwoh0G70V0Vrpo3ixmNl-xH7CmQyZ-FE-yjK2rGWk740r9qf8M2oiDD1re8JumRIhR5nGWGhHsV7kUQv52uw3Nzi2Q7TtrbDJhYkA8FfISpVljUzIEufQMH9ToFaLcnWh4lTvWvsjCZ3oby9yMvhCOr_Hs9eYMLpVrhjSAw8qvkSujl3HoVKNLqF2gfhIvmF6-uzZpJsb8br4cDhZHh9y47f8FArSn_sqO5iOozrL62yeawlv-v0JC8hlCTsYAcBRZVDffBJPfMCAa1owmOC8cAd2iQ0kKALmHMoEFeCY7y6xsnGpfzdmvtF6KXV89Hf5g_2xiSsiReEHOl24RTe-R9vpypsoUx_BGN4J0T2Jx-mt7St2YDP7ks96ySfWi5UaHYvdfLLtkDLdjFHv__6n9zDFXDwwW7-0Fm9JFT0KcPGLBX7AvtodY5VgLXv4p0rIiDJVA_oqsDWms_yyF7W0Mbj2fa84jRl9RJOma9pjjZEkck_GqRqYlvrSpdMsIQmH6guZxHlwLQTFDhAqBHxjJ0BZzQHaDESmQ6P_jxTkykx9XnHl96SFinAeV-JmIzAaM1E_26oxZ17ZpA=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_jjIzczu_7FwVPDPWmi6RuM9XndBFLypXVAaNrd4ZEh1nr01ZLLxu2Z4lJ2aIRZGciEWaPGxu3d3CP7FdH9ePRI0BCbYLQIiKLZBMjTcpyiI5pmnQfW68IJGXbiVEmJIyzWk4Lhe9akXhXRaA7oM1KHIFWx1UvvnBZBmeD7fII-biZpE301wC8nf64Egk7d2cYVrdAxIaI6P-98t89C01TPKDZD-tHk4gK6UQNOyxIefLPIFWOnbQY6UgFrNnDLfYlzuoJOGW_pUVcQ7mOJIcVeG27xtN8uDGp2J5GANYVOcOJXgBkMJRXXwI9Ji1M9ena_TIj5Dcu_fcV1PB1eRe3Ur5Y7CjvFshwWgn0-ZAXBE-n-7WQchHSy16rpH-z-w4iivwON7EHPQeIZMNXRddeS9jt3OmtSUUNsq4pVOkx087yKWUZyeq_RjeQulfKM9vMu_CcuTnL3dJqxENiJD8dFGr4TEN2C4G5ua7jy9jTp-eh0PGuC4UPOI4i4v7ahBZAvH2aKBAaN2iP9_hH17fJPrfE8L8uhfaKphyS246PdrlZPqMAj4Wd6AAkZSDeSIZU22sfi-V-BQWoI_WJ5lonRhVWfJYL__GB453WP7O14p0MJ4s8J2un7A2xiftE99cWlJpHBwkiT9eTklSayz9pfpb1ToXelfPi9FBRTb2bV65Sc3i9TM3oFfmkBS6WaXNC_KMzLUNggwPHLlew4yoKPK6RzW417DdXnOHmLkaJs2z_1CYX0xsL_0XMz_7SNEU4uAqCWeGJvjL_ZSRhidlsTtt0tke9ZqdiABtnEPZaQXt6iOsh8JPlgvGJSIbe2Vn0euQJusVIAb3EDtytZJyM_PlGT5OSilpLNYJccvsWBLO3WH8bX1gOJywN9c6Xvcw7FM7Z9bT5vlnexvhdxAeTpB5Hlllowy7HXxAr2HCOdCU62nSktIfSSnJApsWj6sB26vziwY2OQw-omvybtif4Y59XrklSKkYMq1TGGyPlOpMhLEYCRD36q0-WeG-828Q=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc96Cx9cJoOt7REtMCiFPhHultWRDU9nPtWOrVOmTxPRgVhLswPN9J6mlxMWUYxjvzTfG8KBMiszKVSWY0SvI3SZGiKc9bOawqXlNwjxjQ_pweEeOWo-jClecsFaOhSC1Sk0lHZESP1o3uAwcenxZIygKoOL2a_KvBZdvc8YlEPJF6KpY2zsPRpmtkSxWf4uuij4Qt03oG8mwZpM0YkgZ5XZna_Q9lastUlp1whXc0WI84SR6M3gUT_f92aTYUXOVRZ5fkqExKSZYucvtsodL5Ba77jFCatnS6_uGqBOuwLWIdX2JvPwxvFA2_UdvwWZ8JS2dr2hEgqtsnkKPnb3cgFQRkXfYxH2Yj7mXM1-91mDagGDQlud-whR05My6i51OnGnjeGV-igmQ0bqxqFZN1NZE7OsaoQuh79GJ-M63QykXxKKoLU0xzmKE1vy9yxytqWPIQyAGLbCsizAB2dC71zgaQ6kqWTagG-CZPA0lZGDsaufv9JIldlI7WkHEqVe83m_oJU416yLSvcelKxfnm3_2rCrZTIN0AH-Arc_VJ8WU54Dcs30Xrra-6WkrAvytRZsMMRGufTmpf2-1-FKPBYe4GuwY9CZqPcKY5PriwJb2L6QCBwB7j88gd1RPz1yjXR7mOclV3xKJ6U3ybDQhLWinVQ-B6YlFR-W0YzyepNLMbPmH0SW_Rg_d8MF4X_xdFAtHog96mHihU8KiVxX22E6Za3-R0P-ta6cUdtTtUgi3Zx0cESLpy77nU8URHYuvsalSErEZhmlzlfIeOSuVIdusWq9dEnf3htcKUA-sZ-XTp_bKoDvn-wXjtvOFymu7mZxrIC2Ifcf0k6ETEzPZ2Z82ZHk7aQzIGr4C22Re6eYFvLbirEt-a8XCLtnlJU8W6q6vseWH4HFKqBqJRcklNqn3ICEPqoMN9_cJPMAX316h2oVpSHqObIQJhs769rhjYKyyzJDnH3r8Q80NY-ED0WWGh9jzZmWL6oRi4J8Wn7sVZYNcLnJouQvWA020Je5vJo=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc8lW3LL_dDI4UnB-iCZiuyWUnR7F_EOyB4P6hIDh9LuBOR1DpW6OtSac7PXscrUdkkClsZu6SptoinkoLG9CEYUWDa-vbCVCpaGW78SsWX8YbioW_Gp6BeR_ELGzhSPOTtMHSHpAs0qfHqqzsB1rb4p0brwpJIn6NxbE-gwJkM5Zl5queWNGyNv7l88Izoo3qBkUhEJysO7Bgohs9qjbUYLYLv8p6hhJsYv31hmfTk922tN8N8lmDIBTEc3r4lRENmAU11Js8alG6XUVVAOdiCstI0QBdq85uJj4ZJL4vsxBoyE9YjREzFEpZA1IdAV2KY-BTWZbFgyM6XQ3KLAn6GfPpgv02eHDaLv25NUIhWCqDdPJICtn7TNJiGgx79BIjObI7gNEntYUjr60AQImbid5GJN7Rl5Yc-OJRmqT1loK3MmJLsnRGHW6UjM73kxi0WPPNSPcUBPCvVkMnc1iDBEr_88gU0-C7oSPIA97lWrpR7MCnqKYDdB26DZRM2b7BSxuYwOQCJnTD4TbUi_NvKv0FGSD3NVsZuYchI_kQdX57PN-sXm7P-4TDab_QMjsjU6mLmv3fYC8GLfUe0pCwESI2fGWS8qLKwhz7_2Uin6a4RzDM2Ic-Bc8s4iM9F8b2lcvB6rA9H2WQ_SxsiVZtwiJOZzx7SyykEuecpVf7QCRvNcHfUIZGcLMjvoJ0J9df2mB8UKVotER68mjFTw8Ba2StaZMTyaD1e-F7Q7FcrFxVtRYniXA_eo73TSBR4E_QnCFlFxV9-lUuoevcnLlUelPmYxa3v2eQR1yo_pZDFsUjnTEkQGI1VPm-zt51iaDJWjTivmGAej3A1yXVYGDBtTd2qkgCmVyqBy__2tOg-ynhAXBh4blCfTgOdojhEm19bGipzS-h_iahH1R6szPptF6y3IXNCF_Xr8efbYYLl0SQ4C7MunQ55CNhmaIWpaQK_gEzz-tcwvLiITquzkfi9QMwoR5pcVwpKpkEjylOQncOnhlRkjcbqsfAJXGnDjsx8=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc96JEeK4dMptHIkQmF-VqZzkavEG2sf5gHr0dPjw36MuX2m9AouaqHG8L1PbvaTH31wU43C4LVuVuarTYmY1DbsZNKbaPSle3gLQAw781Z3QXbwLAQbtlUlguXzmaBOPCgCUQq4NV8N1iIXvM9PzY1uJ0SYFItqvZdsr0s_oIJ5OpOL5N5YOxLAoLGF66NbrJ6ZATdpOfIOM66pns5QTUo7Mc5fNOzqIoYH4bFA4EConMFjFFopu-EyZpebhe15uiKhmDp_lDOc2J3JDuYPnUV_7mpJqK9Zadz22XN7-QAlRQTpBuQTJnEa86KMJU4EtHRGaHjy-RGoegWRSp3jVs2PnPDIuyiQcSHVK9xFdemo2npiMFfcLM4WOYIsodM1Z7nDdUZDSaJ0kRLPxMG5XyLZJU4GXxQO4qewlJmcx8mXhzG3y9RFjkUbfqTWyetPa15DxSTKpFWFnqN7ctd6LxofLoC3q5Yoyo736W234GrqgZNuTbWL4XlS4CgBKLV2fp2X_wIW5SN0ek9yUHANtn4Ml1S-Dl6zYSWOR4syGUd_ch94v1Gx1cRb36oBHAlkjT-vDi7jLtXgs5hZXxG-ZxxDcOhAwvcrrokHGsoUxrjPFMbNFlRxtgLOR4vsHK8viZZOiqoKpODS60EKizOPZCvsLwZoTGXkMwuWvlBvnW7YvweY-39F1vYM4rkFhLzBjEOv0lJHwI4gBDBNwO2pNOs2_lG--ij8MO_fPO2SmbODpmVlKK3KQNZr5MRKTrbKyOJOJ-xLPyY6W1N3dIKQP9n0gfsHTNtVSQSlB80sb8BKbQYOe2HJzcQ-jLSY5sYJMIe1y9JJkeTQ9vEPFoPh30i74g6gd2owcUI9ODl2X4fJip416DDmNyO9n1z2vYA3HW-CYyHyy5ANlHLMfe5nHdJ0-naywpuoDkzcL0wY3PsfWymvORKMssHrn3IP5s1Rq6weNNAIPkONfX9a3pyOBCYxtRxlfVBeS2YrjwfQCdkGUU5uTG_LsmE3Wm_ucqxceNU=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc9KJmaYazq-ZHnC3i0h6O6lBfWZB4-1r8P47luE7BqCKrdkk2d2prKjnkC8pcO8oTvluYNejdpEnb5jCeg2EVLyoSCIFFJXsmkmt0WleVuobSvD4ec9_EJqwvX1Mp8oo4XffgRrHEOwBU7xOSRMGv3_qjpgj1nQ9r1i7qfeCEY53AE8YCH1BCBWT5mt6q1u5HrbZ6M1XsvDMrzcBBXfr3gBUjZjYwSnuBwQytt-1vBJLOYhuF7ZbT-2POfU7E7Xmk8DFID_UfF9rV7RVdGpn8ZWV9NddBvrYvWJro4-_RR0ofJtDOd1guODtDM7tpcfnAmVJF_O7VYhu113LfTMBpFGQ10ygsE60927ZnvsyM4tIXJFdI8H-C2G8t6zgRy2eaxdZphDAAsH0-x08nZeQHryv39pLKIJVd_VCfqF-ZAJjG8VjqbYbO7Zz9gcRMnxGENPZLnssjxdfKmRY7N3-3eBBYheU9cV5WMVTd4y2YzMlGk5SR2kjowA45HOAOX4zxwYGxFo0Qi8XG6UWvDFSmHj1shYv_kW2_Cy_ziLO75cyi3IVjfXgbIKYmti8p514eA6sFS_0VQXOxu1MPILZ0nq1JDdQMkjNRh2lFEnBjf8LmUD82mcbN3131uubgEUyvdx3_iPPTeSV6fwd9cvUNeE2e46BXN2J6esLXd9FNku2FnV5dtRdQryF90pA3E-_4JkiGMiwZc_bzXYwqsCQegiMOCN9ifBxTx9JNam8LkCpPU6_6KQMjn66gBw8fyNzlw6w4wMU8CKVJYiluBEbhq-gCBaxfUyvKVoJZ0C7OxuedtlVPuastWASyx3YU6Qh-0BoAr1S9QYGHLn2_GozJgtidafUm4yWD5qAWjnK7ire1j6P-CSfYzVagplmOJ2cgb0WVdVbXPNEgPjMVoBICv0BbA_jtQUjD9OMfugGTt5YlylndLT0wDBHoulP_wOFNBB4OfnlfciDoDggtcs5lfLdV5v9zFSgl9MKJ_0htpluVie4G5trmpLQfatGjWZfvc=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 18 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc93Za3MdZ_ZaR1I-DcWd9ofpyB8V4FztGO5uKYtfV_Wd8vWKS03irWk7yY_K4OOR9i9ymon5rjw3qNO1QQN_Cq2gliS7C2Lh4_VEgz8kGv5DqNXRJ8QUv22jNze8ePhRa60J_De66fkAtlmIkB0fQKuZmW3tQukb8TsrUws1eEIWlaOspziLW_pBMtP9aG4lFA7KGFvy8SXpSYl55oXYJ_Un3snO--psn-iRAT_DyLYPZwrmM4ohxe7ElUBlzXU4tjtxl8WfJC0p19EU1FKT2xgVUgKdoY5UckfSFPaB5nlzdNLAXIisLDNeYOSdEW3rrPQxB9a7dAoPjFzABWtuJHsYaM9UYwaEWDm82mGl3PHnm4iiMyo-bM92zEdjRxiAjYY54YQMRSTVRBiq4XbnIRVkBzAbP3DxId-3E9g-nuG_3pHPn7jAUzc2Fv-7UiawuNSupEVc0OdOPTBGjsxXdBhTPB30_O9q3nikwSDaR79ZyuejTEBuIbuqNjX38LLxua67CbxNpT5PmofPinjwaxX0QurTnvyNMs21K6SL4yJo8x5KdqfVnAi2QYlAIWvICuRlnpCeSXknpRqBzF_Nj9NGonFPuTkGCqahqoa41hvLhWyKZ1SisSn5vww-d-Gup9x0BYf2oo4ZOzfBoF3s3LeWrejl6MNNOxzJyp6rAg9_tw1UafNfuiSoHJl4YdwPUx3edjYHpv2zwrbdgDtJpISAD9oRyxgCFOr5huwDMSzCEbTmQALVtoZW7IK4tlCkQpvHIWMRSY1jX-KTW2KbBTOUJmKOnM6j2BeyXed7eYFhbpv3aRLxPZmJavFyyaF77wEF3fBVkI0TSgS1gnE3nWyHgBwUmooKRUuZpdFv_ctX-RgaXRrPxJlHgU8Pof8jf7Q3FVrR6PaOmHsnIJAaQc-sKUgXgDs-jk2hEP8Za4u5cmJ_EycFWe-VhWhTDh1eNsbaDusIiuV9745I4uxTVj2DYIzIIPbYaJMqHvR9CpGXHckhMzc6Ym6DEWIIw0Ncs0=w649-h973-s-no?authuser=0)
                                no-repeat;
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
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc-1X-nOz5sxJ6EEVu6gDyD7o-coEulD3tNFJ-yl71AZMSwk8Hjm4OPRPcOPYEd_c3_GOuSPlZKjQUqeZ1OKBoX2NcB3Hk_XVAttEfHQ8Db9vQjLaYrqzJJqE-VgbcEZ-bPMg2rVD4e9mZutkD2JgJwNiiTiBZb-PWalDzOslRw0DxRzeqLa5xTJFpsInMfE9wWB5L7UCrHdh5-tQkAOLQEzCtsbNZqLD7D3PpXouxws0PqUzju62cQesMrl5yJguI8V5XO8-0u0WisDUZAKSXHrDU9UlFcDLhXNmWsE4QiToS3yRaPE9p0yY9kH9rNZwAm2Iimy8_r5jTWzodOqRY50x3rtCxGCwjQ4Gf_wYJIJVSDJagtjxsEmkTHro99Mig5LbYGu611zq577WpurS-VhHgFNejt76KkfQ6SI94XrenNyaop6syUFg5ev1BScYWmmzqSVAvVM6VmxU0EIHW7yYg8dHpdLFGYYpQV1A4SZv8x1pTwFuHEv6R6Yq4Sn0ugZqzfQmTjfGBoOJY8VJZ5F7tLsw7kVqKNxfuc0Un0osDCKjjeA5qBA8IkORZ0aIz-RpK6Py_G_F4mZXFUJznpcRCV63iEyx_wkNSfZWOYJqGjb_w2-rvV-uJ4_O_aKEoUqelJH8wZvlaV3LYOv3zNW8IFctTndmBhVGGV33wu9BFZbopi4cELkbIaunincYB1ui__i_QnZsvMnNAyyKsiz0yaJoEWdEY16Hixl0vEZfkuHPi3f3jbrFR9cK2GgoWLgmpw77RyYkkLNCTzfSpcT9xukCHhB21bSFBuasNngn21aXQuYyK8oekJ16wjLHIbyVddW0f4beGbPI7w75OVAV_zHEP1kDCAjUYhqBDXJs8qMIiPDqh0bzAtlNv-z7Jc4-0Rc_gOhvNwSGpDtKIaFtXsaaGTAuLM0a17rZdUbM6VVyMLCPfNlYmMJSv6eCiwAKLzyqmlfvsMl7oe43LbhNq6Qs87X6lCLHzypXuC4fe7GcVB_2h5k_FsHSH-fe3w=w649-h973-s-no?authuser=0)
                                no-repeat;
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
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc8CQfbB0UlaS7OdgiWCQtuKTICWHxCgSFaS-sYZpRD5hErxpE0PTmNzl8IJizy_bpbPNdYGsDufx5xiK1II9zo9-zv5xtrmL9oP4TPazl14rue3wvzXNoptj0AkmZbk9OtIXbtqkA2Z3oL3g3ASM9s84EMcpN9uDlvzvyf4slAHXQYQna2LoSyBJebocNsn3iuHOu5qO8ZgZVt-mVCGyBm4ooyMW4xYTFzvtuTz2Tc44uAvlBbncDNznyJDmawvPDb5OOlW6ePXrSjqdpFuETFdl4a7NvPD1S0HNBWXgUvtZP6tVkmVHhBKRCuTpvtkNZz27JisxZJ9KnM4TxlAGm2wwUCqQdblc2zynEzYFkMWBVHPg9oT5PH0aVEgly9vigIsJRig--GOhNK9fL6cW82MQPR-EcmRHtluxibRIPSFV_REl3I6YvII13RUKqXvoZ_bwP7T2oArYC9BZcPVVHLKAaX3PA_5NwWIL-KZKJlXqibrPAdzoPZLYObTFDz80vo5_RBYcqpu5upZSXxqxl3cCklhs0YJTAGA86OsoLTc8tpiaW9sasIMTXzMumwIUahShyMeP0hppKBxr7f6Wxzy0Pd0WtzrD7fGjwyJF2aeCl67NJSv4_5_75OxUKMkT7e4zbFZOcPy35SRs8CuD_lBHOS2EKRLyXXB-0AErA29q5ph0RXDUhQxqhYxj8s5Dv63wcqJSxpo1jAri98uldWtBcId7eQKLcy7B5PyaaD9ygRFb6ItxKeU6fmTOU4d5Q8rPoX-V7ZnXjmNGm4wS9VjEbqWq_4cxWReC4o02Cj7tgYjskgoY-QS2z-00Szrx9WrkceBnKJURmaN_5rEaNOanR-yenci2q2YiL4gKL_yoB00Asqas2CpBLY84W6-QrA6tKqoy_q8to58leCVAzIFuZXBCKulhvIOTXVGR3OZesE6lB7CYvZHstTd-mFovY4MeffQUh9FyOXVuU1XoyqDBSkD0Ly6Dmn92zwYZRxKn4t4HxoHkBjvSxg2_iAuCpY=w649-h973-s-no?authuser=0)
                                no-repeat;
                            background-size: cover;
                            background-position: 90% 35%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc8ol6DC8T8ZlWVCJXqu3Wl_SVT8Xvgz84Ad9lTq_G1WfuqtRvW7Yy2Fh4YJWElgscWkMWuQp4KkYGMSw6WRcVoF1UrzC-4dIxVPCcMQc7_-P7qxcwqWkjgYMQC4Kv3FlC8oGkuo_XFXKlRlJYxMSQPs1xIqEkDQfUNxzHqIekRmw-PUQ2Ph_woCGklgptpA0M7NoDle5prPSHvffI758SS8gpQm6x6IBahXPafp5Pr76ruiu_lIwbbmbgORv3UPaXfQ_I2IicUR7X2rGF9X_RU8QXNnti9QSYKaIKOjE1CJChZGC4DjxigHThpvoRo9pcKIvrDsNiwXMMY94A5f7ZWiTYcpDwKIOtovKaGHr8l30DS5qwKMC_iemuTeFY7t6_BhocHcMOXag5U5iWZJrhClKx_2-YKhC-gUy5oGzQRvGMaogoT1dKJxR1vFx0Cg-mHIyLND9_GKt8p91vtFbRRixIa_wMcdtGiYPyAowN7fIkdf1ecZvg1Js7m2N-6dEPU8TAtXB6GIvhtBVr9Nvt-UtlVTh-DY63G8sf8pZkQ8_iwV3xdQ0sFyAp61i-oPwFtzkwy_NPBrKf2fXylSzrZRXsRryoB8ggCKn1UrSxuzgSvSSDf_rVhF0yhlXP92NW2ZLnFiIsCfFKg_HdvX3GI0r9AZ_A_EiANdUbIoYp0g-4xUUbz7j4IS2s5wlo5DC7UKBkSStFOgxitDTZdjYTU21jFGGXvwEuQfqqAWVIqbLAqFov0T1o1pnHVTN21M86IyNkSkuzRNU-YpPBzxkNR_nuJl6gJy_NcZphsCYK_FIqGXTuaRdo_w4jeCWbQA0kVy_ocaCWk7adTWVzuKB9f8XXnfbhXjKslKO1X0ajLviEpy7XkJ3tVos_iPmZVxrj4VmrmdNwtCv7oLyUaRCcLN2rj9Np_k20q1IPBmgEQvFfe976AYtL9B63Jd7mJkZee9CXXAZckW66Ae8EA-LjX_hKLfpUQk8mwuoFlKg4KsIAIzpPe-ZpKnzsEPTsMRFlg=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc8TQl2inUtweA-5USTg3Obaer8cekx9QQdDJ1Xw5-2GUWvWG6PtoE3UNX3cNes55SiWSqxvJMjF0puHL1KiL4v28qXJdG7tCkI3v6ys0vNRG7Jrjx486-iKNNbG0QSiKBToBvLrvalKvb5D1ONrVC3ktDqm3MQxu46vtU7DhjMhFO4kE65H8A4GpLSL45TbFdeet956fnY8tHCwuCpEh7LOoAD7FFbF8AWeL3amu4yPsyN0l_geYa2gW_JS1ufAQcIUyuEib-0tr0-rPxkUyHlnqyN2kAek6AAjeDgxXLTPE4M4QxgASTu0Av60tDPwyz8GnnB2QjLZs8q9YfXFQMq_7RI8W1n0dSQaQqzJkBWJL1oKE65K1hSJaDLHMRMZ4vbP48sOVIYMkLJHTc1zoRMv4SvdrmFtrllFi9eU6-HC-QSGeZ2zDxXbIGTVfh_Kw1AzHEzS_SwAAX1kqPcbuDWgbo72KqqsgxqclCXbk3658-j_T5n0-VQcY35wp7E_sUMhIabOpNPrVyJlxrHnYwGVfOi1-fyafEPNsd9QH5vXdsiUQmfLs6UB65GKeYuEH_hZYtNOLxb7kTaHKb-bMn9PD40fkKCechKHcUFGLbHtID_kPNTJgrBB2DR5BkeaQZpJBzWFnbLvqNuaGy1kQGvauxAD8tcMI6W7fe5tfMtnmHnkLZwi2_rDDB6puWdkT8K0_sj1EHPmNcxJfmTFd4ItJaKgbEhKywmbjdYTPrmdTS0BMIzNe9flh1AqGL8F1IjNAz0Z22GLygZh1NAjOaPot2bc9UwV0BixLoaFeC6VXGGg-BJDn_sNNL_GWF8Ak_Db9Us9evI--tY9rM3LUdtNq6vVt7xirAwp1o3nl7GpcZBpG19UHPpkjeASDp8l6TAF9PQQEoN3skT7PgQPZNoeN-0tufD9fwr7Hma9ctWIQfoeo-GBwBT6mk_Y7WxRo4YtdhTlz2nLsUQhZJBtgGsP1-lYsUTWZ09j-p2y4HSR-zqv9P3O4PNj-gcs-AZEB-o=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 23 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_qjGb1pFEXn1M-KqltrHaB42S3uoZ9-ChkVS2lNecU_YuJAZ-bTf-ZDW5nrPdWxpaE5zJ5SyvXiH3ZByYrsvrdwDfDsm9ZMCAm6wrsEosUcqznQwCi9dMxz-UNIrW9sUx8SZ6rmVvmzmrDp1aU-BXBEsP_Pfe5JiOfQ4kp22SR1MuE8BhR02G_vnndRmLQl2iceO8ZtMe-s7d9La2ATuQE3cwY5SxfPnK-g5Dn8PkY551xbvqNbXKf_qju96y7IauOQcmovm2toRIzhZ3oSG6HiECSrgfLl9oPBr039KfM3CdVnGgzCl7SKxyLJkaF5garagZVLQppH3U5AkL_zyeP7FSk6ZZr3eJrkmBoOyR9G3mRfRlI0VysexHu_1zw6xnrhyGDpPzselCKFDibc0ZhHC-rmqTMaNn64kYao8JyWqHxyJSA8X0Tr-5GKnVhwoonX3sdobK9LlB49n7dA6_0k0xJsyhJdWgM6Lwx24WeoT04so52F8xu2USnRs1GxoB1xA21qrVAle5zCwFlSy78X37rXBLhe-SRZfo4YpCzNRC880EKZg2S2FLMmZ2QRrrmwh1u8OvDRriA5fH22iENOdCtRPDbzSFzJR5yO7oTqmshUkiQOoz27cHvtCRwgQfYaxHWg082uaF6U9oEWH_wg0bXtF1OcmhU08nJzrLTA3K5Ser_qffrAVaqoHI1_7x_Dbm_1CvfAxE9eORGW7mcR_gX2iavcOe-TvrYBYXewA3faxUyOZOKedLU3EBsjIx1CpEae9y1uVaFBSOJFqe42TyT4GFSbFiVbXRNRYUfRxAGaSHSDH3SAs0MB2duSUG8UiyDbCFgRI5VCTHFGEF_HERtqTjfu11U9Wl24Yww_Y0Mvv8on1khb2cYTyA-JjLnhV49URRlcOYE_VFR7DYs14RIaU4EMtBl5_ANT7GyLflsWXq8iCh8P9JIWROr1DZ67RonM_FcO3kDunfACrLH7h-YhoJ51HdmT-CxDcxhNUm0UfKSqRYJHqWVj5Kona4=w649-h973-s-no?authuser=0)
                                no-repeat;
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
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc-uYvFT6Sz_QBlJdaLssfEdz-h-xtXTSVY0fxs3jqLWfof5DHAyy3t7SPXcdO2W0DmFTBBTM3PZ0Rv20PIolEf3ueohZtEknvRBOCQ4pWTJpPB7QAE5QtscpjpRvmMIr4ZoDGzzNh9ehK4HLusXeLbC8GmgvTLrwI0blxNMdFktibE2HJeGE2bzuf9FnA1NXL7N8sBOS5NsrdK3H2dmqrTaf9rOqm-pluiT-fiwS8p9qB_n8nlb6SYLfnpPTjFd86lBGhRtabm-sUuC_a_tnlmZbrDcsGEqWFmhxJDIdkDS4JW4I9lvKRo5Ip1JSLapnarAPP2MRm1jGja-4X-EMI-eWGlH-DK__igZ2EWoqEndl6Bz0E9qkvbOwH0l4SyYQZomIoZ-dPwJboHh2GMjzSlzodsa5Ke6hfS7PBjWmF6JWEE6qMjXaHYzLIms3Cr9bsq3DeZzfXTkQTuSLuZ5OU-lQAVjRBhBuUwRnwTJZrC-SNYtHzziqGk3QP5tcSBEVANZww9fwCYtiplbOdKwNuYNrkG7Fm-eUikdJTvrthg0j0whjboQynlMsKU9-WIl2VCjPNQY7rcSmrdWHepbCyJ0zGlYfF8Lf51oQ3pEodqfTu91zA3rJVsrf0BEEhLCVzjmpH2VdhRHxL5o_5wEYxfMtvJBXpqy_IhFi8oSZ3bN_UXSK_AT7ybX5BtUgIZVogbMilijzFOaUKzr4KQTTriHiOd3_Nm82qUhtS9tsjvTWXo7DeOVyXNDknRRrQNwDD6Ui0LnedfoqqgLDkNuqi01-W02EwByRaW3tH2F8w_jwojejthsKx69zOzn7gpyNJ0KvC7RZ5h8o3Rn52famPb08L7AZ6Sm8TjzaIyqhShjohY58E0fdDZDRkPgEC_Luzve9PT2jY2JmLM5SaGV7ODrco3q5N5CIvgXNWdqXBeBLQRGwJY4inzF2bExyPQim8efF8MXKwjzsT0kFTcYGRoh172ncFrNjkMxPJshGWvG6z5Zjzvk2D1bd5eUGRhkEUQ=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 25 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_F5gYcgMjIInTbIwYU81mX8VVSVXsbgHd6BLm14Ej5aBh9z9dtTG1JR0NZWqiXCC25i0ikrvxT6yW5xu7pxl2WsozCLnVk5DAsO4wS7dGa3hFKsnQqld1SDyPgxJwxixgN2wjQlQ6j2iEZmr9zLj4nuNm-kaEJ91VpTMf294bDS0GJ7WBYR94YPwe8wUKCgqJqhDiCqmfdxW_gp9uFnzKjnoorY2GuVubGmHpGszQG7BCd_jV9uMPtJMTSN7qHJGmwGcIAZLxiIU5slDMlUo6fGLuKiJpmxFLvRGjpdq4QwUY_YJeqrEhGSv5_nL7mKCYG4t22_FbESxA0AYnnrRwV6KUAlGQktFsBvvtIta24adUxIt8mHrJ-epaet5NdlPksvqBTVoM9sVG_B7U9xxQPFkIFb0Sn6No3OnGcZshsQPQO3xsYtTQpiP_GVub4zANMvd3AfNbr_5wr7siUYTg05_vou8xvSgC-Q_3Pa7f0KPjU2SWxRYlMAC5TaqwAm4zZeqL4dCh_PRYNK_QrAyfJzv23isxQasZxhKQO0O3VGpAJaRQ7ge4raDKPYE-O6CjP8oM7eVttUpuU4bdaeGlHgTRLHIxXSmcFqGASLlbM0C0IKXntXAOIBxnVFSyZw1eQDN95HWef5GCUeCG1wBsE25DAwDdgLdLrNgpFirYIqAezMOSZORqtOJu6A_wB_dHIHYvHpN1BWMVwFMr1eIg8JqytkKWNUFOMAOjJL1n85DKEK0WvCe8t8ECBL3VihkZMKsDjJkdOep5TDj5EpK9PLS4-IaaMv49ZdcEzp9rSfEIH3cw5JdWHc5XMMU0X9yfav2_BIineLIhU0dqEUFNpCq6fXZC5VMmAygMXy_QXBFXQUulpa70z_nXBhP5Yv58E8RR3kYnPqA6irPTOoRCakV3_r3fvelXWGJAO5WHOBriveQJHNtQxDyZOLhM_BcPEStVBlRpydZeb9S1q0vPzmWhCWzba_Dsrw8y_APFNMeQNzoPyIqlqzLV98AGIiaE=w649-h973-s-no?authuser=0)
                                no-repeat;
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
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc8PiIFO9H005slRiZ5cghoP3HmM5FfhL95Z-ehOhcpXx8Zx2QMAM7CCVjKnZvmecdLTB01uxEmSR7RtJs9rLVNmRHzdQ7GBvymNmZzeQf5WuHn0P02jSf248GabeNWzyo8lgGuuxakUkauMsZVCJZ7BryANkFmtqHbjcXc9NBcy89je_uzck4Izck84o2g_MQ_3DZB62t3GcMASa8N8RupohosLAc0dsMpdDc1JTuc30ZWYOnCM_ffQjVSsWN7AfggPCDZFDehydBURaD3xjHgcVNe4bglE4p5uYDzu5R7-jacZMPEb7XOKN1G4nTkTuCSLpfjCwM6Up0MHaBNuB6-wiiKFIvOAWYVnfQnzcqB14NPSXgLl6nngpU2-4DPJmAOAT8n2wUCXz8V5P_7QVAGQnpn4DuAK-J9cci8T8nA7v0cQs-DDaRK9f1SZSqWd6rfo_zUjqQzZ9_41FCy_WiAV15lb1pICfyOjQ8gODMmLpt326gwop0jvmmKoLLHX1rekgD6NQW_4YeaBeWMDq5FLgspAoinYdQQPOsKdURzbn6Nr7D6s_RIa6yJf0u4hUWpJF6Kx-6NBQmWqbDU_6tr_nqyqh7KmLnnYGWOq3b_PczitsH-AlZNpt6ctMhm0PXfM1CVzhYyyzHsi7tz9JhPFIcULDQW4eQBCBy9vr9W_jlIEMX6JdixdpipvVi-4epV0jhY0Yzsnqff_lm8TAJz5h6h13j5RAfqu6rb7yKCwJFpo1-zFAmiqYxvXkFHMpGFeE8Ix8yubsS_BmZ0L6JuzuNaW8mJyxHbd84U43mWSP0x1iYrQQvW64Du9pNvWvqPOeOpsxW4BNrOTZtdMDgmGhVjCkNTD8zxK9fsT9bWw-xhNb5usrvF2NyK_MIIQHlKElr-uwlxDjIlu7xVGDs_8reEaIV6Kf_tSwqyRKFQ3XYa6eMOIvBTkH9D-2i8u8IDQDdRR5i-4i0tuYmlMyf8otrLb3igVBi03Lq7-9NLry20oD_LtVws0VFXysEAGEi0=w649-h973-s-no?authuser=0)
                                no-repeat;
                            background-size: cover;
                            background-position: 90% 25%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_BlrG_hTcQ2aGvKyqq-rbwWZKfaZzRaHWW0ISIsPfN50C-UPZsPy4Vc-0BlX4qnyn0IXznU5Km-KPccbsRnzzZjaFNtbb2Ea9hdTjbK6xO4W2DLY3Uo0btrK5HAhorHv2giMrm4a_BjNJzyRlmtSf2_RGrKinP57oAPuFqUQFRwGiXdhQCQ0ms7RYlaLCly4jGiVFg7Zug7mVNn2peFaYyzuzBPPLlzoaxHPaZeuugtuPjqVTD-GBAnTQTuXX9_NZavNxDamcISlrZCJEpJHgHERHsvevw_qkbivm4VNFq7GHo16FsiZ5q6xwtRyTALXFSZC2fAhWDmRizdv8SXW3DhaiJt249PUNPNG7PDcRsznPFGhIyoHPo-m9C5uvOue0GC0fwPUByz68jntYaF6Iw__9plXRW8jG9uaSy7b4lbmBe7YqhdMXzkavuPU5PpL_UnQ0UQVbc40o8i9CIhIuuK2VO4YAK7ZYovt2U_RKGQle2Rv1NL0HXH5UbTqxL2fkkHFvSCF_EuRevHw6fNGtDCdnqlbZnr6xYjmgChBkEJ2j6KISIdnUSaSm0gszIGuXB4L0f9bJGyv0Zw86PSYNjWkKd3ftYpmMC2VxODD-VmIHpnyrIW5PL4fkuJZL22BWhCXnJYPhExQbgzMcBRXGYsjUwKEHaTenXBpbr2j8n4ZrvG5qqNM-E0BkM7beREtqBrLza03GWUJDhwCGppRHNGwkB0LkBnLlK5FivtLiM9hZDafaDk4O6WYaXz0FjXuJDFOEX2US2yOy7789xaZeqtq-UoLyNyHEeKiZsAMxFHvAvq1O4I2-Y0_YVyJ6EhCtgzGPRKWIT9Ix-bXC1bwOMCym0uvt4SgA7ycX_c_H8_6RmrYd8mEB9atphTJFRoXOPHWdTBd4033yIOoKFr6josEetwoZhH5wXFnbCtRF1ZzourTS0ReiFEc1yOQ2iSs6y-YZcpCW6clIEWi1k-SU5tJPy9rbdJtb8wRtX03fzENiB5iX2qqTMQHGdAKDqHw0=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
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
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_IO4LfUDWKHzqBLo_Tq4weTHYCgZcndXu6mvL29k3dB0d4gWFwA66Y8UNFUbvG1dtKtHyBGMpn1euwYjomar5IwVm3KPSQtY1znvRtUzsxUPZzKD9LRAM_Fb_A0LdSYEDBbz2omXWfnvvQRG9A58td2t-FWBSvc9J7ccwV5ROgGNkh4akmTNTzpWsdNuYAo32rP1MUDWyAM6G2HuD6wRnQo9oYHu7QZ1dxs4Va0f-uFFmIt9zbDsnrUZLtT98tBhoQ9jfDvH-SYGiXSb-Ek81PdjZv4Y_0U4dg9V8zkXJjTGT_2VVKseXXqOuLgZ83UUffQyffSCqscuI4as_8eOVVrmIj1lXofcmjZkyFcZXuCpLnQb97Abv38iQPpOrdl3V0eqAPQ6g_MgRntXauLH5MtKHjbo4e88jDRedFg5H0vyyowZQfHrCNKuPYM5cnWvSCJhC5dRba5VnXS09ywhxrhzLcDji2mFRvr9XE3ErTp9cDatulZMuoMrOq-wwS3JspNyOnWMVu8IY1HG9URYaCxjR1bR56KoPx-KcGEOz9IRuBYaPgX6qVjYjhuYolcLgm7aWEa3IMUwlziMYW3AYxsRggaX-tAZwQZtxiB4p_O_jrGg8q4sLyeADbvsYkhHgXcpFztuMRrIIQESOyitgOI7xcoCvfdXEUzV-7R223xY_7Awy78U14XyGmp__al3WkhZwLILq8WFiD5wfycwfkGNejqEF7kSsA7Ih6WwK7orbRyUAnN0yHvRs-z2Ao8XpqPAX-aK2_d4Je2-fYPffh-p7WXpvp28b5wdx4-DFmU_hnRjP1ytYbhLAjUKsIq00cshjScZclXmf3-Ale5ef6if-NWM5Pwqy--BF-QdufqRsF1-PfV3qPcZ3gtCJ9YkamawcFEXz8tBqu5-IkgXD_DzIpjI30jBXbRFZMvkeAqpUpRrip35m7wx7X3cON4X5luPVkKKdQeBQCL62CQPt9M5_p6_kW7Mxnv3PHirRnz-gCCM-k3Fm7gesCkQlx71Q=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc-R-LNDDhCdtD6pNT8BbBX_x7vDlgX0Oc_GAr_6YiKxWu_-6ipF6ldoz9f_Ke1ReqTrAFmbO8_lqSd0CvKvzjCb0ugdwO4R8_oz3KHn3KaWLwkZiPcaN5d3OvEt0zVsqfimVFVDxMkN1V2LhfVlJRIYo8EPAnitxU0hU-A_by3FpJxwtijGktGtW21yvgcrOuN1vAMzKbtrTR_CRfYjXlUeUrR2f93keaDL7GZbueC3OE53-wlvE5LffFwA5VXmamQ1lP-SqTkcN8tgbpld1DxNoO2wzz7l-ZiQzHLZGzhbicsFDV95brZoirFl5eLGNP4qONsSU3YoGHMEn74IxRgzhKbfstGwXrrHUkCcC7qF36A4oKTzViivLgG2__GskTwf3ivTBLjvm9XnBikWtfWR9to87YB2CWNUEJiMpytY6DCZa1qFyu-F2zJulvr_zDlP7J1DjA4BNygajo8p-A2W7AFVdevK7jG9SpheT6dw8bkVxtGohvzpdS1zaMEwQboUlN3k5Qatu77PTTy3Jyh4iCXZTCBhDY9eX4J1XBTpmMu0NniLUOdj8edujr20Kcdbu4BtvBQn5W9P8nSjD_VCh_p1xtyUzW6aTs--GRIyRy-So7PoQVyNTMSbW6UmZgOwJVZIfJhEHy7MJ9bzyKwF7krO0O8bMY2OwdWbyHQxJZbWFgP293QRzwXBR7-4_7rye8OgaOP54ivtsnxZLlj89WoaiqaFEJ4zkGqms0lyD_LLLqpxz2J7ieR9bSkMEzQcQgLIHaWmLH3hT7QoUo0VedSHOQZy6YFDvaNR7y0kQHyrsNNBaGQGaCdOSSkmxotuo2eqou2O3KX2QC3BGDY12EjiQ1MBkeYOhOn3R9VhOiNkWVsh_SCwfHavMIqCjxhxz_iszN3smtBJjIzjQMF89eZAPU-KLFKqHyDuDCXx7NQsiNiP6W4HvYx_RgcuaCtNiqleLacmVjZ6kDFtvHcFqT4eyyUWTu0tTdlqT8VPrq0woY2SBzPAwBMe6GCAgMA=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 31 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc8ZpW-Dh1IAjpGqcikiHARG35RQJUF7QTaLpFmmltOuwN-qI_WyLL5I6Ke0ryUdi1R1TQZpxuq-bU7ouvhcNv1XZJAZvsQ45pRwpSeMdmQAgCNC9qALVGqIM0m8YRUoX9pYBAn0CQbSoYoZlbbTKL5eJP1TzOx514LcD2mvVMQdPGGWwUvIEjXtwSB58G9GqdWVt7Ip9kbppOfWxbLYs4CZceg-9es1cG5vQsKxbctGPsYCjl3XrUuN3mn5XE81oPDbF3PBHE8ddELje8TcWlalh1hOAPV7khdcSgAmu6NENaaBwzZMEGZpRrEL7W2TqpLRIn9t8dv1AcNS1O75KVGVAGlfIprVJBM7TBriLeQfaWLLcYxR_npPDZOhXeljulTNtcWNBtF0hIUDRlHvQlht2zHCCghTJ9zSTkvyy2aK2Iombh-qcyW0t4yEKWMvmd3oWXxkrEUC2tjISLsa3-FT9ywKfL-EI9QvNCC4ZSHU-bxclvWeCEG9jghWRwjt7F7rRuAly0UyjZuebvVEfK3CqFTX41Kz-qPcbNeoA-rcHr2u7TAxpXCVTIarAcNoah_N3NCunz87g7xjKO2gpTEr7otf2i-cZ7JiRxm8_prBzh0GYSClqEkcQaD-cQ45J0rLZQLQ_whxhO0ycRfrNmiMa_Bf8vk0Bfnc2u7M0HQX57KwdhUR2GW2Cgk6lheIQ23nvmG-WFIY56g2vijoF9XihPJWF4Zxe0JgQT5TuERlN0QIyeizfTrlyxUHTZI53cRq7jqRzAdOcSBWy2klj2I6uos37Z1-sDHofCW9OM0g6dX9MsUgx6HSPyd-J0xpBwRzWyhpsMC7hJcXbo_g6sCC9ENawFrODrODntq7lz07PNCnK0RHhtoyb7kn3T4QJ0zqQwAxMvX9oIc8lWRHA8zcnc-X2fvhjm307KI2LQUFvyg00F8txstrmgqGG39EGXfQ62LlI4q99xKXWU7glR8LzgN0vCOEFGskq8UaefV8iasxI91DQcYkKGSXtnTtF84=w649-h973-s-no?authuser=0)
                                no-repeat;
                            background-size: cover;
                            background-position: 90% 65%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc9z3_O7NLoRSnBhmZJ-X4riBYMWjfkJ5I15339gqSggfpTJJwe6oYOZ2uY93tZk-WLsFQf4CTlgfCe2E6YwHR6SE1WvEAN-MbvT8T5_uj80X6QhssS3LvyTWnbCuqAyeUU3KyrwFOh8-dNtBiWK35ksRpSK8yquE3OaxC8k1L2GNLGBO_avMyJdn6H9GLGsLXh3KretLS6KmOTrl6ousDjKhyTfxPb7hW8h_FBo692X16_24TgiPFuVKF-JFgwXkiF5UHfIvobcQZ9T-FAJkqD1SfH36pjulk58Mu3YyyxAQfACx3Le797ZiVU2-hlQwpISHCPqc1vKUiTwADlNbdayZ5zM2T5tTFGQre_uSYXRDCnnXwhlFi0tHiCDNHMLd3AHto6ozy9OxKzg9_Tdx8WA2Z73OP3m48FwH8E5aDTaHG3a5uLCqtxFwipWp5Oet4dqRjPGdQdCVc0xVjss-EQY95hpV-9W7BJTKQqht1su9fzt_pOl_miaaULxdUqvS90d7BEGuYJp6yNdwr6eETr4EM0e_1sFMbuvxbP6FeyCpHhdZSoV5lqXiJfdvlHkV08qWEcsIgyEnDYFXfDt-SPB81jY3P1pK8yN1rXOXb7DMraweETxqC6k6acUAohmbNEEeCHpE1kH2H7F7-fb8k7M5ty5XQbG2MosWJuuhwwKvrQgTyKSvDrCKtN_Sag0u-bE0IF3VPuAJVzuta2Wz6bV_1sp_hMpJWw-Q1dUG-TEPEY-1GrsKlu45r7XC1Xl7nkRIlSk8oyhKzu-f1BE5UynlwCsdRPeIf087XSifuMGRwUWqiFubnKw0PUVT2c_L5pgWTQAONsvWaRs4q1mer6SGzAaKxJS80R8bhGer3rWuKZDmoH605Yx2ye6KlrMteofTFCXUGQbFfViRlUaGRwI5nplDN34W3fTMynnPkd-dp0lY_F3AAmiR9OC42uVsN2o7O6gZ1qZYQIwUOP-SdOFGP1eY5zSWKQEFkm2njjX8G3gbEH5LSqc1bbi1lbiVM0=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc-bxQYFRsAldQVsSOEdnEuhhIUUSXfhdhvY1EOlw4EWaDGIJYr74nV0nRIYzY8K5H961YHQkgDNDW0aNsYz7a-FdGTCTVbdFTJKn9onqG6lIO899yZOzT3qFhU4vURNnb_R5E_grhRAMUfUaAzPnQgA-5XXTGlk2i5G3wsass6JtJdfNBjsVnXOEVibCYaj6b2GFRF8wwBkss1WFimrj8frEJ-n4QeiVkniA8j9ouaxjUPkJz9N6RlUKgvYS60wcw-ymIQ2iSV4abVXB3DZzhCGRqr1RMwd_BFaZMabwVCGNyazxQHWWffOwtZPmuSsUbw6-N525rF6YIJ4tHQVho3MfgDYkfA1HiFUJy5ZoOVHHlu7Y4IwqXAafrrEHR_5R7_M13MSASaU5rFgiQ8rNDMHHl24yOTkBOQtXCnOjP0Y_DKa0-euw5eQ57CmguK7ARqrtJVMt0R7W-7vhBXcHYLd_JNUr19lPz0dQTvICekWAuMDAmQENQnRPg9HZzwn2ztFhVnZ3NcbbPHvcbqs_NAADwA2fr3kkO5TUpTh0v4sCvfVL3cVe5P4_9Vdwr2h6R0VMtt0afRZf2WOL8juWg_s3Niir6SCyc8mqDI8qwSoLUARbYnJiwHl0-Fe3bPSx4YVdG1VF9HvnwMK0t6glOu2CKMFfmWwGpVN74H271poJk08IqQXQZ-jTAUQcU8a3MQnKPPprz0vl-UXSAZYAJT7RBBO07jre-rOwFSlvMffJ8CjQ7kmjx1K4BJLIrAz_yoEYvof3CH3eGoFcv3VkVFUkk2uzwkRFi3AK9CRD7_xG1hLzyURi-bfxDs1xWeseIFa8PYbUbsPdsTVqe27CD1WnQJBsnWGauH_8SMxnSEUnjOTyVpeeal4vSbzFmpaK-nPBRZJOw8BPkwGqo3-sYFGVOvSGzQA9d1zOzHLHBKcZlUVEBvmbshWSxmL9-tn30HsF1EgYCoLYU5E51wMdlPcjFB3opopjWY29-Itm9gr_SjA6PJa2-vGEY-Lbq8Js_s=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc-6Vv0ouveZQIwXK3cUPBQXfXow64C7eUEfnrlpDtPsFHWK3nEXw2HXRqvB2oHqAmpzGtab-S4bLfvESb_GeIkyhUDZjK2xIPYcD16A9snid88OQnm3rSRTraVRDCkXk2GtRdMZT94snWSEqgAV4d0adNIrrwaq7Ryi36l3mX2gf_5psWn3k0uhXgvanqlGLIKBxkd6xFdZ1cECPDShpFbocjLaA88SNnWO8w3gjewcROXDOVpgYLx46jhkTRMXTxvvr23lAU5u2k4vjiv58IhkqbrvRcpf6-xuf-fOiqvoMt_gpjHIng00fdzaN0knmQBm_tnrxhfQ-OmsaPAPFbv6grV9NbkLOcsoq12SlZMLUgujtlGcIVbwgPx4tkBOK4fevvufzZ3E0RnRNBAJj_tD_nxypQUPLd1e7jHpd4h3ThywKPUuaujox2cwKnZbQaTNL_e1dNitaI509HkiPbh8W1K3a7yvBWyJq3Am6QJBu2wCgn6DfqBkr6H_0f-FJvlWK23n1qacVbAVoDvDbFCfFVlA4n23h4756_UvJc8UtwidSg-KDSyxYzXprI9xuJQRntUmCZJD9x0B14VY4-ZxZ2XNJV6IwwdhJJTaV-9kcutMeEEPw0JdsZHD6FGWL-eTjZgkWnUkmM4kggENM5CtutTDhWGR1XccF4HAF6FjQ3PtzQh4rGrukAW2W6ysj-AJEQPDjNeAb_kVmns8pEzeGtFwXHUtUGIlwzRT0Eno7kbAK5CrO68i3vsDSpvWvOpcPrkEJmT5qxmxKW_j3NSuK-AFCpkUXRJKMmEynHtoSmaGyqs9UmPoMW9FYsUegLfPUJ6-1p9uytbZqKTFvLyDp-XPVYMc8p8WT0hDCzHcNkDKugVzCFIlUluX9NEtQieyCJazLHssy8-BMaCOR6faPAqyfFRZ5Vn_VeICiH08p3xl7hAmMzANoYdoD5NdTNEUH99n8L9cPRcA0sH10OUvW9uutx1L9egbvCKJmndwBc6k7RUGKdPJpcRD1m3PA8k=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 35 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc_Sc4bYDURCgkLbAucK_8VtfQOE6X2zI8u8iAmYV67TrD52TXS9v-FF-lj9g0fC6miYUBBfubw1QfDLZSbhvN6Oh8joToxBW2tTapwDKlqGm7PgcSL1td_uHszCNn9AwZpFzxyGdQV42tDxRi4vcW1L5WRPOkQ0JXAbe1shDn6tbkyeHral2Bw-bBLgpUj1EwVD5bW-uL_Ip6ygeYgdIJURzVg5IuGt4I65MtZoryfTdW78yBO3xkx72J5cadJSSiuTepeEn0_YHyh0HUmz-R1RS145SyK5QRGu0o1GRMet_VEIgm1Dxa6NBVXZULXD1J9yhmzDnyfm5CDngtIRvonEHwDXwLtc6ry8CzxbyA42iNz15E0am4v8UX-iFBOGjUAsitCkPrBxmZrM53pX_cgkizWqKdaWO4i7K_yrZQluCaP1r03tWPj4Y9T5kfsX35dTmy7cullfQjuARZ1TsAujVBHDxJuKxTA1zfx5NvHFKcjn3JI8t7pgyX09Aft8BrR5C-1Qc3pC90LbCnJ7DP0D-4Jr82liqSFQpzvzR3oWY6aFfodagj6nGei4ABLAoTeF5QwI7lAjifmKsQ1eS2NuDSIwPqOnI2bcGLFRbKGp7hDhBJJr9d043YsxhWxhbuqzEV34hf9Jl2qyyHSTRzHfNyIT675q8wLN-GRiTC4ItaUioAzw_k0Rt1gvgtswin8aLe6fyGdLQ0lGs8JofGPYfuDHZI8twidVXwioJFNWxyWfn7aczkS9gUJJUwG4q1r48S_IglOuhaoq3DrxeasIrYrLvmz8i3rJiOK9hsiUn4dfCof08pRRgFIpY1mul9c0N4k3ViLh0QFehuhs5RbGumJKuvn9YnsbfMeAdjYHY1Um6XZH6-6cdxdFqNQvy3x86VqjPg1Rj88DHHVLdIKj1WqHoM41nbIWP2Ieqg_coPtT6KUhnGFrbfb25qsWz2uop6Xgt97r8YqnEhMUqzDDTlrtdMS2DMzxhwKvZNim2caGTWGB905HIA0gwfuZERY=w649-h973-s-no?authuser=0)
                                no-repeat;
                            background-size: cover;
                            background-position: 90% 35%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc9FYE5mkOtwdOdlME-VHE2D3F92dU-4ijW5JWY-PGn7MywZ0TPbKtuF7TbUPWwx5PyLKyKxfq3sVhOc3F4dVJgdhjaxOtkEd0G_JI11oZeHaO6YQXN0KemB7R6x9Vyq310fH046mIE6Rex7judFpfOIowRhpYK1YGmQNQLXsMA_33ZCulCnDn44WBahQRrNPuabGFNWd3J2r-OX7StHV2K0Sic2AfVzuJghchvSIcT1nnkgJR6xp6ER-xCJR8DA1MWMkbZRglMUDFh-uCEDW33Q2eY992ZPwS3kFIyvKXGCHslYV8RF3JsSG2z5gE6FVZNCx3rVDs_z_FLJDrpUzQvamoLBIdpogO6FV6pRL2s2h3MebFISfen2-JX1gJtIkUHNpPFpAFOAET-bPIZHXu4VCSUZVj2M6ebrLFHkcxwoOILUrv0eQSTeok7-3Oj-2k_IzUdgKqWKuL0NZB0viQyLD0oZRc0tMuQd_nXPNhQLkI4xO1FeSRCBI34SJZenz6LWRtlEB3_tsecMn0oFETgPsUJplvLy70lP8N5fvjnM-ua81eG_6Oi05gR6IIte_77gNkzrioCxVT4Z9u3Bk-SsO-0oB0Mc3mx1fLETTUnqDYgHWsbhYlkSOvVSO83sMKbhXCHga7az500RRs95QqSxdld878R011Do-u_IKGqptBdmcQ6ybf0xwIIkckXrQvu2jvkjkt7RcXgjJkeIvtLiTVM6VWPKaey0qtxhvj8sBfsHda2_hwB4akSIN4AS-p5ImRKppwWe4OCoPjJPuuYT_eLUvLTEoue1QI8km7Yhgkokn0KWagIB1iGhgpXCuVgjWRszdiHdcn6UmoJK_181B0qtI4qhrCc37PFah48X_q37w2UFayq0j3tJnOZn0b8w0XpZEd_Fh1_sXdABnRQTZ4m6mAakYY9OyiZ1505PprSeGc3yEIYLZgJITO0qXPL14tZZQF4exsXMjPgMZkvLzAGtbm8ng9_pDi_EhaE1y-dYgfKd_iZKhAKp7-zH9cs=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 37 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc9m_cR4C5MNkbPDSPXb_wS869ATA6cnHs07TwkQ7IfvjCphTii_fn2I5eLNsIVtm_fvqhj0ou6Mp1s_OicTqRYm_2srOpfJotto-snL5Wdwmz5nmtt2wtUeuTLmU6nUtEsCbc4t8JhdA0VSKZsylpS-dy6-3ZISf-vPwKXR060OyYH2WEUetfg-PaZ7-me45hhl-31BlIb0BDjp3aUg5o_GShUVrBgSEWw4C5ggsHSzMclyuEz09JgITbpV88lM2-ZoDhjFqzrwY5lH6J9xhBSvggewC_kHL51q35PGTyKNqLP8FZ4EZVzxFEpV9IOtc1eE7ZUacTrHneI15RZd0dgM1oD5eQEvwUOzzlSC59RQ03_0oAuzgsASfJxUTZLuVkdxZ7ACaV-k4qpCAVHewqVPBH4Ub098e7TV8IowiHrZm75H2nrqUgFyE2wwoX3zPgaQ5XXkLHfKRrnL4uqIuj08V6vchLlijXhZIppiOjXEUJ7Q6qfDR9k0ooCqzKQoK90F9XowdXEL4Zh27UYzqTfn2Kt5DysMRDeQhDmI4BlN5lFXLqc9iuKhW0LqhK73ZUxLt66KtdNuVKmUs_qu-MY6OAoY7F9KRTfnQCa8zv5NT_NCLMYuRVMYmFwRngpHReNR8Nb8xghbUHss1Bx1sXdHlVHF_Ff2pAX2F_SjXy0409L8WAbnh01WKK0yEC5jg0g671GvWhc3x8UStjtBBA31d2QAufxt5eNQAe_fGIDGwJXoAaOIZhhzRbahuBjCf11CoSuuD6IqyvttxKaz1ojNSjPDLe-dKwkLP6LgZJWqwy5TIIMOINiYvEdxtaSwJkJiTitpdVcB239_8rPaSPnDWgiGbeGPyYHRkUkKS2fCvFozynOzRfHfL-bdmth6EQCvBSuwml6K1ApnX5K01uGxhMzSW4iKi27mPzGzafEv1Sr2fkTUQtn_2nqmdSmx5UNTpa_I_52Y967sWh6vwhpP_pJMIK4Kz4YhaWnNd6my8qtVa1YFv1SBTVfsMqolzqs=w649-h973-s-no?authuser=0)
                                no-repeat;
                            background-size: cover;
                            background-position: 90% 45%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc-zaWs-dpeV7Hzj3b9Jtk75rgg7nrtRp4s-sMfkcS3KlhY2VNacSO00vu3SXlRC5aMYQt4hVZ0VbdJhcMkTMwOljtd43Ee_jAQHCsVjHP1j3H-A9lly80TitOn_d3QIhcFgdQrcr7V_9XlTVIGYvFGBS73Kb-Tk-tSKDu58abMLjxfiDQD7rx_fjV17JtRTbS4UGsMRcmQMj8GX3jO9xNrj5EEfIaVhXkdE9KGTHBo1tUxK_-taCfD0Rsy7z1rN9CTQDy8xFDJEcpUG_lyqZACKLVLCUBsvVDj6DPbd3Jr1OOiAyuLj72tG3mLO_3ujZQs0xG_othlyMH8KYD7fH0-We1_duU43HJAgkAozMmp0agfZobDKn7GWkb2X8kJjkC0vRi1nERrACVldT8m1imvdhhKnykWBTVCiE4nslE9_wGs8SZmjrag6NHJetU8em5dkcGJM6a5sANM3bO_o_atJrnjmLAOZaQuKgsjRAymX7ljNR4VMN-x0RmjqWDKNqypOomv6mryQ_clPopnPUkwQ8Cmq6UPXQfmnfF86AeSxiUERXduxAKpmd_coiwIab3ktkanjc5wbCuyDZyPShATAR26btdJSLWTjildyCa0Q4OEbvRnPdzYPZtAyLP8jHWgFPIb_vCqtovJf0sd27S7iX5SM_CWSvBnStU7De-79n97tcuYrvi2IMFeCCewAcYSrZPP0GIwDDi_PQrtVPoQ6EepSocCARunz27hlCx-7XWl-OIPnqQFSvwHBhHjJi5J0K7qUTNEzQl0k2f9ps1wj3gJDururSYNapIJ3CNjfDDrUNEyakQUiyKdAzBsxTqpILgWnEtT6z5ztm-S9WxORRrV3bNpMDkhoVpZFc6TbEv-7t9GGaAYALZTyxCyceskiDAO5-gvbO-0nmfTkd6-8-ZVObB3MWwWiJlgtw_mBvSWm48EvQVWbZ4GyMojSLcQVh54llchKBNgkFqxPE44bPRa3hpHA6hvErztLTLbZpdr6tqgFfbh6Zcg9WPzL3m8=w649-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc8dOyabVeU3h0Ye9luQujPFDKUdWCyxGEnWQHY2iM0i9C95icXE0XUWIZIx72UIwKKegxoHfHdcS4THH_KeWYvQYaipVf-eozTQOERdKZhHpsK6EQYZon-4bHbDZo-cpHeZpXXXqf2RB7RSq8qTKgRSKbPo9bsiF8A1qXZzOXdXYW0g_ISOjTlrXC5EeCckjpyD6gBzza6lgJ9AZa09iTRGR_g8jZ6fJYZuVfMq8QDZLFIzuARrMEH-2c4nTfpavlF0wMINXIFORR9obqZ6dRVaxMt-41VkYZcKM3T-1EhSA-TN0yReojFD6JveoVkSfRLr9ttu1LuiCAkeV6BIvFqvBkkke1vZyDmv9ctLZ4BygpoJiiuxYuv4ZJtfhnP3Xr0zNW76qAwsHwQEweVoda9wnSIJg3-iHh6j-y5_fXy7f8XbufV4pbgis2gkMt5XiFKKNQla10OXdi18WggKGUWGAtc_PE1DojFZJzaKxU2OqJfNrwpXhZAhnggWLRpR_Nit4AexQs1pLtc0TYtPRIn_SqUKA7t2O9V1FTKG46sXWafJZZ6VCtSGbj1-xjl9OuQPp76S4odcGA3OAuXtKo_lMSM3N4u02ijdLGYEbVGI-J3zsrgpyLueNaMZ2ry6D3Vu5gTa2UIy_jR8HG2HqZCd3lbAG6UqeKsdI5k4LY6z4T__8YbS2qw71vVXMpBqHwcsoLddqPzvteP18N88B8Ts2VAm4KVsQjOVNgIwrvG604TvZ4nlhvsA09A2uOKYmEUpj_pl2IyueXP1wJcszgSPKLr8-AOTC_i6C50lEbd83BB3-mzBF6_nD1JFgqvZXl7ASTBzhamlyYfa92C0gD6dZSea4EB1OwO-FBEnn1vG872FCdXaDRCwmmvpkB9iehSQjdiFYDiaGX9psErN5j0oWruGXwRCqnblcB0URUAJOcFwuBUjpgTHotJ1IsTKRPkKuI0PVZfUqP6oVRD5E-jVV4d0Hi5cOv6tzMZkN3kbeZS4__MW7qEJZV-tMF1QIu8=w1460-h973-s-no?authuser=0)
                                no-repeat center;
                            background-size: cover;
                        "
                    ></div>
                </swiper-slide>
                <!-- 40 -->
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc8NVg3_VjQTNdRjm_3GtfPjMzefrs-_5JN952l9hQ1D3oF0dwDKjbBgkSpj9O9yIeHBmbt2RGpsKTaOAxJ4gcRK--E9sFBs3GV2TUpOL-gqc1pJtzRW2W3hH3lCjtobc3QSn67B6Esz68c3zho0HFB20OGeW00AciH-JguZMN7ayDkrzCPve-xePbthV-go3DiMByJJ0PQ3e-g3O1TKdejGqqXPrWkqJzTq-K7tPSDNQ0XNp-e0TavCyQn5lmNAlhWGi6DRQGexgxGpZmCT9p9xMAWli3qRhVMEA9jXEQphTG34I-Ilr9iS6BkWPONSKIJMK6iqdF7vnvTxiFu12Dn9AR1dMVFIaoxQSxV-g7zBXdn73qQXIKTxaj6laBvHnDfI8_T6c3DV-1qJYNYoM8vS0DP1YKU0s-Tc8rYRzvhRhiJL3pQTkB-eT9ZuuodWJT6yA7o_KDwlPouWGQqkS3Jko4xVYLOlznm07fs5qY9EgciPv0C48LUrNCkN0lvCyrUhDrSNRwWx7JhlKOUN2AI7RYh1NgmzsLLRqdj55x7Tc2gMLmYw4t81JsM1SfvYGZUbkl0gy4XqVpQbzkDWElUj3MyoC8IVWhsvR1xKsbd5Vwn8HdxgkkuFta-H94aeeeVVpqG9h8WofhxM-qA_HqkhJIheJZFnyumCBDDVoMGS66JdmrpK_kg1RSWid43CNc4R0LoM74iSVWx3EX0dClET8R6T5TehJ7abbfvzzT5rWLXfeykmyKnfCW6w5NOBah6-woGt-xOw6j5EDcMj17cFgkjeGy9hm4Mm2HdHrZjmPoz0lmkwW6XH1-89o-_oDp9pl72fMKjePbGmeEXGTzr13yAQTb9afIlTWnzppx8NUs9G5H3TtdKMSSA3xybfF8Vxp4nclgI-9iJMJws3f7MkV4NU1TnEX_iHGCn1WEKugvEdwKaVpgU3Ws-fzEtx48ZELPDUC4dO0r9AMEPBd-Fpw3V6NMlJO5WLV_-QldjXPEI_DqTiywumUvhJabQZMKA=w649-h973-s-no?authuser=0)
                                no-repeat;
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
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc9JbMnEZMhEiUcw2tUj-rgGJr22FRIH8_gDnzGRamkYtY_zC_ddCe4fG2AYov1cDWAWdx2-1oEmwx1ZoneZoO1Je4BQ2Yb_GsjcVvAQIu9EFmabud159GC5RhtYoYNcvwWM5HRaz1RufiLG6d6EL0ghBCrAOYw-LRiWkPdrGHO7v_qN_mIqSOYGBxwkGe4sXZGjuvZHIORMFsqOfEU-q1Qh0f7ngTdLlnk9QbcqLqkyeJnpAFRTMZcYJQUpDl5ZplUf2eT-udDTcrOdV_wU-Cjk41Utv8Y5lD9Ut0MX_Elk7DsCVt1X9yPrJsUYIE7HLUDa-P5iUZ95P87V726hn8u-OZLLG1KUkns-iFnweeriEnbaE14QJoICfIu5oudxxZafQadv9eeWucqiKBdL6tPasBy7sZoVzxSK1YHP8ByZOF5HMkWHQvAALXUGSMv2vOIQaw6gb-Rd-FeWKnjraVmlvIpaXEYwR4sXNSwC2YwwPWQQooYaYT7nR_VVouqtCNq860mIocQw0_6mSzN_fGDHOaVIWLgAzr9TStlayl8NcFmqrUwAC2Aqi5oA4OkHkw-e7ssB8suyZv8AGDLV_CmSxOCIkxvf0HXXXUDGLf_gYVqkCLN1bB6MY7B8cGgNolAyt56vNuyjVOjJ27RnPFYkujsHPI_uJUfYeqJAyecEoAerqvFpwx_1nkReknO6_u82YdRQ8kUszVol2EuatxDZYOvBU_nduSPELJ_z1W3YnqsyeV6LNWwSydwDe6edHfWK6oFcQK9YXGxSNVKlOjwFDpqtHn-Q-Z3Ghd8b0Cbx1A56pDLXAqf3SJ27589thzCzewtCIDf2CY_zwB88stTsSRV9ajJDqvH8Ei7Rya1bJHNsME1mFlUQrIAYa_RL5Ibm7MGqPW3GMbm73sju6wI-fH9QAQzh1C6KiRCVPD-8l57LGTj1Yr2hS8kIatIjuNzvgyGdTDBR4RA0wpxb3ySbCwnLOJDAwDBhIzn7rhwQ_MgjrRFbor2DfMT9loDh_CA=w1460-h973-s-no?authuser=0)
                                no-repeat;
                            background-size: cover;
                            background-position: 50% 100%;
                        "
                    ></div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="background"
                        style="
                            background: url(https://lh3.googleusercontent.com/pw/AIL4fc-9iiEbzg2I0DGO6IHH0pSpxHSp05_ZJ6YDvLNVpiC2vahDkfdeWAdNlCvn1ik4X9qV34a-x4oCggr1tBTW47R0sfDTroFm2vgs3Nm5MA5gbwnEhqQ1az_nDWSQF4Jx3RxwUYIHUrgo5jvgBvigDAQ-bNPxHcEPTFpoUKkqIvDxkijx1_4edg-zdkJI-xhvHysxerpdyF4YtQ9AKQNCBMydKrK-S_RA6IObk7gL1IfXjfseqsn2gSrhFDOrN4opPoGx7xHZ41Bq4fz3cfVqEbTSvYujIdXbw1iozLZJmETsF3xhPJ23UPZdF_J6y7bY0HTFcQa2wXEOtbAqF7mYZZn7yAYCcyuadzVQSX6KtQ4gBjl_pDKCAAAI8Onhc7LDvyBEEZ5q2eXSB8U3fLfXRwBQtiJREv4Uhdq6SBC0wU1-uZ5O0yWscOZD94rGjafs59m27Vg5tafYGNvpMswaQ7WOmhJHbt6FVjOcqo1VaFIz5VPalWg5hDo0XGCxgCGv0zDFcWfl4kPswjKkqCSUjqs5jWGHTmopG9zBMBVgCwor2BaVB2sfh_UgJeJVebN-5l0-1bJ0dqVULg_Sbvekg7BV8_TIDL3Yo6umru-BVV_P5JIt6s-YOXvSB_WoDyFu8puS4Kz3qGCBzu_S7HRTuqHNZ8kZmIZAVV4IjsnWEC0p4uLSULWpTqexxawb5XVxRwSF6NNEaWE8gF9rBK_sr71HG4M-vIFZrWtYkuc44msCvqIF0eUo9VumhfL0NOjvu0m3X0yx84fKNP2YmYGU-jPATvYBCR_U2ox4W_HKuNgcG18vdSMTZ98YB_c9Uky_KiMuIbIeWZgDaRAqmJhBBFHuWTUT8P-k7G9FB6uuOUu0iLa-U9vactvMaKTHBeeNEhzYaeOrD3UNx3_NkHGKPyF940IyIyCRUO1S4iq6MgLKbPmrFibWRD-OSPpp7nbT8HmDgaEy20qztMPwfOiCZvq6XmrDXOHku-C70l3s7SioE6t4VqK2mCNVhmQVawSOBdQ=w649-h973-s-no?authuser=0)
                                no-repeat center;
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