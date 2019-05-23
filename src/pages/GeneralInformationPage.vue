<template>
  <b-row>
    <b-col lg="9" offset-lg="3">
      <div class="d-flex mt-4 mb-4 align-items-baseline">
        <h3 class="mr-4">Общие сведения</h3>
        <router-link class="link text mr-5" to="/general_information/history">История</router-link>
        <p class="ml-4 mr-3">Отчетный период</p>
        <form-select-field
          v-model="reportingPeriodSelected"
          :options="reportingPeriodOptions"
          :selected="reportingPeriodSelected"
          placeholder="Год"
          width="84px"
        ></form-select-field>
      </div>
    </b-col>

    <b-col lg="6" offset-lg="3" class="mt-2">
      <form-spoiler :selected="selectedSpoilers">
        <div slot="header">
          <h5>Организация</h5>
        </div>
        <div slot="body">
          <form-spoiler :selected="selectedSpoilers" class="mt-3">
            <div slot="header">
              <p>Полное наименование</p>
            </div>
            <div slot="body">
              <form-text-field
                class="mt-1 mb-2 field--lg"
                :is-disabled="true"
                value="Полное наименование"
              ></form-text-field>
            </div>
          </form-spoiler>
          <form-spoiler :selected="selectedSpoilers">
            <div slot="header">
              <p>Краткое наименование</p>
            </div>
            <div slot="body">
              <form-text-field class="mt-1 mb-2 field--lg" value="Краткое наименование"></form-text-field>
            </div>
          </form-spoiler>
        </div>
      </form-spoiler>

      <form-spoiler :selected="selectedSpoilers" class="mt-4">
        <div slot="header">
          <h5>Категория бизнеса</h5>
        </div>
        <div slot="body">
          <div class="pb-2"></div>
          <form-radio-button
            v-for="option in businessCategoryRadio"
            v-model="businessCategoryRadioChecked"
            :key="option.value"
            :value="option.value"
            name="businessCategoryRadio"
          >{{ option.text }}</form-radio-button>
        </div>
      </form-spoiler>

      <form-spoiler :selected="selectedSpoilers" class="mt-4">
        <div slot="header">
          <h5>Тип субъекта</h5>
        </div>
        <div slot="body">
          <div class="pb-2"></div>
          <form-radio-button
            v-for="option in subjectTypeRadio"
            v-model="subjectTypeChecked"
            :key="option.value"
            :value="option.value"
            name="subjectTypeRadio"
          >{{ option.text }}</form-radio-button>
        </div>
      </form-spoiler>

      <form-spoiler :selected="selectedSpoilers" class="mt-4">
        <div slot="header">
          <h5>Адрес</h5>
        </div>
        <div slot="body">
          <form-text-field
            class="mt-3 mb-2 field--lg"
            :is-disabled="true"
            label="Юридический адрес"
          ></form-text-field>
          <form-text-field class="mt-1 mb-2 field--lg" label="Почтовый наименование"></form-text-field>
        </div>
      </form-spoiler>

      <form-spoiler :selected="selectedSpoilers" class="mt-4">
        <div slot="header">
          <h5>Реквизиты</h5>
        </div>
        <div slot="body">
          <form-text-field class="mt-3 mb-2 field--lg" :is-disabled="true" label="ИНН"></form-text-field>
          <form-text-field class="mt-3 mb-2 field--lg" :is-disabled="true" label="ОГРН"></form-text-field>
          <form-text-field class="mt-1 mb-2 field--lg" label="ОКПО"></form-text-field>
          <form-text-field class="mt-1 mb-2 field--lg" label="ОКВЭД"></form-text-field>
          <form-text-field class="mt-1 mb-2 field--lg" label="ОКОГУ"></form-text-field>
          <form-text-field class="mt-1 mb-2 field--lg" label="ОКОПФ"></form-text-field>
          <form-text-field class="mt-1 mb-2 field--lg" label="ОКФС"></form-text-field>
        </div>
      </form-spoiler>

      <form-spoiler :selected="selectedSpoilers" class="mt-4">
        <div slot="header">
          <h5>Операции с отходами</h5>
        </div>
        <div slot="body">
          <div class="pt-1 pb-2"></div>
          <b-row>
            <b-col
              lg="4"
              class="mb-3"
              v-for="option in wasteOperationsCheckbox"
              :key="option.value"
            >
              <form-checkbox
                v-model="wasteOperationsChecked"
                :value="option.value"
                name="wasteOperationsCheckbox"
              >{{ option.text }}</form-checkbox>
            </b-col>
          </b-row>
        </div>
      </form-spoiler>

      <form-spoiler :selected="selectedSpoilers" class="mt-4">
        <div slot="header">
          <h5>Лицензия на виды деятельности</h5>
        </div>
        <div slot="body">
          <licence class="mt-3" :data="licenceArray"></licence>
        </div>
      </form-spoiler>

      <div class="mt-4 pt-2">
        <button class="button">Сохранить изменения</button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import FormSelectField from "../components/FormSelectField.vue";
import FormSpoiler from "../components/FormSpoiler.vue";
import FormRadioButton from "../components/FormRadioButton.vue";
import FormTextField from "../components/FormTextField.vue";
import FormCheckbox from "../components/FormCheckbox.vue";
import Licence from "../components/Licence.vue";

export default {
  components: {
    FormSelectField,
    FormSpoiler,
    FormRadioButton,
    FormTextField,
    FormCheckbox,
    Licence
  },
  data() {
    return {
      selectedSpoilers: true,
      reportingPeriodSelected: "2019",
      reportingPeriodOptions: [
        { value: "2019", text: "2019" },
        { value: "2018", text: "2018" }
      ],
      businessCategoryRadioChecked: "M",
      businessCategoryRadio: [
        { text: "Субъект малого и среднего предпринимательства", value: "S" },
        { text: "Субъект крупного предпринимательства", value: "M" }
      ],
      subjectTypeChecked: "M",
      subjectTypeRadio: [
        { text: "Субъект федерального надзора", value: "S" },
        { text: "Субъект регионального надзора", value: "M" }
      ],
      wasteOperationsChecked: ["2", "4", "8"],
      wasteOperationsCheckbox: [
        { text: "Образование", value: "1" },
        { text: "Транспортирование", value: "2" },
        { text: "Накопление", value: "3" },
        { text: "Хранение", value: "4" },
        { text: "Обработка", value: "5" },
        { text: "Утилизация", value: "6" },
        { text: "Обезвреживание", value: "7" },
        { text: "Захоронение", value: "8" }
      ],
      licenceArray: [
        {
          id: "1",
          number: "№ 066/00307",
          by: "1",
          dateFrom: "01.01.2017",
          dateTo: "01.01.2018"
        },
        {
          id: "2",
          number: "№ 2",
          by: "2",
          dateFrom: "02.02.2017",
          dateTo: "02.02.2018"
        },
        {
          id: "3",
          number: "№ 3",
          by: "3",
          dateFrom: "03.03.2017",
          dateTo: "03.03.2018"
        },
        {
          id: "4",
          number: "№ 4",
          by: "4",
          dateFrom: "04.04.2017",
          dateTo: "04.04.2018"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
