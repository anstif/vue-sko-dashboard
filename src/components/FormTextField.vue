<template>
  <label
    class="field"
    :class="{ 'field--is-error': isError, 'field--is-valid': isValid, 'field--is-disabled': isDisabled }"
    :style="{ width: width }"
  >
    <div class="field__label" v-if="label">{{ label }}</div>
    <div class="field__input-box">
      <input
        class="field__input"
        :type="type"
        :placeholder="placeholder"
        v-model="content"
        @input="handleInput"
      >
      <icon class="field__icon" v-if="icon" :id="icon"></icon>
    </div>
    <div class="field__error" v-if="error">{{ error }}</div>
    <div class="field__message" v-if="message">{{ message }}</div>
  </label>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    value: String,
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
      content: this.value
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.content);
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
  }

  &__input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 0.5rem;
    min-height: 32px;
    outline: 0;
    font-family: "Open Sans", sans-serif;
    width: 100%;
    color: #333;
    font-size: 0.75rem;
    line-height: 1rem;
    &::placeholder {
      color: #ccc;
    }
    &:focus {
      border-color: #17a05e;
    }
    &-box {
      position: relative;
    }
    &::-ms-clear {
      display: none;
    }
  }

  &__icon {
    position: absolute;
    right: 8px;
    top: 4px;
    color: rgba(0, 0, 0, 0.67);
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

  &--is-valid &__input {
    border-color: #17a05e;
  }

  &--is-error &__error {
    display: block;
  }
  &--is-error &__message {
    display: none;
  }
  &--is-error &__input {
    border-color: #ff6633;
  }

  &--is-disabled {
    pointer-events: none;
  }
  &--is-disabled &__input {
    color: rgba(51, 51, 51, 0.5);
    pointer-events: none;
  }

  &--lg &__input {
    min-height: 39px;
    font-size: 14px;
    padding: 0 1rem;
  }
}
</style>
