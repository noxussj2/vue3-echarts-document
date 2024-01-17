<template>
    <div class="demo">
        <div class="box box1">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
    </div>
</template>

<style lang="scss" scoped>
.demo {
    background-color: #eee;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
}

.box {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box1 {
    order: 3;
    background-color: #5cd8a2;
}

.box2 {
    order: 2;
    background-color: #ffcb3d;
}

.box3 {
    order: 1;
    background-color: #ff8077;
}
</style>
