<template>
    <div>
        <svg
            class="heart-loader"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 90 90"
            version="1.1"
        >
            <g class="heart-loader__group">
                <path
                    class="heart-loader__square"
                    stroke-width="1"
                    fill="none"
                    d="M0,30 0,90 60,90 60,30z"
                />
                <path
                    class="heart-loader__circle m--left"
                    stroke-width="1"
                    fill="none"
                    d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
                />
                <path
                    class="heart-loader__circle m--right"
                    stroke-width="1"
                    fill="none"
                    d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
                />
                <path
                    class="heart-loader__heartPath"
                    stroke-width="2"
                    d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0"
                />
            </g>
        </svg>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
body {
    background-color: black;
}
*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

$strokeColor: grey;
$heartColor: #db3434;
$size: 50vw; // change this to manipulate overall size
$totalAnim: 3s;
$delay: 0.1s;
$squareLen: 240;
$circleLen: 188.522;
$heartLen: 308.522;
$svgSize: 90px;
$circleW: 60px;

.heart-loader {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    margin-top: calc($size / -2);
    width: $size;
    height: $size;
    overflow: visible;
    // transform: translate(-45%);
    &__group {
        transform-origin: 0 $svgSize;
        animation: group-anim $totalAnim $delay;
    }

    &__square {
        stroke: $strokeColor;
        stroke-dasharray: $squareLen, $squareLen;
        stroke-dashoffset: $squareLen;
        animation: square-anim $totalAnim $delay;
    }

    &__circle {
        stroke: $strokeColor;
        stroke-dasharray: $circleLen, $circleLen;
        stroke-dashoffset: $circleLen;
        transform-origin: $circleW calc($circleW / -2);

        &.m--left {
            animation: left-circle-anim $totalAnim $delay forwards;
        }

        &.m--right {
            animation: right-circle-anim $totalAnim $delay forwards;
        }
    }

    &__heartPath {
        stroke: $heartColor;
        fill: transparent;
        stroke-dasharray: $heartLen, $heartLen;
        stroke-dashoffset: $heartLen;
        animation: heart-anim $totalAnim $delay forwards;
    }
}
@keyframes square-anim {
    12% {
        stroke-dashoffset: 0;
    }
    43% {
        stroke-dashoffset: 0;
        opacity: 1;
    }
    85% {
        stroke-dashoffset: 0;
        opacity: 0;
    }
    100% {
        stroke-dashoffset: 0;
        opacity: 0;
    }
}
@keyframes left-circle-anim {
    12% {
        stroke-dashoffset: $circleLen;
    }
    31% {
        stroke-dashoffset: 0;
        transform: translateY(0);
    }
    41% {
        stroke-dashoffset: 0;
        transform: translateY(calc($circleW / -2));
    }
    43% {
        stroke-dashoffset: 0;
        transform: translateY(calc($circleW / -2));
        opacity: 1;
    }
    85% {
        stroke-dashoffset: 0;
        transform: translateY(calc($circleW / -2));
        opacity: 0;
    }
    100% {
        stroke-dashoffset: 0;
        transform: translateY(calc($circleW / -2));
        opacity: 0;
    }
}
@keyframes right-circle-anim {
    12% {
        stroke-dashoffset: $circleLen;
    }
    31% {
        stroke-dashoffset: 0;
        transform: translateX(0);
    }
    41% {
        stroke-dashoffset: 0;
        transform: translateX(calc($circleW / 2));
    }
    43% {
        stroke-dashoffset: 0;
        transform: translateX(calc($circleW / 2));
        opacity: 1;
    }
    85% {
        stroke-dashoffset: 0;
        transform: translateX(calc($circleW / 2));
        opacity: 0;
    }
    100% {
        stroke-dashoffset: 0;
        transform: translateX(calc($circleW / 2));
        opacity: 0;
    }
}
@keyframes group-anim {
    43% {
        transform: rotate(0);
    }
    54% {
        transform: rotate(-45deg);
    }
    90% {
        transform: rotate(-45deg);
        opacity: 1;
    }
    97% {
        transform: rotate(-45deg);
        opacity: 0;
    }
    100% {
        transform: rotate(-45deg);
        opacity: 0;
    }
}
@keyframes heart-anim {
    55% {
        stroke-dashoffset: $heartLen;
        fill: transparent;
    }
    70% {
        stroke-dashoffset: 0;
        fill: transparent;
    }
    87% {
        stroke-dashoffset: 0;
        fill: $heartColor;
    }
    100% {
        stroke-dashoffset: 0;
        fill: $heartColor;
    }
}

.other {
    position: absolute;
    left: 0;
    bottom: 0.5rem;
    width: 100%;
    text-align: right;

    &__link {
        font-size: 1.3rem;
        margin: 0 1rem;
    }
}
</style>