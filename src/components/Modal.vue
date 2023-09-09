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
                            <img class="qr-code-image" src="/images/qr1.JPG" />
                            <p>Ngân hàng: <strong>VietinBank</strong></p>
                            <p>
                                Tên tài khoản: <strong>TRAN NGOC LINH</strong>
                            </p>
                            <p>Số tài khoản: <strong>103873285674</strong></p>
                        </div>
                        <div class="donate-card">
                            <h3>Mừng cưới đến cô dâu</h3>
                            <img class="qr-code-image" src="/images/qr2.JPG" />
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