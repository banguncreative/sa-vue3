<template>
    <div class="position-absolute w-100 z-index-1" style="top: -30px;">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
            <!-- <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /> -->
            <path id="gentle-wave" fill="#ABCD9E" d="M -161 44 c 30 0 58 -14 88 -14 s 58 18 88 18 s 58 -18 88 -18 s 59 25 89 18 v -44 h -352 z" />
            </defs>
            <g class="moving-waves">
            <use xlink:href="#gentle-wave" x="48" y="-1" fill-opacity="0.4"  />
            <use xlink:href="#gentle-wave" x="48" y="3" fill-opacity="0.35"  />
            <use xlink:href="#gentle-wave" x="48" y="5" fill-opacity="0.25" />
            <use xlink:href="#gentle-wave" x="48" y="8" fill-opacity="0.20"  />
            <use xlink:href="#gentle-wave" x="48" y="13" fill-opacity="0.15" />
            <use xlink:href="#gentle-wave" x="48" y="16" fill-opacity="0.7" />
            </g>
        </svg>
    </div>
</template>