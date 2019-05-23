<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container" :style="{ maxWidth: width }">
          <button
            class="modal__close button button--single-icon button--icon-lg button--color-grey"
            @click="$emit('close')"
          >
            <icon id="cross"></icon>
          </button>

          <div class="modal__header">
            <slot name="header"></slot>
          </div>

          <div class="modal__body">
            <slot name="body"></slot>
          </div>

          <div class="modal__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: String
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    display: table;
    transition: opacity 0.3s ease;
  }

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    max-width: 585px;
    margin: 0px auto;
    padding: 32px;
    background-color: #fff;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12),
      2px 4px 4px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    position: relative;
  }

  &__close {
    position: absolute;
    top: 30px;
    right: 32px;
    min-height: 32px;
  }

  &__body {
    margin: 24px 0;
  }

  &__footer:empty {
    margin-top: -24px;
  }
}

.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

