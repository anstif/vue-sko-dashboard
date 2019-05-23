<template>
  <div class="form-radio-button__container">
    <label class="form-radio-button__label">
      <input
        class="form-radio-button__input"
        type="radio"
        :name="name"
        :value="value"
        :disabled="disabled"
        :required="required"
        :checked="radioState"
        @change="toggle"
      >
      <div class="form-radio-button__text">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: "model",
    event: "input"
  },
  props: {
    model: {
      type: String | Array,
      default: undefined
    },
    checked: Boolean,
    value: String,
    name: String,
    required: Boolean,
    disabled: Boolean
  },
  data() {
    return {};
  },
  computed: {
    radioState() {
      if (this.model === undefined) return this.checked;
      return this.model === this.value;
    }
  },
  methods: {
    toggle() {
      if (this.disabled) return;
      this.$emit("input", this.state ? "" : this.value);
    }
  }
};
</script>

<style lang="scss">
.form-radio-button {
  &__container {
    display: block;
    line-height: 18px;
    &:not(:last-child) {
      margin-bottom: 9px;
    }
  }

  &__label {
    display: inline-block;
    user-select: none;
    margin: 0;
  }

  &__input {
    display: none;
  }

  &__text {
    font-size: 0.875rem;
    cursor: pointer;
    display: inline-flex;
    &:before {
      content: "";
      display: inline-block;
      background-color: #fafafa;
      width: 18px;
      height: 18px;
      margin-right: 8px;
      border-radius: 50%;
      border: 1px solid #ccc;
    }

    &:hover:before {
      border-color: #17a05e;
    }
  }

  &__input:checked + &__text:before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjMiIGZpbGw9IiNmZmYiLz48L3N2Zz4=);
    background-color: #17a05e;
    border-color: #17a05e;
  }

  &__input:disabled + &__text {
    pointer-events: none;
    &:before {
      opacity: 0.3;
    }
  }
}
</style>
