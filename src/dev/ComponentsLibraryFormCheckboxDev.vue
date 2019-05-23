<template>
  <div class="mt-4">
    <code>form-checkbox</code>
    <div class="mt-3">
      <form-checkbox
        v-model="selectedSingle"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
        name="name2"
      >{{ option.text }}</form-checkbox>
    </div>
    <div class="mt-3">
      <code>{{ selectedSingle }}</code>
    </div>
    <div class="mt-5">
      <form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
        name="name"
      >{{ option.text }}</form-checkbox>
    </div>
    <div class="mt-3">
      <code>{{ selected }}</code>
    </div>
  </div>
</template>

<script>
import FormCheckbox from "../components/FormCheckbox.vue";

export default {
  components: {
    FormCheckbox
  },
  data() {
    return {
      selectedSingle: [],
      option: {
        text: "Субъект малого и среднего предпринимательства",
        value: "1"
      },
      selected: ["2"],
      options: [
        { text: "Образование", value: "1" },
        { text: "Транспортирование", value: "2" },
        { text: "Накопление", value: "3", disabled: true },
        { text: "Хранение", value: "4" }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
