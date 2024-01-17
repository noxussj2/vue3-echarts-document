<template>
    <div class="base-comment">
        <div class="comment__container">
            <AppComment />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.base-comment {
    margin-top: 64px;
    padding: 16px 24px 0;

    .comment__container {
        position: relative;
        max-width: 1152px;
        border-radius: 12px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        > div {
            width: 100%;
        }
    }
}

@media (min-width: 640px) {
    .base-comment {
        padding: 16px 48px 0;
    }
}

@media (min-width: 1025px) {
    .base-comment {
        padding: 16px 64px 0;

        .comment__container {
            margin: 0 auto;
        }
    }
}
</style>
