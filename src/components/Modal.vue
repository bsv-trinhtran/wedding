<template>
    <div>
        <vue-final-modal
            v-model="showModal"
            classes="modal-container"
            content-class="modal-content"
        >
            <div class="donate-modal-content">
                <div class="donate-modal-header">
                    <div></div>
                    <strong>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
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
                        <span>Hộp mừng cưới</span>
                    </strong>
                    <span
                        class="donate-modal-close"
                        @click="showModal = !showModal"
                        >×</span
                    >
                </div>
                <div class="donate-modal-body">
                    <div class="donate-box">
                        <div class="donate-card">
                            <h3>Mừng cưới đến chú rể</h3>
                            <img
                                class="qr-code-image"
                                src="https://lh3.googleusercontent.com/pw/AIL4fc8Q1DBGMJRvhdladLuCQ80LyzZX6E14RoMJHRsA2NMSUdH8sf3qD_-bdBaYIft_6mpg7L-VqN57oSM_i2zjmtfjeCx6rhba0KihjviCeL6wvmSGp7rRCa3H9IvExbKacypYR1DfwPKWW8IHt0nhnbO7_IvIB_OEii0wUWrxF3VEDoAdWYCX4iiCKCMBiiFR1945RjkK9AE2wIEKJYNkBc1QNwIA039uD6efGFcq_DLLAKwQxzazagR5dCcViw6zTgB9FjsjoDgktyYPCkTI4Yedc27UjuO6u_weTDZt65L_AF1YWUqQYmBrhu3z1j-6icfhT6FdECrQtH95-CFGezJ2CnL3qCgX4gU-3ldLmSPOLxGI8HYdMcYTTReRLDvE_mtn46zT2Fd3XLkuq5DDD8bmleLx85B74h2NtS_bczsnZ22AsBW_01dtB-h-F3yeFycPnW7MLaUfoqMa969GKpfhwVsCVB98Wi4zYwXyv5nSgEqm77n7iaxV2lY4iIXRcZ_HVF8CGRE8jKPTRT9r-PndrtlOy7SbDbldIPbY1sofqyv4_hn7gqN_Vmu75xJDcIcmCrUuzLoml9x1IaISlXbb05Ufg1vtJ1sl6ytcIUgXOMUdps-sHT_NRXqpOt-Z98GKxONkCQ0e9AmmjUxFhDnwUxO4qG42sp0Y0esHRsVj2rt1gzZOsStN1ltUcqi_1FAocT0PLR5A1DPtB3ksSm0qt4s0gIMM60DqIuDSpq7F0hHPTYc7QIqD2IVQq1fSr-jy8Ls80sQXNK9MYIXFjtzXrvczLHCYFnPfobMtotv5GdQfMRUx83DmBFZKRR8fP1iPksQ7-NhvwCatm6A_5AVGi27MGwEBEJB5y14Ak358Q0aSqVNT8Zdf7JWunyOHnR40Fx-CPi8iZR25LWeRFaoG1olOi9qjK2n2yB_00lTBaPRnCARfEGXmtVK9Q-4LATXq32hu80SDJhObO0ghEp-ADym9u2Je3wqhlHd8X9LJgOQOePGU_6nDbkWhgs2RNNc=w280-h273-s-no?authuser=0"
                            />
                            <p>Ngân hàng: <strong>VietinBank</strong></p>
                            <p>
                                Tên tài khoản: <strong>TRAN NGOC LINH</strong>
                            </p>
                            <p>Số tài khoản: <strong>103873285674</strong></p>
                        </div>
                        <div class="donate-card">
                            <h3>Mừng cưới đến cô dâu</h3>
                            <img
                                class="qr-code-image"
                                src="https://lh3.googleusercontent.com/pw/AIL4fc9OLO1rXZq2qCfkTp6chgzoqOiDdsrSUnu6Dsudtl2NdSyeaf6S1N_PKwX2qpm1fy8KMhkjkfQI8Xv4-m1fGAo66Egjnd-rIotyY7psyhofb-hR0XyhtUIGppG3v6sYUGMQW_cQWnrpPX6dHw_p62CUI0ZAWGIIqxbPAW3JAL4Hqa2LZnKhl8u0-HwDoUR8V2CojAZT5rDfRt1pG3v5Ux1YifZzaIMOvzbwhSWoZOvBoeCubwgmRsDYZPrBrd-nm6-BVD4g70SYV7bzawCwYXuSnhGhrC6L9Bo_ydJ9SAqyDJtg9Wc4kskyad78tVYUpJ_eAqga3qQ6rSXOhrNrnXY-lig9w_50dRBUg5jVCy-V8MFjzjieS3KKq0EIR8XE1OQlnr0Yr4ri402S-yJ3NuH2E2K3xdntnVu0TjNL4Bbs5U9M34ApxflvlEj_y_9OcI_7wz5YDLa-MzwpU4f6zb7cI7Y9YzEBWzMw_Ag7yiORL8n_FKqNLa-rYAipSIHifIe1ltnOIR_eIy4W-YSs3CDAtvVDTHvOcegT7Y-pWft6FlMdGgDwauUhBeVIprYGKcJ-4UQ8_4sVaa7Iw7Dvtf_7GpGf9-Gc6SB-n2nT8-cytf6Mavn7AcA00T3V-yFJ1YMMivydSoJ40Rc1VpavpKmyf8jvp4iQ_shDUtwIlfqeJEaBnno5DPejBAgTvcWOAxIZYf1A5F0s-eT8McC4XM5XhljJmWMy-HmvWqSMircWHm0iXVOv9ndsV3Yj2sTFj_Psc_rB7Iz_Ek8edStKXz_m0m6wUm6T_2iwSkIWTu9YNG_8dx9zfxN5W3A-59EBssFgnB8jUhPWAVARteXAGX1TBdlrcGAXPICzsuVeAtNxWxwk0SbXwjB1TEZP87JKz7xsqsL92SGQxx52b54vRbXadhvBM4t-A9GCGx7poR9VAKCgDd5EuFXKK9RnYtnPW-Vj1n6XrOz-6TmPihz1otghDpzKzZ7UnTQdAHQ5zdGTSyJi6kOSWg-RDb0lzRy8ows=w538-h531-s-no?authuser=0"
                            />
                            <p>Ngân hàng: <strong>VietcomBank</strong></p>
                            <p>
                                Tên tài khoản:
                                <strong>NGUYEN PHUONG UYEN</strong>
                            </p>
                            <p>Số tài khoản: <strong>0251002756663</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </vue-final-modal>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
    showModal: {
        type: Boolean,
        default: false,
    },
});
const showModal = ref(false);
const emits = defineEmits<{
    (eventName: "update:modelValue", newValue: boolean): void;
}>();
watch(
    () => props.showModal,
    (newValue, oldValue) => {
        showModal.value = newValue;
    }
);
watch(showModal, (newValue, oldValue) => {
    if (newValue != props.showModal) {
        emits("update:modelValue", false);
    }
});
</script>

<style lang="scss" scoped>
::v-deep(.modal-container) {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
}
::v-deep(.modal-content) {
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    padding: 1rem;
    border-radius: 0.25rem;
    animation: fadeInUp 1s forwards;
}
.donate-modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    width: 90%;
    max-width: 750px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 12px;
}
.donate-modal-header {
    padding: 8px 16px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #f23b43;
    color: #fff;
    font-size: 30px;
    text-align: center;
    line-height: 40px;
    font-family: "Nunito Sans", sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .donate-modal-close {
        color: white;
        float: right;
        font-size: 33px;
        text-decoration: none;
        cursor: pointer;
    }
    strong {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    span {
        font-weight: bold;
    }
}
.donate-modal-body {
    padding: 0 15px;
    .donate-box {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        .donate-card {
            position: relative;
            width: calc(50% - 40px);
            margin: 20px;
            padding: 20px;
            border: 3px solid #f23b43;
            border-radius: 10px;
            h3 {
                padding: 0;
                margin: 0;
                margin-bottom: 20px;
                font-weight: bold;
                font-size: 18px;
                line-height: 30px;
                color: #000;
                text-align: center;
            }
            img {
                max-width: 150px;
                border: 1px solid #ccc;
                padding: 3px;
                margin: auto;
                display: block;
                width: 100%;
                height: auto;
            }
            p {
                font-weight: 400;
                line-height: 1.75em;
                margin: 10px 0 !important;
                font-size: 16px;
                color: #888;
                font-family: "Nunito Sans", sans-serif;
            }
            strong {
                color: #000;
                font-weight: bold;
            }
        }
    }
}
@keyframes fadeInUp {
    from {
        transform: translateY(-50%);
    }
    to {
        transform: translateY(0%);
    }
}

@media (max-width: 768px) {
    @keyframes fadeInUp {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(22%);
        }
    }
}
</style>