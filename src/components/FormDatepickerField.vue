<template>
  <label
    class="field"
    :class="{ 'field--is-error': isError, 'field--is-valid': isValid, 'field--is-disabled': isDisabled }"
  >
    <div class="field__label" v-if="label">{{ label }}</div>
    <div class="field__input-box">
      <date-picker
        v-model="content"
        @input="handleInput"
        :lang="lang"
        format="DD.MM.YYYY"
        :first-day-of-week="1"
        value-type="format"
        input-class="field__input"
        :placeholder="placeholder"
        width="100%"
        :clearable="false"
      >
        <span slot="calendar-icon"></span>
      </date-picker>
      <icon class="field__icon" id="date"></icon>
    </div>
    <div class="field__error" v-if="error">{{ error }}</div>
    <div class="field__message" v-if="message">{{ message }}</div>
  </label>
</template>

<script>
import Icon from "./Icon.vue";
import DatePicker from "vue2-datepicker";

export default {
  components: {
    Icon,
    DatePicker
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
    isError: Boolean,
    isValid: Boolean,
    isDisabled: Boolean
  },
  data() {
    return {
      content: this.value,
      lang: {
        days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь"
        ],
        placeholder: {
          date: "Выберите дату"
        }
      }
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
.mx {
  &-datepicker-popup {
    border-radius: 4px;
    box-shadow: 0px 15px 32px rgba(0, 0, 0, 0.12);
    border: 0;
    margin-top: -36px;
  }
  &-calendar {
    font-family: "OpenSans", sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    padding: 12px;
  }
  &-calendar-header {
    line-height: 21px;
  }
  &-icon-last-year,
  &-icon-next-year {
    display: none;
  }
  &-icon-last-month,
  &-icon-next-month {
    font-size: 0;
    display: block;
    width: 24px;
    height: 24px;
    padding: 0;
    opacity: 0.3;
    transition: 0.2s ease;
    &:before {
      display: block;
      width: 24px;
      height: 24px;
      content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjQxIDE2LjQwNjRMMTAuODMgMTJsNC41OC00LjQwNjQxTDE0IDYuMjM5OTkgOCAxMmw2IDUuNzYgMS40MS0xLjM1MzZ6Ii8+PC9zdmc+);
    }
    &:hover {
      opacity: 0.5;
    }
    &:active {
      opacity: 0.7;
    }
  }
  &-icon-last-month {
    margin-left: -5px;
  }
  &-icon-next-month {
    margin-right: -5px;
    &:before {
      transform: rotate(180deg);
    }
  }
  &-current-month,
  &-current-year {
    font-weight: bold;
    &:hover {
      color: #179f5f !important;
    }
  }
  &-current-month:after {
    content: ",";
  }
  &-calendar-content .cell {
    font-weight: 600;
    border-radius: 16px;
    padding: 0 5px;
    font-size: 12px;
    line-height: 30px;
    &.actived {
      background-color: #179f5f;
    }
    &.today {
      color: #179f5f;
      font-weight: 600;
    }
  }
  &-panel-date th {
    height: 33px;
    padding-bottom: 4px;
  }
  &-panel-date td.last-month,
  &-panel-date td.next-month {
    color: #ccc;
  }
  &-panel-month {
    padding-top: 16px;
  }
  &-panel-year {
    padding-top: 30px;
  }
}

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
