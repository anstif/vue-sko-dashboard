<template>
  <div class="mt-4">
    <div>
      <code>FormTextField</code>
      <b-row>
        <b-col lg="4" class="mt-3">
          <form-datepicker-field v-model="model" label="С"></form-datepicker-field>
          <div class="mt-1"></div>
          <code>{{ model }}</code>
        </b-col>

        <b-col lg="2" class="mt-3">
          <form-datepicker-field
            v-model="model2"
            placeholder="С"
            label="С"
            message="Не обязательно"
          ></form-datepicker-field>
        </b-col>

        <b-col lg="2" class="mt-3">
          <form-datepicker-field v-model="model2" label="C" :is-error="true" error="Ошибка"></form-datepicker-field>
        </b-col>

        <b-col lg="2" class="mt-3">
          <form-datepicker-field v-model="model2" label="C" :is-valid="true"></form-datepicker-field>
        </b-col>

        <b-col lg="2" class="mt-3">
          <form-datepicker-field v-model="model2" placeholder="20.09.2019" label="С"></form-datepicker-field>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import FormDatepickerField from "../components/FormDatepickerField.vue";

export default {
  components: {
    FormDatepickerField
  },
  data() {
    return {
      model: "11.12.2018",
      model2: ""
    };
  }
};
</script>

<style lang="scss">
</style>
