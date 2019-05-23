<template>
  <div class="context-menu">
    <button class="button button--single-icon" @click="isOpen = !isOpen">
      <icon id="more"></icon>
    </button>
    <div class="context-menu__dropdown" v-if="isOpen" @click="isOpen = false">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: this.open
    };
  }
};
</script>

<style lang="scss">
.context-menu {
  display: inline-block;
  position: relative;

  &__dropdown {
    position: absolute;
    left: 0;
    top: 34px;
    background-color: #fff;
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    z-index: 9;
    min-width: 194px;
    > * {
      font-size: 12px;
      line-height: 18px;
      color: #666;
      display: block;
      padding: 10px 1rem;
      text-decoration: none;
      border-radius: 2px;
      &:hover {
        box-shadow: 0 2px 8px rgba(23, 160, 94, 0.3);
        text-decoration: none;
        color: #666;
      }
    }
  }
}
</style>

