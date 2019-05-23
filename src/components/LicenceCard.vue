<template>
  <div>
    <div class="licence-card">
      <context-menu class="licence-card__more">
        <template v-slot>
          <a href="#!" @click.prevent="editModal = true">Редактировать</a>
          <a href="#!" @click.prevent="duplicate">Дублировать</a>
          <a href="#!" @click.prevent="remove">Удалить</a>
        </template>
      </context-menu>
      <div class="licence-card__content" @click="showModal = true">
        <div class="h5">Лицензия</div>
        <div class="text text--small mt-1 mb-2">{{ licence.number }}</div>
        <div class="text text--small text--gray mb-3">
          Действует
          <br>
          с {{ licence.dateFrom }} по {{ licence.dateTo }}
        </div>
        <button class="button button--pseudo button--sm">
          <icon id="eye"></icon>Посмотреть
        </button>
      </div>
    </div>

    <modal v-if="editModal" width="775px" @close="editModal = false">
      <h3 slot="header">Редактирование лицензии</h3>
      <div slot="body">
        <b-row>
          <b-col lg="6">
            <div class="licence-viewer">
              <div class="licence-viewer__box">
                <img class="img-fluid" src="../../img/licence.jpg" alt="licence">
              </div>
              <div class="licence-viewer__footer">
                <div class="button-group mt-2">
                  <button class="button button--single-icon">
                    <icon id="minus"></icon>
                  </button>
                  <button class="button button--single-icon">
                    <icon id="zoom"></icon>
                  </button>
                  <button class="button button--single-icon">
                    <icon id="plus"></icon>
                  </button>
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="d-flex flex-column justify-content-between h-100">
              <div>
                <button class="button button--pseudo mb-3">
                  <icon id="download"></icon>Заменить документ
                </button>
                <b-form-row>
                  <b-col lg="6">
                    <form-text-field v-model="licence.number" placeholder="Номер" label="Номер"></form-text-field>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col lg="12">
                    <form-select-field
                      v-model="licence.by"
                      :selected="licence.by"
                      :options="byOptions"
                      label="Кем выдан"
                    ></form-select-field>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col lg="6">
                    <form-datepicker-field v-model="licence.dateFrom" label="Действует с"></form-datepicker-field>
                  </b-col>
                  <b-col lg="6">
                    <form-datepicker-field v-model="licence.dateTo" label="Действует до"></form-datepicker-field>
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

    <modal v-if="showModal" width="775px" @close="showModal = false">
      <h3 slot="header">Просмотр лицензии</h3>
      <div slot="body">
        <b-row>
          <b-col lg="6">
            <div class="licence-viewer">
              <div class="licence-viewer__box">
                <img class="img-fluid" src="../../img/licence.jpg" alt="licence">
              </div>
              <div class="licence-viewer__footer">
                <div class="button-group mt-2">
                  <button class="button button--single-icon">
                    <icon id="minus"></icon>
                  </button>
                  <button class="button button--single-icon">
                    <icon id="zoom"></icon>
                  </button>
                  <button class="button button--single-icon">
                    <icon id="plus"></icon>
                  </button>
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <b-form-row>
              <b-col lg="6">
                <form-text-field label="Номер" v-model="licence.number" :is-disabled="true"></form-text-field>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col lg="12">
                <form-select-field
                  v-model="licence.by"
                  :selected="licence.by"
                  :options="byOptions"
                  label="Кем выдан"
                  :is-disabled="true"
                ></form-select-field>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col lg="6">
                <form-text-field
                  v-model="licence.dateFrom"
                  label="Действует с"
                  icon="date"
                  :is-disabled="true"
                ></form-text-field>
              </b-col>
              <b-col lg="6">
                <form-text-field
                  v-model="licence.dateTo"
                  label="Действует до"
                  icon="date"
                  :is-disabled="true"
                ></form-text-field>
              </b-col>
            </b-form-row>
          </b-col>
        </b-row>
      </div>
    </modal>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import ContextMenu from "./ContextMenu.vue";
import Modal from "./Modal.vue";
import FormTextField from "./FormTextField.vue";
import FormSelectField from "./FormSelectField.vue";
import FormDatepickerField from "./FormDatepickerField.vue";

export default {
  components: {
    Icon,
    ContextMenu,
    Modal,
    FormTextField,
    FormSelectField,
    FormDatepickerField
  },
  props: {
    data: Object
  },
  data() {
    return {
      licence: this.data,
      showModal: false,
      editModal: false,
      byOptions: [
        { text: "Организация 1", value: "1" },
        { text: "Организация 2", value: "2" },
        { text: "Организация 3", value: "3" },
        { text: "Организация 4", value: "4" }
      ]
    };
  },
  methods: {
    edit() {
      this.editModal = true;
    },
    duplicate() {
      this.$emit("duplicate", this.licence);
    },
    remove() {
      this.$emit("remove", this.licence);
    }
  }
};
</script>

<style lang="scss">
.licence-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 8px rgba(23, 160, 94, 0.3);
    border-color: #fff;
    .licence-card__more {
      visibility: visible;
    }
  }

  &__content {
    padding: 0.8rem 0.8rem 0.7rem 1rem;
    .text--gray {
      line-height: 18px;
    }
  }

  &__more {
    position: absolute !important;
    top: 5px;
    right: 5px;
    visibility: hidden;
    .button {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>

