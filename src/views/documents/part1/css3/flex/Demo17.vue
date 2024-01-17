<template>
    <div class="demo">
        <div class="box">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
        <div class="border"></div>
    </div>
</template>

<style lang="scss" scoped>
.demo {
    position: relative;
    background-color: #eee;
    display: flex;
    width: 300px;
    height: 200px;
    align-items: baseline;
}

.box {
    width: 100px;
    height: 100px;
    font-size: 20px;
    background-color: #5cd8a2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box2 {
    font-size: 40px;
    background-color: #ffcb3d;
}

.box3 {
    background-color: #ff8077;
}

.border {
    position: absolute;
    left: 0;
    top: 64px;
    width: 100%;
    height: 2px;
    background-color: #8a83ec;
}
</style>
