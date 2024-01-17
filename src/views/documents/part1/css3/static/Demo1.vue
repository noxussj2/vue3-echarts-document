<template>
    <div class="demo">
        <div class="box"></div>

        <div class="mark1">200px</div>
        <div class="mark2">200px</div>
    </div>
</template>

<style lang="scss" scoped>
.demo {
    position: relative;
    width: 640px;
    height: 320px;
    background-color: rgba(198, 198, 198, 0.7);

    .box {
        width: 200px;
        height: 200px;
        background-color: #5cd8a2;
    }

    .mark1 {
        position: absolute;
        left: 0;
        top: 200px;
        width: 200px;
        text-align: center;
        z-index: 10;
    }

    .mark2 {
        position: absolute;
        left: 112px;
        top: 88px;
        width: 200px;
        text-align: center;
        transform: rotate(90deg);
        z-index: 10;
    }
}
</style>
