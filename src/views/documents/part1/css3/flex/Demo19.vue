<template>
    <div class="demo">
        <div class="box">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
    </div>
</template>

<style lang="scss" scoped>
.demo {
    background-color: #eee;
    display: flex;
    flex-wrap: wrap;
    width: 250px;
    height: 300px;
    align-content: flex-start;
}

.box {
    width: 100px;
    height: 100px;
    background-color: #5cd8a2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box2 {
    background-color: #ffcb3d;
}

.box3 {
    background-color: #ff8077;
}
</style>
