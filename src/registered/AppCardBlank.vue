<template>
    <div class="app-card-blank unset">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.app-card-blank {
    margin-top: 10px;
    padding: 22px 24px;
    color: #213547;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07);
    overflow: auto;
}
</style>
