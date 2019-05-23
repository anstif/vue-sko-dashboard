<template>
  <div class="mt-4">
    <code>Modal</code>
    <div class="mt-3"></div>

    <modal v-if="showModal1" @close="showModal1 = false">
      <h3 slot="header">Адресные объекты</h3>
      <div slot="body">
        <b-form-row>
          <b-col lg="8">
            <form-select-field
              v-model="selected"
              :options="options"
              :selected="selected"
              label="Операции с отходами"
            ></form-select-field>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col lg="8">
            <form-text-field placeholder="Адрес объекта" label="Адрес объекта" icon="location"></form-text-field>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col lg="3">
            <form-text-field label="ОКАТО"></form-text-field>
          </b-col>
          <b-col lg="4">
            <form-text-field label="Операции с отходами"></form-text-field>
          </b-col>
          <b-col lg="5">
            <form-text-field label="Категория"></form-text-field>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col lg="4">
            <form-text-field label="Тип эксплуатации"></form-text-field>
          </b-col>
          <b-col lg="4">
            <form-text-field label="С" icon="date"></form-text-field>
          </b-col>
        </b-form-row>
      </div>
      <button slot="footer" class="button">Добавить</button>
    </modal>
    <button class="button" @click="showModal1 = true">Show Modal</button>

    <modal v-if="showModal2" width="775px" @close="showModal2 = false">
      <h3 slot="header">Адресные объекты</h3>
      <button slot="footer" class="button">Добавить</button>
    </modal>
    <button class="button" @click="showModal2 = true">Custom Width</button>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import FormTextField from "../components/FormTextField.vue";
import FormSelectField from "../components/FormSelectField.vue";

export default {
  components: {
    Modal,
    FormTextField,
    FormSelectField
  },
  data() {
    return {
      showModal1: false,
      showModal2: false,
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
      ]
    };
  }
};
</script>

<style lang="scss">
</style>

