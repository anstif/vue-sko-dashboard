<template>
  <div class="licence">
    <div class="licence__box">
      <b-row>
        <b-col lg="4" v-for="licence in licenceArray" :key="licence.id">
          <licence-card :data="licence" @remove="remove" @duplicate="duplicate"></licence-card>
        </b-col>
        <b-col lg="4" class="d-flex justify-content-center align-items-center">
          <button
            class="licence__add button button--circle-outline button--no-shadow"
            @click="addModal = true"
          >
            <icon id="plus"></icon>
          </button>
        </b-col>
      </b-row>
    </div>

    <modal v-if="addModal" width="775px" @close="addModal = false">
      <h3 slot="header">Добавление лицензии</h3>
      <div slot="body">
        <b-row>
          <b-col lg="6">
            <div class="licence-drop">
              <div class="licence-drop__icon"></div>
              <div class="licence-drop__tip">Перетяните сюда изображение</div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="d-flex flex-column justify-content-between h-100">
              <div>
                <button class="button button--pseudo mb-3">
                  <icon id="download"></icon>Загрузите фото или скан документа
                </button>
                <b-form-row>
                  <b-col lg="6">
                    <form-text-field v-model="newLicense.number" placeholder="Номер" label="Номер"></form-text-field>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col lg="12">
                    <form-select-field
                      v-model="newLicense.by"
                      :options="byOptions"
                      label="Кем выдан"
                    ></form-select-field>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col lg="6">
                    <form-datepicker-field v-model="newLicense.dateFrom" label="Действует с"></form-datepicker-field>
                  </b-col>
                  <b-col lg="6">
                    <form-datepicker-field v-model="newLicense.dateTo" label="Действует до"></form-datepicker-field>
                  </b-col>
                </b-form-row>
              </div>
              <div class="mt-auto text-right">
                <button class="button button--pseudo mb-4">
                  <icon id="repeat"></icon>Вернуть изменения
                </button>
                <br>
                <button class="button">Сохранить</button>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </modal>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import LicenceCard from "./LicenceCard.vue";
import Modal from "./Modal.vue";
import FormTextField from "../components/FormTextField.vue";
import FormSelectField from "../components/FormSelectField.vue";
import FormDatepickerField from "./FormDatepickerField.vue";

export default {
  components: {
    Icon,
    LicenceCard,
    FormTextField,
    Modal,
    FormSelectField,
    FormDatepickerField
  },
  props: {
    data: Array
  },
  data() {
    return {
      licenceArray: this.data,
      addModal: false,
      newLicense: Object,
      byOptions: [
        { text: "Организация 1", value: "1" },
        { text: "Организация 2", value: "2" },
        { text: "Организация 3", value: "3" },
        { text: "Организация 4", value: "4" }
      ]
    };
  },
  methods: {
    add() {},
    duplicate(licence) {
      licence = { ...licence };
      licence.id = (Math.random() * 10000).toFixed(0);
      this.licenceArray.push(licence);
      console.log("duplicate: ", licence);
    },
    remove(licence) {
      this.licenceArray = this.licenceArray.filter(function(value) {
        return value.id !== licence.id;
      });
      console.log("remove: ", licence);
    }
  }
};
</script>

<style lang="scss">
.licence {
  &__box {
    margin-bottom: -14px;
    > .row {
      margin: 0 -7px;
    }
    > .row > .col,
    > .row > [class*="col-"] {
      padding-right: 7px;
      padding-left: 7px;
      padding-bottom: 14px;
    }
  }

  &__add {
    margin-left: -86px;
  }
}

.licence-viewer {
  &__box {
    min-height: 400px;
  }
}

.licence-drop {
  border: 1px dashed #17a05e;
  position: relative;
  height: 460px;
  display: flex;
  align-items: flex-end;
  &__icon {
    &:before,
    &:after {
      display: block;
      position: absolute;
      content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTMiIGhlaWdodD0iOTAiIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiNDNEM0QzQiIGQ9Ik0xMy4xNjM5LjMyMjI2Nkw5OS41OTM2ODczNy4wNTUxOTU1NGwuMDE5NzgyOTggNi40MDIxOTk0My04Ni40Mjk3ODczNy4yNjcwNzA0N3oiLz48cGF0aCBmaWxsPSIjQzRDNEM0IiBkPSJNLjk0OTA5NyAxOC40OTk1bDExMC45NzE0NzAyLS4zNDI5MDQ5NS4wMjMwODAxNSA3LjQ2OTIzNDM0LTExMC45NzE0NzAyLjM0MjkwNDk1ek0uOTg4NjQ3IDMxLjMwNDJsMTEwLjk3MTQ3MDItLjM0MjkwNDk1LjAyMzA4MDE1IDcuNDY5MjM0MzQtMTEwLjk3MTQ3MDIuMzQyOTA0OTV6TTEuMDI4MiA0NC4xMDg0bDExMC45NzE0NzAyLS4zNDI5MDQ5NS4wMjMwODAxNSA3LjQ2OTIzNDM0LTExMC45NzE0NzAyLjM0MjkwNDk1ek0xLjA2NjE2IDU2LjM3OTRsMTEwLjk3MTQ3MDItLjM0MjkwNDk1LjAyNDcyODc0IDguMDAyNzUxOC0xMTAuOTcxNDcwMjEuMzQyOTA0OTR6TTEuMTA1NzEgNjkuMTgzNmwxMTAuOTcxNDcwMi0uMzQyOTA0OTUuMDIzMDgwMTUgNy40NjkyMzQzNC0xMTAuOTcxNDcwMi4zNDI5MDQ5NXpNMS4xNDUyNiA4MS45ODgzbDExMC45NzE0NzAyLS4zNDI5MDQ5NS4wMjMwODAxNSA3LjQ2OTIzNDM0LTExMC45NzE0NzAyLjM0MjkwNDk1eiIgb3BhY2l0eT0iLjMiLz48L3N2Zz4=);
      padding-top: 43px;
      text-align: center;
      width: 137px;
      height: 191px;
      background: linear-gradient(0deg, #fafafa, #fafafa);
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    }
    &:before {
      transform: rotate(12.26deg);
      left: 86px;
      top: 86px;
    }
    &:after {
      left: 120px;
      top: 129px;
    }
  }
  &__tip {
    font-size: 10px;
    line-height: 14px;
    color: #000000;
    opacity: 0.7;
    margin-bottom: 23px;
    text-align: center;
    width: 100%;
  }
}
</style>

