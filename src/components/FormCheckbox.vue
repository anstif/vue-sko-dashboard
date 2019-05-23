<template>
  <div class="form-checkbox__container">
    <label class="form-checkbox__label">
      <input
        class="form-checkbox__input"
        type="checkbox"
        :name="name"
        :value="value"
        :disabled="disabled"
        :required="required"
        :checked="checkboxState"
        @change="toggle()"
      >
      <div class="form-checkbox__text">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: "model",
    event: "change"
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
    checkboxState() {
      if (this.model === undefined) return this.checked;
      if (Array.isArray(this.model))
        return this.model.indexOf(this.value) !== -1;
      return this.model;
    }
  },
  methods: {
    toggle() {
      if (this.disabled) return;
      let value = this.model;
      if (Array.isArray(value)) {
        value = value.slice();
        const i = value.indexOf(this.value);
        if (i === -1) value.push(this.value);
        else value.splice(i, 1);
      } else value = !this.checkboxState;
      this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss">
.form-checkbox {
  &__container {
    display: block;
    line-height: 16px;
    &:not(:last-child) {
      margin-bottom: 15px;
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
      width: 16px;
      height: 16px;
      margin-right: 12px;
      border-radius: 2px;
      border: 1px solid #ccc;
    }

    &:hover:before {
      border-color: #17a05e;
    }
  }

  &__input:checked + &__text:before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgZmlsbD0ibm9uZSI+PHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zIDYuNjU1NTJsMi44Mjg0MyAyLjgyODQyIDUuNjU1NzctNS42NTU3NiIvPjwvc3ZnPg==);
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
