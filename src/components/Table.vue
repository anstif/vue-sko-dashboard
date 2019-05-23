<template>
  <div class="mt-3">
    <b-row>
      <b-col lg="6" class="mt-2">
        <div class="d-flex">
          <form-select-field
            v-model="ogrn"
            :options="ogrnOptions"
            label="ogrn"
            :selected="ogrn"
            width="100px"
            @input="$refs.vuetable.refresh()"
          ></form-select-field>
          <span class="ml-3 mt-4 pt-2 text--small">Filter: {{ makeQueryFilter }}</span>
        </div>
      </b-col>
      <b-col lg="6" class="mb-4">
        <div class="d-flex mt-4 align-items-baseline justify-content-end">
          <div class="table-dropdown__box mr-4" v-click-outside="columnsDropdownHide">
            <button
              class="button button--pseudo button--highlight-block"
              :class="{
                'button--highlight': isHiddenColumns,
                'active': visibleColumnsDropdown
                }"
              @click="visibleColumnsDropdown = !visibleColumnsDropdown"
            >
              <icon id="eye-off"></icon>
              {{ visibleColumnsButtonText }}
            </button>
            <div class="table-dropdown" v-show="visibleColumnsDropdown">
              <div class="table-dropdown__body">
                <form-checkbox
                  v-for="(field, index) in fields"
                  :key="field.name + index"
                  v-model="field.visible"
                  @change="updateTable()"
                >{{ field.titleShort ? field.titleShort : field.title }}</form-checkbox>
              </div>
              <div class="table-dropdown__footer">
                <button class="button button--pseudo" @click="columnsShowAll">Показать все</button>
                <button class="button button--pseudo" @click="columnsHideAll">Скрыть все</button>
              </div>
            </div>
          </div>

          <div class="table-dropdown__box mr-4" v-click-outside="filterDropdownHide">
            <button
              class="button button--pseudo button--highlight-block"
              @click="filterColumnsDropdown = !filterColumnsDropdown"
              :class="{
                'button--highlight': makeQueryFilter,
                'active': filterColumnsDropdown
                }"
            >
              <icon id="filter"></icon>
              {{ filterButtonText }}
            </button>
            <div class="table-dropdown table-dropdown--filter" v-show="filterColumnsDropdown">
              <div class="table-dropdown__body">
                <div class="d-flex align-items-center">
                  <p class="mr-3">По полю</p>
                  <form-select-field
                    v-model="columsForFilterSelect"
                    :options="columsForFilter"
                    width="180px"
                    @input="$refs.vuetable.reload()"
                    @selected="filterSelectColumn"
                    class="mr-3"
                  ></form-select-field>
                  <form-select-field
                    v-model="operationForFilterSelect"
                    :selected="operationForFilterSelect"
                    :options="operationForFilter"
                    width="180px"
                    @input="$refs.vuetable.reload()"
                    class="mr-3"
                  ></form-select-field>
                  <form-text-field
                    v-model="valueForFilter"
                    width="180px"
                    @input="$refs.vuetable.reload()"
                    class="mr-3"
                    :class="{
                      'is-find': makeQueryFilter && countTableData > 0,
                      'field--is-error': makeQueryFilter && countTableData == 0
                      }"
                  ></form-text-field>
                </div>
              </div>
            </div>
          </div>

          <a
            class="button button--pseudo button--highlight-block"
            :href="`http://sko-dev.c-i-p.ru/sko-nature-user-rest/api/v1/organizations/history/xlsx?ogrn=${ogrn}`"
            download="orgHistory.xlsx"
          >
            <icon id="download"></icon>Экспорт в Excel
          </a>
        </div>
      </b-col>
    </b-row>
    <vuetable
      ref="vuetable"
      api-url="http://sko-dev.c-i-p.ru/sko-nature-user-rest/api/v1/organizations/history"
      :fields="fields"
      :sort-order="sortOrder"
      :sort-params="getSortParam"
      :query-params="makeQueryParams"
      :per-page="1"
      :initial-page="0"
      :first-page="0"
      data-path="data"
      noDataTemplate="Нет данных"
      pagination-path="pagination"
      :css="css.table"
      :transform="transformData"
      @vuetable:pagination-data="onPaginationData"
      @vuetable:loading="loadingData"
      @vuetable:loaded="loadedData"
    >
      <template slot="fullName-slot" slot-scope="props" ref="fullNameColumn">
        <p class="mb-2">{{ props.rowData.fullName }}</p>
        <p class="text--small text--tip">{{ props.rowData.addressU }}</p>
        <p class="text--small text--tip">{{ props.rowData.addressP }}</p>
      </template>

      <template slot="businessType-slot" slot-scope="props">
        <p class="mb-2">{{ props.rowData.businessTypeAsText }}</p>
        <p class="text--small text--tip">{{ props.rowData.supervisionTypeAsText }}</p>
      </template>

      <template slot="requisites-slot" slot-scope="props">
        <table class="table-small">
          <tr>
            <td class="text--small text--tip">ИНН</td>
            <td>{{ props.rowData.inn | placeholder }}</td>
          </tr>
          <tr>
            <td class="text--small text--tip">ОГРН</td>
            <td>{{ props.rowData.ogrn | placeholder }}</td>
          </tr>
          <tr>
            <td class="text--small text--tip">КПП</td>
            <td>{{ props.rowData.kpp | placeholder }}</td>
          </tr>
        </table>
        <form-spoiler :selected="false" class="d-flex flex-column-reverse">
          <div slot="header" class="ml-auto"></div>
          <div slot="body">
            <table class="table-small">
              <tr>
                <td class="text--small text--tip">ОКПО</td>
                <td>{{ props.rowData.okpo | placeholder }}</td>
              </tr>
              <tr>
                <td class="text--small text--tip">ОКВЭД</td>
                <td>{{ props.rowData.okved | placeholder }}</td>
              </tr>
              <tr>
                <td class="text--small text--tip">ОКОГУ</td>
                <td>{{ props.rowData.okogu | placeholder }}</td>
              </tr>
              <tr>
                <td class="text--small text--tip">ОКОПФ</td>
                <td>{{ props.rowData.okopf | placeholder }}</td>
              </tr>
              <tr>
                <td class="text--small text--tip">ОКФС</td>
                <td>{{ props.rowData.okfs | placeholder }}</td>
              </tr>
            </table>
          </div>
        </form-spoiler>
      </template>
    </vuetable>

    <div class="mt-4" v-show="isHidePagination">
      <vuetable-pagination
        ref="pagination"
        :css="css.pagination"
        class="d-flex justify-content-center"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Icon from "./Icon.vue";
import Vuetable from "vuetable-2";
import FormCheckbox from "../components/FormCheckbox.vue";
import FormSelectField from "../components/FormSelectField.vue";
import VuetablePagination from "./Table/paginationBootstrap4.vue";
import CssConfig from "./Table/bootstrap4Config.js";
import vClickOutside from "v-click-outside";
import FormSpoiler from "../components/FormSpoiler.vue";
import FormTextField from "../components/FormTextField.vue";

Vue.use(vClickOutside);

export default {
  components: {
    Vuetable,
    VuetablePagination,
    Icon,
    FormCheckbox,
    FormSpoiler,
    FormSelectField,
    FormTextField
  },
  data() {
    return {
      css: CssConfig,
      fields: [
        {
          title: "Действует с",
          name: "year",
          sortField: "year",
          width: "124px",
          titleClass: "text-center text--small align-middle",
          dataClass: "text-center",
          visible: true
        },
        {
          title:
            "Полное наименование организации <small>Юридический и почтовые адреса</small>",
          titleShort: "Полное наименование организации",
          name: "fullName-slot",
          titleClass: "fullName-column",
          dataClass: "fullName-column",
          width: "250px",
          visible: true
        },
        {
          title: "Категория бизнеса <small>Тип субьекта</small>",
          titleShort: "Категория бизнеса",
          name: "businessType-slot",
          width: "216px",
          visible: true
        },
        {
          title: "Реквизиты",
          name: "requisites-slot",
          width: "212px",
          titleClass: "text-center align-middle",
          dataClass: "text-center",
          visible: true
        },
        {
          title: "Операции с отходами",
          name: "operationsString",
          width: "200px",
          titleClass: "text-center align-middle",
          dataClass: "text-center",
          visible: true
        },
        {
          title: "Лицензия на виды деятельности",
          name: "gender",
          width: "190px",
          titleClass: "align-middle",
          visible: true
        }
      ],
      sortOrder: [
        {
          field: "year",
          direction: "desc"
        }
      ],
      visibleColumnsDropdown: false,
      filterColumnsDropdown: false,
      columsForFilterSelect: "",
      columsForFilter: [
        {
          text: "Юридический адрес",
          value: "addressU",
          class: "fullName-column"
        },
        {
          text: "Почтовый адрес",
          value: "addressP"
        },
        {
          text: "ОКПО",
          value: "okpo"
        },
        {
          text: "Операции с отходами",
          value: "operationsString"
        }
      ],
      operationForFilterSelect: "contains",
      operationForFilter: [
        {
          text: "Содержит",
          value: "contains"
        },
        {
          text: "Начинается",
          value: "start"
        }
      ],
      valueForFilter: "",
      ogrn: 33333,
      ogrnOptions: [
        {
          text: "2222",
          value: "2222"
        },
        {
          text: "1234567890",
          value: "1234567890"
        },
        {
          text: "33333",
          value: "33333"
        },
        {
          text: "6668020768",
          value: "6668020768"
        }
      ],
      countTableData: 0
    };
  },
  watch: {
    ogrn() {
      this.updateTable();
    }
  },
  methods: {
    transformData(data) {
      var transformed = {};
      transformed.pagination = {
        total: data.total,
        per_page: data.limit,
        current_page: Math.ceil(data.start / data.limit),
        last_page: Math.ceil(data.total / data.limit),
        next_page_url: null,
        prev_page_url: null,
        from: data.start,
        to: data.start + data.limit
      };
      transformed.data = data.data;
      return transformed;
    },
    getSortParam(sortOrder) {
      return sortOrder
        .map(function(sort) {
          return sort.field + (sort.direction === "desc" ? "-" : "");
        })
        .join(",");
    },
    makeQueryParams(sortOrder, currentPage, perPage) {
      if (this.makeQueryFilter) {
        return {
          sort: this.getSortParam(sortOrder),
          start: currentPage,
          limit: perPage,
          ogrn: this.ogrn,
          search: this.makeQueryFilter
        };
      }
      return {
        sort: this.getSortParam(sortOrder),
        start: currentPage,
        limit: perPage,
        ogrn: this.ogrn
      };
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    updateTable() {
      this.$refs.vuetable.normalizeFields();
    },
    columnsDropdownHide() {
      this.visibleColumnsDropdown = false;
    },
    filterDropdownHide() {
      this.filterColumnsDropdown = false;
    },
    columnsHideAll() {
      this.fields.map(field => (field.visible = false));
      this.updateTable();
    },
    columnsShowAll() {
      this.fields.map(field => (field.visible = true));
      this.updateTable();
    },
    loadingData() {
      this.$refs.vuetable.$el.classList.add("loading");
    },
    loadedData() {
      this.$refs.vuetable.$el.classList.remove("loading");
      this.countTableData = this.$refs.vuetable.countTableData;
    },
    filterSelectColumn(data) {
      document
        .querySelectorAll(".column-filtered")
        .forEach(el => el.classList.remove("column-filtered"));
      document
        .querySelectorAll(`.${data.class}`)
        .forEach(el => el.classList.add("column-filtered"));
    }
  },
  computed: {
    visibleColumnsCount() {
      return this.fields.reduce((n, col) => n + col.visible, 0);
    },
    columsCount() {
      return this.fields.length;
    },
    visibleColumnsButtonText() {
      let diff = this.columsCount - this.visibleColumnsCount;
      if (diff === 1) return "1 колонка скрыта";
      if ([2, 3, 4].includes(diff)) return diff + " колонки скрыты";
      if (diff > 4) return diff + " колонок скрыто";
      return "Скрыть колонки";
    },
    isHiddenColumns() {
      return this.visibleColumnsCount !== this.columsCount;
    },
    isHidePagination() {
      return this.columsCount - this.visibleColumnsCount < this.columsCount;
    },
    isFilteredColumns() {
      return false;
    },
    makeQueryFilter() {
      let field = this.columsForFilterSelect;
      let operator = this.operationForFilterSelect;
      let value = this.valueForFilter;
      if (field && operator && value) {
        return operator === "contains"
          ? `${field}=="*${value}*"`
          : `${field}=="${value}*"`;
      }
      return false;
    },
    filterButtonText() {
      if (this.makeQueryFilter) {
        return "1 фильтр";
      }
      return "Фильтр";
    }
  },
  filters: {
    placeholder(value) {
      return value ? value : "–";
    }
  }
};
</script>

<style lang="scss">
.vuetable {
  color: #333;
  font-size: 14px;
  line-height: 20px;
  box-shadow: 0px 2px 4px rgba(204, 204, 204, 0.5);
  border-radius: 2px;
  width: auto;
  &-empty-result {
    padding: 70px 0 !important;
    color: #b9b9b9;
    background: #fff;
    font-size: 18px;
  }
  thead {
    tr {
      border-top: 0;
      th {
        padding: 17px 15px 12px;
        font-weight: 600;
        line-height: 17px;
        small {
          font-size: 12px;
          line-height: 18px;
          color: rgba(51, 51, 51, 0.7);
          display: block;
          margin-top: 4px;
        }
        &:nth-child(even) {
          background: #f2f2f2;
        }
        .text--tip {
          display: block;
          margin-top: 4px;
        }
        .icon {
          width: 17px;
          height: 17px;
        }
        &.sortable {
          user-select: none;
          &:hover {
            color: #17a05e;
          }
        }
      }
    }
  }
  tr {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    td {
      padding: 13px 15px;
      &:nth-child(even) {
        background: #fcfcfc;
      }
      .text--small {
        line-height: 1.4;
      }
    }
  }
}

.pagination {
  .page-item .page-link {
    border: 0;
    cursor: pointer;
    padding: 0;
    width: 32px;
    height: 32px;
    text-align: center;
    border-radius: 50%;
    font-size: 14px;
    margin-left: 0;
    line-height: 32px;
    font-weight: 600;
    color: #333;
    outline: 0 !important;
    box-shadow: none;
    &:hover {
      color: #333;
      background: #eaf8fe;
    }
    .icon {
      margin-top: -2px;
    }
  }
  .page-item.active .page-link {
    background: #17a05e;
    color: #fff;
  }
  .page-item.disabled {
    opacity: 0.3;
    .page-link {
      color: #333;
    }
  }
}

.table-dropdown {
  position: absolute;
  background: #fff;
  z-index: 99;
  top: 40px;
  left: 0;
  width: 260px;
  border-radius: 4px;
  box-shadow: 0px 15px 32px rgba(0, 0, 0, 0.12);
  .form-checkbox__text {
    font-size: 12px;
  }
  .form-checkbox__container:not(:last-child) {
    margin-bottom: 24px;
  }
  &__box {
    position: relative;
    z-index: 4;
  }
  &__body {
    padding: 20px 12px 29px;
  }
  &__footer {
    padding: 12px;
    border-top: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-around;
    .button {
      font-size: 12px;
      font-weight: 600;
    }
  }
  &--filter {
    left: auto;
    right: 0;
    width: 787px;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.12),
      2px 4px 4px rgba(0, 0, 0, 0.08);
  }
  &--filter &__body {
    padding: 23px 20px 18px;
  }
}
.loading {
  position: relative;
  .vuetable {
    pointer-events: none;
    opacity: 0.2;
    transition: 0.3s ease-in-out 0.7s;
  }
  &:after {
    content: "";
    display: inline-block;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #17a05e;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: donut-spin 0.55s linear infinite, fade-in 1s ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fade-in {
  0%,
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.is-find {
  input {
    border-color: #17a05e;
    box-shadow: 0 0 0 1px #17a05e;
  }
}

.column-filtered {
  background: #b5ebd3 !important;
  border-color: #a5d6c0 !important;
}
</style>

