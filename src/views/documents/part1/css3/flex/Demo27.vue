<template>
    <div class="demo">
        <div class="box box1">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
    </div>
</template>

<style lang="scss" scoped>
.demo {
    width: 250px;
    background-color: #eee;
    display: flex;
}

.box {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box1 {
    flex-shrink: 1;
    background-color: #5cd8a2;
}

.box2 {
    flex-shrink: 0;
    background-color: #ffcb3d;
}

.box3 {
    flex-shrink: 1;
    background-color: #ff8077;
}
</style>
