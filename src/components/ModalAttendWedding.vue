<template>
    <div>
        <vue-final-modal
            v-model="showModal"
            classes="modal-container"
            content-class="modal-content"
        >
            <div class="main-modal">
                <div class="header">Xác nhận tham dự thành công</div>
                <div class="body">
                    Cảm ơn
                    <span style="font-weight: bold; color: #000">{{
                        props.name
                    }}</span>
                    đã tham dự chung vui cùng gia đình chúng tôi.
                </div>
                <div class="footer">
                    <div @click="showModal = !showModal">OK</div>
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
    name: {
        type: String,
        default: "",
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
::v-deep(.vfm--inset) {
    padding: 20px !important;
}
.main-modal {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
}
.header {
    width: 100%;
    background: red;
    text-align: center;
    padding: 16px 0px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    color: #fff;
    font-size: 21px;
}
.body {
    padding: 12px 24px;
    text-align: center;
}
.footer {
    padding: 12px 0px;
    div {
        background: red;
        padding: 8px 16px;
        border-radius: 12px;
        color: #fff;
        cursor: pointer;
    }
}
@keyframes fadeInUp {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(-10%);
    }
}

@media (max-width: 768px) {
    @keyframes fadeInUp {
        from {
            transform: translateY(-50%);
        }
        to {
            transform: translateY(0%);
        }
    }
}
</style>