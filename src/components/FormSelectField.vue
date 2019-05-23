<template>
  <div
    class="field"
    :class="{ 'field--is-error': isError, 'field--is-valid': isValid, 'field--is-disabled': isDisabled }"
    :style="{ width: width }"
  >
    <div class="field__label" v-if="label">{{ label }}</div>
    <div class="field__input-select-box">
      <div class="field__input-select-text">{{ selectText }}</div>
      <input
        class="field__input-select"
        type="text"
        :placeholder="placeholder"
        v-model="content"
        @click="toggleOptions"
        @blur="hideOptions"
        readonly
      >
      <icon class="field__icon" id="arrow-drop-down"></icon>
      <div class="field__options" :class="{ 'is-show': showOptions }">
        <div
          class="field__option"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          :style="{ 'min-width': width }"
          v-bind:class="{
          'field__option--is-disabled': option.disabled,
          'field__option--is-selected': content == option.value
          }"
        >{{ option.text }}</div>
      </div>
    </div>
    <div class="field__error" v-if="error">{{ error }}</div>
    <div class="field__message" v-if="message">{{ message }}</div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  },
  props: {
    placeholder: {
      type: String,
      default: "Не выбрано"
    },
    selected: {
      type: [String, Number],
      default: null
    },
    options: Array,
    label: String,
    message: String,
    error: String,
    icon: String,
    isError: Boolean,
    isValid: Boolean,
    isDisabled: Boolean,
    width: String
  },
  data() {
    return {
      content: this.selected,
      showOptions: false
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.content);
    },
    selectOption(option) {
      this.content = option.value;
      this.$emit("selected", option);
      this.toggleOptions();
      this.handleInput();
    },
    toggleOptions() {
      this.showOptions = !this.showOptions;
    },
    hideOptions() {
      setTimeout(() => {
        this.showOptions = false;
      }, 128);
    }
  },
  computed: {
    selectText() {
      if (this.content === null) return;
      let t = this;
      return this.options.find(function(el) {
        return "" + el.value === "" + t.content;
      }).text;
    }
  }
};
</script>

<style lang="scss">
.field {
  display: block;
  margin: 0;

  &__label {
    font-size: 14px;
    line-height: 20px;
    color: #111714;
    margin-bottom: 4px;
    user-select: none;
  }

  &__input-select {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 0.5rem;
    width: 100%;
    min-height: 32px;
    font-size: 0;
    outline: 0;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 0.75rem;
    line-height: 18px;
    color: #fff;
    &::placeholder {
      color: #ccc;
    }
    &:focus {
      border-color: #17a05e;
      & + .icon {
        color: #17a05e;
      }
    }
    &-box {
      position: relative;
    }
    &::-ms-clear {
      display: none;
    }
    &-text {
      font-family: "Open Sans", sans-serif;
      color: #333;
      font-size: 0.75rem;
      line-height: 32px;
      position: absolute;
      border-radius: 3px;
      top: 1px;
      bottom: 1px;
      left: 9px;
      pointer-events: none;
      background: #fff;
    }
  }

  &__icon {
    position: absolute;
    right: 8px;
    top: 4px;
    color: rgba(0, 0, 0, 0.67);
    pointer-events: none;
  }

  &__message,
  &__error {
    font-size: 10px;
    line-height: 14px;
    color: rgba(17, 23, 20, 0.5);
    margin-top: 4px;
  }
  &__error {
    color: #ff6633;
    display: none;
  }

  &__options {
    background: #ffffff;
    box-shadow: 0px 15px 32px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    position: absolute;
    padding-bottom: 4px;
    z-index: 9;
    &:not(.is-show) {
      display: none;
    }
  }
  &__option {
    font-size: 12px;
    line-height: 18px;
    padding: 12px 37px 11px 36px;
    cursor: pointer;
    user-select: none;
    position: relative;
    &:hover {
      color: #17a05e;
    }
    &--is-disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    &--is-selected {
      color: #17a05e;
      &:before {
        content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMSIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzE3QTA1RSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC43NSA4LjEyNzVMMS42MjI1IDUgLjU1NzQ5NSA2LjA1NzUxIDQuNzUgMTAuMjVsOS05TDEyLjY5MjUuMTkyNTA1IDQuNzUgOC4xMjc1eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+);
        position: absolute;
        top: 13px;
        left: 10px;
      }
    }
  }

  &--is-valid &__input-select {
    border-color: #17a05e;
  }

  &--is-error &__error {
    display: block;
  }
  &--is-error &__message {
    display: none;
  }
  &--is-error &__input-select {
    border-color: #ff6633;
  }

  &--is-disabled {
    pointer-events: none;
  }
  &--is-disabled &__input-select {
    background: #fff;
    pointer-events: none;
  }
  &--is-disabled &__input-select-text,
  &--is-disabled &__icon {
    color: rgba(51, 51, 51, 0.5);
  }
}
</style>
