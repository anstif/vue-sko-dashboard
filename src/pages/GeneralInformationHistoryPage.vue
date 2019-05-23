<template>
  <b-row>
    <b-col lg="6" class="mt-4">
      <div class="mt-4 d-flex align-items-center">
        <router-link class="mr-4" to="/general_information">
          <button class="button button--single-icon button--color-grey">
            <icon id="backward"></icon>
          </button>
        </router-link>
        <h5 class="mr-4">История изменений</h5>
      </div>
    </b-col>

    <b-col lg="6" class="mt-4">
      <div class="d-flex mt-4 align-items-baseline justify-content-end">
        <div class="table-dropdown__box mr-4">
          <button class="button button--pseudo" @click="tableDropdownColums = !tableDropdownColums">
            <icon id="eye-off"></icon>Скрыть колонки
          </button>
          <div class="table-dropdown" v-if="tableDropdownColums">
            <div class="table-dropdown__body">
              <form-checkbox
                v-for="column in columnsOptions"
                v-model="columns"
                :key="column.value"
                :value="column.value"
                name="columnsOptions"
              >{{ column.text }}</form-checkbox>
            </div>
            <div class="table-dropdown__footer">
              <button class="button button--pseudo">Показать все</button>
              <button class="button button--pseudo">Скрыть все</button>
            </div>
          </div>
        </div>
        <button class="button button--pseudo mr-4">
          <icon id="filter"></icon>Фильтр
        </button>
        <button class="button button--pseudo">
          <icon id="download"></icon>Экспорт в Excel
        </button>
      </div>
    </b-col>

    <b-col lg="12" class="mt-4">
      <v-server-table url="https://api.myjson.com/bins/qiopy" :columns="columns" :options="options"></v-server-table>
    </b-col>
  </b-row>
</template>

<script>
// import Vue from "vue";
// import Icon from "../components/Icon.vue";
// import FormCheckbox from "../components/FormCheckbox.vue";
// import { ServerTable, ClientTable, Event } from "vue-tables-2";

// Vue.use(
//   ServerTable,
//   {
//     skin: "table table-borderless"
//   },
//   false,
//   "bootstrap4"
// );

// export default {
//   components: {
//     Icon,
//     FormCheckbox
//   },
//   methods: {
//     toggleCol() {
//       console.log(this.columns);
//       this.columns.pop();
//     }
//   },
//   data() {
//     return {
//       columns: ["row1", "row2", "row3", "row4", "row5", "row6"],
//       columnsOptions: [
//         { text: "Действует с", value: "row1" },
//         { text: "Категория бизнеса", value: "row2" },
//         { text: "Реквизиты", value: "row3" },
//         { text: "Операции с отходами", value: "row4" },
//         { text: "Лицензия на виды деятельности", value: "row5" },
//         { text: "Полное наименование", value: "row6" }
//       ],
//       tableDropdownColums: false,
//       options: {
//         columnsClasses: {
//           row1: "text-center align-middle",
//           row4: "text-center align-middle",
//           row5: "text-center align-middle",
//           row6: "align-middle"
//         },
//         perPage: 25,
//         perPageValues: [25],
//         columnsDropdown: true,
//         requestAdapter(data) {
//           return {
//             sort: 0,
//             direction: "desc"
//           };
//         },
//         responseAdapter({ data }) {
//           return {
//             data,
//             count: data.length
//           };
//         },
//         headings: {
//           row1: "Действует с",
//           row2() {
//             return this.$createElement("div", {
//               class: { row2: true },
//               domProps: {
//                 innerHTML:
//                   "Полное наименование организации<br> <small class='text--tip'>Юридический и почтовые адреса</small>"
//               }
//             });
//           },
//           row3() {
//             return this.$createElement("div", {
//               class: { row3: true },
//               domProps: {
//                 innerHTML:
//                   "Категория бизнеса<br> <small class='text--tip'>Тип субьекта</small>"
//               }
//             });
//           },
//           row4() {
//             return this.$createElement("div", {
//               class: { row4: true },
//               domProps: {
//                 innerHTML: "Реквизиты"
//               }
//             });
//           },
//           row5() {
//             return this.$createElement("div", {
//               class: { row5: true },
//               domProps: {
//                 innerHTML: "Операции с отходами"
//               }
//             });
//           },
//           row6() {
//             return this.$createElement("div", {
//               class: { row6: true },
//               domProps: {
//                 innerHTML: "Лицензия на виды деятельности"
//               }
//             });
//           }
//         },
//         headingsTooltips: function(h) {
//           return "Expanded Title";
//         },
//         texts: {
//           loading: ""
//         },
//         filterable: true,
//         sortable: ["row1"],
//         templates: {
//           row2(h, row) {
//             return this.$createElement("div", {
//               domProps: { innerHTML: row.row2 }
//             });
//           },
//           row3(h, row) {
//             return this.$createElement("div", {
//               domProps: { innerHTML: row.row3 }
//             });
//           },
//           row4(h, row) {
//             return this.$createElement("div", {
//               class: { "props-table": true },
//               domProps: { innerHTML: row.row4 }
//             });
//           },
//           row5(h, row) {
//             return this.$createElement("div", {
//               domProps: { innerHTML: row.row5 }
//             });
//           }
//         }
//       }
//     };
//   }
// };
</script>

<style lang="scss">
.VueTables__sortable {
  font-size: 12px;
  user-select: none;
  max-width: 120px;
  padding-left: 15px !important;
  padding-right: 15px !important;
  &:hover {
    color: #17a05e;
  }
}
.row2 {
  width: 250px;
}
.row3 {
  width: 214px;
}
.row4 {
  width: 221px;
}
.row5 {
  width: 198px;
}
.row6 {
  width: 179px;
}

.VueTables {
  box-shadow: 0px 2px 4px rgba(204, 204, 204, 0.5);
  > .row {
    display: none;
  }
  &__sort-icon {
    float: none !important;
    &:after {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 3px 3px 0 3px;
      display: inline-block;
      border-color: transparent transparent transparent transparent;
      border-color: currentColor transparent transparent transparent;
      margin-left: 9px;
      position: relative;
      top: -2px;
    }
    &.glyphicon-chevron-up:after {
      border-color: currentColor transparent transparent transparent;
    }
    &.glyphicon-chevron-down:after {
      border-width: 0 3px 3px 3px;
      border-color: transparent transparent currentColor transparent;
    }
  }
  &__sortable {
    cursor: pointer;
    white-space: nowrap;
  }
  .VuePagination {
    display: none;
  }
}
.table {
  color: #333;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0;
  tr {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    td {
      padding: 13px 15px;
      vertical-align: top !important;
      &:nth-child(even) {
        background: #fcfcfc;
      }
      .text--tip {
        display: inline-block;
      }
      .text--tip:not(:first-child) {
        margin-top: 8px;
      }
    }
  }
  tbody {
    min-height: 200px;
  }
  thead {
    tr {
      border-top: 0;
      th {
        padding: 17px 0 14px;
        font-weight: 600;
        line-height: 17px;
        &:nth-child(even) {
          background: #f2f2f2;
        }
        .text--tip {
          display: block;
          margin-top: 4px;
        }
        > span > div {
          padding: 0 15px;
        }
      }
    }
  }
}
.props-table {
  text-align: left;
  small {
    width: 60px;
  }
}
.table-dropdown {
  position: absolute;
  background: #fff;
  z-index: 99;
  top: 38px;
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
}
</style>
