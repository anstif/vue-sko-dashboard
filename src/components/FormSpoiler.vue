<template>
  <div class="form-spoiler" :class="{ 'is-active': active }">
    <div class="form-spoiler__header" @click.prevent="active = !active">
      <slot name="header"></slot>
    </div>
    <div class="form-spoiler__content" v-if="active">
      <div class="form-spoiler__content-box">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: this.selected
    };
  }
};
</script>

<style lang="scss">
.form-spoiler {
  &__header {
    padding: 0;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    &:after {
      content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTcuNCA4LjZMNiAxMGw2IDYgNi02LTEuNC0xLjQtNC42IDQuNi00LjYtNC42eiIvPjwvc3ZnPg==);
      transform: rotate(0deg);
      display: block;
      height: 24px;
      width: 24px;
      margin-left: 8px;
      opacity: 0.5;
    }
  }

  &__content-box {
    padding: 0;
  }

  &.is-active > &__header:after {
    transform: rotate(180deg);
  }
}
</style>
