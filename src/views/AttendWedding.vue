<template>
    <div class="main-attentwedding">
        <div class="text-center">
            <img
                style="max-width: 350px"
                class="w-100 border border-danger p-1 mb-5 border-2 rounded-circle"
                src="https://lh3.googleusercontent.com/pw/AIL4fc_qjGb1pFEXn1M-KqltrHaB42S3uoZ9-ChkVS2lNecU_YuJAZ-bTf-ZDW5nrPdWxpaE5zJ5SyvXiH3ZByYrsvrdwDfDsm9ZMCAm6wrsEosUcqznQwCi9dMxz-UNIrW9sUx8SZ6rmVvmzmrDp1aU-BXBEsP_Pfe5JiOfQ4kp22SR1MuE8BhR02G_vnndRmLQl2iceO8ZtMe-s7d9La2ATuQE3cwY5SxfPnK-g5Dn8PkY551xbvqNbXKf_qju96y7IauOQcmovm2toRIzhZ3oSG6HiECSrgfLl9oPBr039KfM3CdVnGgzCl7SKxyLJkaF5garagZVLQppH3U5AkL_zyeP7FSk6ZZr3eJrkmBoOyR9G3mRfRlI0VysexHu_1zw6xnrhyGDpPzselCKFDibc0ZhHC-rmqTMaNn64kYao8JyWqHxyJSA8X0Tr-5GKnVhwoonX3sdobK9LlB49n7dA6_0k0xJsyhJdWgM6Lwx24WeoT04so52F8xu2USnRs1GxoB1xA21qrVAle5zCwFlSy78X37rXBLhe-SRZfo4YpCzNRC880EKZg2S2FLMmZ2QRrrmwh1u8OvDRriA5fH22iENOdCtRPDbzSFzJR5yO7oTqmshUkiQOoz27cHvtCRwgQfYaxHWg082uaF6U9oEWH_wg0bXtF1OcmhU08nJzrLTA3K5Ser_qffrAVaqoHI1_7x_Dbm_1CvfAxE9eORGW7mcR_gX2iavcOe-TvrYBYXewA3faxUyOZOKedLU3EBsjIx1CpEae9y1uVaFBSOJFqe42TyT4GFSbFiVbXRNRYUfRxAGaSHSDH3SAs0MB2duSUG8UiyDbCFgRI5VCTHFGEF_HERtqTjfu11U9Wl24Yww_Y0Mvv8on1khb2cYTyA-JjLnhV49URRlcOYE_VFR7DYs14RIaU4EMtBl5_ANT7GyLflsWXq8iCh8P9JIWROr1DZ67RonM_FcO3kDunfACrLH7h-YhoJ51HdmT-CxDcxhNUm0UfKSqRYJHqWVj5Kona4=w649-h973-s-no?authuser=0"
            />
        </div>
        <div class="body-text">
            <h2 class="text-center fs-1" style="font-family: 'Coiny', cursive">
                Xác nhận tham dự
            </h2>
            <p
                class="text-center"
                style="font-family: 'Jura', sans-serif; font-size: 22px"
            >
                Đám cưới của
            </p>
            <div
                class="d-flex flex-wrap align-items-center justify-content-center"
            >
                <h1 style="font-size: 29px">
                    <span>Ngọc Linh</span>
                    <img
                        height="50"
                        src="https://thubinh.iwedding.info/album/heart.gif"
                    />
                    <span>Phương Uyên</span>
                </h1>
            </div>
            <p
                class="lead text-center mt-4"
                style="font-family: 'Jura', sans-serif"
            >
                Hãy nhập vào tên của bạn để xác nhận bạn tham dự. Sự hiện diện
                của bạn là niểm vinh hạnh cho gia đình chúng tôi!
            </p>
            <input type="text" placeholder="Nhập tên của bạn" v-model="name" />
            <div
                class="button btn-lg btn-danger text-center w-100 mt-3"
                style="font-family: 'Jura', sans-serif"
                @click="post"
            >
                Xác nhận tham dự
            </div>
            <div style="display: flex; width: 100%; gap: 10px" class="twobtn">
                <router-link
                    to="/"
                    class="btn btn-lg btn-outline-dark w-100 border border-2 border-secondary"
                    >Xem website</router-link
                >
                <router-link
                    to="album"
                    class="btn btn-lg btn-outline-dark w-100 border border-2 border-secondary"
                    >Xem album cưới</router-link
                >
            </div>
        </div>
        <ModalAttendWedding
            :showModal="isModal"
            :name="copyName"
            @update:modelValue="(v) => (isModal = v)"
        ></ModalAttendWedding>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ModalAttendWedding from "../components/ModalAttendWedding.vue";
import axios from "axios";
const isModal = ref(false);
const name = ref("");
const copyName = ref("");
const post = async () => {
    if (name.value) {
        const { data } = await axios.post(
            "https://vue-firebase-wedding-default-rtdb.firebaseio.com/attendwedding.json",
            {
                username: name.value,
            }
        );
        console.log(data[0]);
        copyName.value = name.value;
        isModal.value = true;
        name.value = "";
    }
};
</script>

<style lang="scss" scoped>
.main-attentwedding {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.text-center {
    img {
        width: 100% !important;
        border-radius: 50% !important;
        max-width: 350px;
        padding: 0.25rem !important;
        margin-bottom: 3rem !important;
        border: 2px solid red;
        margin-top: 28px;
        aspect-ratio: 1;
    }
}
.body-text {
    max-width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: calc(1.375rem + 1.5vw) !important;
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: bold;
        line-height: 1.2;
    }
    .lead {
        text-align: center !important;
        font-size: 1.25rem;
        font-weight: 300;
        margin-bottom: 1rem;
        margin-top: 1.5rem !important;
    }
    input {
        padding: 1rem 0.75rem;
        height: calc(3.5rem + 2px);
        line-height: 1.25;
        font-size: 1rem;
        font-weight: 400;
        width: 100%;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.375rem;
        outline: none;
    }
    .button {
        cursor: pointer;
        width: 100%;
        margin-top: 1rem !important;
        border-radius: 8px;
        height: 65px;
        background: #dc3545;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        color: #fff;
    }
    .btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #6c757d;
        border-radius: 8px;
        height: 50px;
        text-decoration: none;
        color: #000 !important;
        margin-top: 12px;
        font-size: 20px;
    }
}
@media (max-width: 768px) {
    .main-attentwedding {
        padding: 24px 16px;
    }
    .text-center {
        img {
            margin-top: 0px !important;
        }
    }
    .twobtn {
        flex-direction: column;
        gap: 5px !important;
    }
}
@media (max-width: 322px) {
    .main-attentwedding {
        padding: 24px 16px;
    }
    .text-center {
        img {
            margin-top: 0px !important;
        }
    }
    .twobtn {
        flex-direction: column;
        gap: 5px;
    }
}
</style>