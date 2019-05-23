<template>
  <div class="mt-4">
    <code>FormSelectField</code>
    <b-row>
      <b-col lg="4" class="mt-3">
        <form-select-field v-model="selected" :options="options" label="Операции с отходами"></form-select-field>
        <div class="mt-1"></div>
        <code>{{ selected }}</code>
      </b-col>

      <b-col lg="2" class="mt-3">
        <form-select-field
          v-model="selected"
          :options="options"
          :selected="selected"
          label="Операции с отходами"
        ></form-select-field>
      </b-col>

      <b-col lg="2" class="mt-3">
        <form-select-field
          v-model="selected"
          :options="options"
          label="Норматив, год/тонн"
          error="Обязательное поле"
          :selected="selected"
          :is-error="true"
        ></form-select-field>
      </b-col>

      <b-col lg="2" class="mt-3">
        <form-select-field
          v-model="selected"
          :options="options"
          placeholder="Наименование"
          label="Наименование"
          :selected="selected"
          message="Сообщение"
          :is-valid="true"
        ></form-select-field>
      </b-col>

      <b-col lg="2" class="mt-3">
        <form-select-field
          v-model="selected"
          :options="options"
          placeholder="Наименование"
          label="Наименование"
          :selected="selected"
          :is-disabled="true"
        ></form-select-field>
      </b-col>

      <b-col lg="12" class="mt-3 d-flex justify-content-between">
        <form-select-field
          v-model="selected"
          :options="options"
          label="Наименование"
          :selected="selected"
          width="410px"
        ></form-select-field>

        <form-select-field
          v-model="selected"
          :options="options"
          label="Наименование"
          :selected="selected"
          width="330px"
        ></form-select-field>

        <form-select-field
          v-model="selected"
          :options="options"
          label="Наименование"
          :selected="selected"
          width="220px"
        ></form-select-field>

        <form-select-field
          v-model="selected"
          :options="options"
          label="Наименование"
          :selected="selected"
          width="180px"
        ></form-select-field>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FormSelectField from "../components/FormSelectField.vue";

export default {
  components: {
    FormSelectField
  },
  data() {
    return {
      selected: "6",
      options: [
        {
          text: "Образование",
          value: "1"
        },
        {
          text: "Накопление",
          value: "2",
          disabled: true
        },
        {
          text: "Хранение",
          value: "3",
          disabled: true
        },
        {
          text: "Захоранение",
          value: "4"
        },
        {
          text: "Обработка",
          value: "5"
        },
        {
          text: "Утилизация",
          value: "6"
        },
        {
          text: "Обезвреживание",
          value: "7"
        }
      ],
      model: "Юж. Чертаново, ул. Тупиковая,12",
      model2: ""
    };
  }
};
</script>

<style lang="scss">
</style>
