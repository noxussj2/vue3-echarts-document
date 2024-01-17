<template>
    <div class="demo">
        <div class="box"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
    </div>
</template>

<style lang="scss" scoped>
.demo {
    position: relative;
    width: 640px;
    height: 320px;
    background-color: rgba(198, 198, 198, 0.7);
    display: flex;

    .box {
        width: 100%;
        height: 200px;
        background-color: #5cd8a2;
    }

    .box2 {
        background-color: #ffcb3d;
    }

    .box3 {
        background-color: #ff8077;
    }
}
</style>
