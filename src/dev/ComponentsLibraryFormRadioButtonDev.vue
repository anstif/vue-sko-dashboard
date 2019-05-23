<template>
  <div class="mt-4">
    <code>form-radio-button</code>
    <div class="mt-3">
      <form-radio-button
        v-for="option in optionDouble"
        v-model="selectedDouble"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
        name="radio1"
      >{{ option.text }}</form-radio-button>
    </div>
    <div class="mt-3">
      <code>{{ selectedDouble }}</code>
    </div>
    <div class="mt-5">
      <form-radio-button
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
        name="radio2"
      >{{ option.text }}</form-radio-button>
    </div>
    <div class="mt-3">
      <code>{{ selected }}</code>
    </div>
  </div>
</template>

<script>
import FormRadioButton from "../components/FormRadioButton.vue";

export default {
  components: {
    FormRadioButton
  },
  data() {
    return {
      selectedDouble: "",
      optionDouble: [
        { text: "Образование", value: "1" },
        { text: "Транспортирование", value: "2" }
      ],
      selected: "2",
      options: [
        { text: "Образование", value: "1" },
        { text: "Транспортирование", value: "2", checked: true },
        { text: "Накопление", value: "3", disabled: true },
        { text: "Хранение", value: "4" }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
