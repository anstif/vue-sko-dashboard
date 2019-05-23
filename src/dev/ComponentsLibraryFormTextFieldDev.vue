<template>
  <div class="mt-4">
    <div>
      <code>FormTextField</code>
      <b-row>
        <b-col lg="4" class="mt-3">
          <form-text-field
            v-model="model"
            type="text"
            placeholder="Адрес объекта"
            label="Адрес объекта"
            icon="location"
          ></form-text-field>
          <div class="mt-1"></div>
          <code>{{ model }}</code>
        </b-col>

        <b-col lg="2" class="mt-3">
          <form-text-field
            v-model="model2"
            type="text"
            placeholder="Норматив, год/тонн"
            label="Норматив, год/тонн"
            message="Не обязательно"
          ></form-text-field>
        </b-col>

        <b-col lg="6" class="mt-3">
          <form-text-field
            v-model="model2"
            type="text"
            placeholder="Наименование"
            label="Наименование"
            :is-valid="true"
          ></form-text-field>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="4" class="mt-3">
          <form-text-field
            v-model="model2"
            type="text"
            placeholder="ОКАТО"
            label="ОКАТО"
            error="Это не похоже на ОКАТО"
            :is-error="true"
          ></form-text-field>
        </b-col>

        <b-col lg="2" class="mt-3">
          <form-text-field
            v-model="model2"
            type="text"
            placeholder="20.09.2019"
            label="С"
            icon="date"
          ></form-text-field>
        </b-col>

        <b-col lg="6" class="mt-3">
          <form-text-field
            v-model="model2"
            type="text"
            placeholder="Наименование"
            label="Наименование"
            :is-error="true"
          ></form-text-field>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="4" class="mt-3">
          <form-text-field
            type="text"
            value="Значение"
            placeholder="Тип отходов"
            label="Тип отходов"
            :is-disabled="true"
          ></form-text-field>
        </b-col>

        <b-col lg="2" class="mt-3">
          <form-text-field
            type="text"
            value="Значение"
            label="Класс"
            placeholder="Класс"
          ></form-text-field>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import FormTextField from "../components/FormTextField.vue";

export default {
  components: {
    FormTextField
  },
  data() {
    return {
      model: "Юж. Чертаново, ул. Тупиковая,12",
      model2: ""
    };
  }
};
</script>

<style lang="scss">
</style>
