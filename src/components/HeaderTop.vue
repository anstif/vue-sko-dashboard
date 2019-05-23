<template>
  <div class="header-top">
    <b-row align-h="between" :no-gutters="true" class="h-100">
      <b-col lg="4">
        <div class="d-flex align-items-center h-100">
          <img class="header-top__logo d-block" src="../../img/logo.png" alt="logo">
          <div>
            <div class="header-top__title">{{ title }}</div>
            <div class="header-top__text">{{ text }}</div>
          </div>
        </div>
      </b-col>
      <b-col lg="3">
        <div class="header-top__account d-flex align-items-center justify-content-end h-100">
          <div
            class="header-top__account-avatar-wrapper d-flex align-items-center justify-content-center mr-3 h-100"
          >
            <img class="header-top__account-avatar d-block" src="../../img/avatar.png" alt="avatar">
          </div>
          <div class="header-top__account-name">{{ account }}</div>
          <icon id="arrow-drop-down"></icon>
          <div class="dropdown">
            <router-link
              class="dropdown__item"
              v-for="item in accountMenu"
              :to="item.path"
              :key="item.path"
              v-text="item.name"
            ></router-link>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  },
  data() {
    return {
      title: "Сводный кадастр отходов",
      text: "Департамент природопользования и охраны окружающей среды",
      account: "ООО  «Центрогазсервис»",
      accountMenu: [
        {
          name: "Заголовки",
          path: "/components_library/title"
        },
        {
          name: "Текст",
          path: "/components_library/text"
        },
        {
          name: "Ссылки",
          path: "/components_library/link"
        },
        {
          name: "Алерты",
          path: "/components_library/alert"
        },
        {
          name: "Спойлеры",
          path: "/components_library/form-spoiler"
        },
        {
          name: "Радиокнопка",
          path: "/components_library/form-radio"
        },
        {
          name: "Чекбокс",
          path: "/components_library/form-checkbox"
        },
        {
          name: "Иконки",
          path: "/components_library/icon"
        },
        {
          name: "Кнопки",
          path: "/components_library/button"
        },
        {
          name: "Комбобокс",
          path: "/components_library/form-select-field"
        },
        {
          name: "Таблица",
          path: "/components_library/table"
        },
        {
          name: "Текстовое поле ввода",
          path: "/components_library/form-input"
        },
        {
          name: "Числовое поле ввода",
          path: "/components_library/form-input-number"
        },
        {
          name: "Поле ввода даты",
          path: "/components_library/form-datepicker"
        },
        {
          name: "Драг н дроп",
          path: "/components_library/drag-n-drop"
        },
        {
          name: "Контекстное меню",
          path: "/components_library/context-menu"
        },
        {
          name: "Комбо-бокс с мультивыбором",
          path: "/components_library/form-select-multi"
        },
        {
          name: "Комбо-бокс с автозаполнением",
          path: "/components_library/form-select-autocomplete"
        },
        {
          name: "Модальное окно",
          path: "/components_library/modal"
        },
        {
          name: "Внутреннее меню вкладок",
          path: "/components_library/tabs"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.header-top {
  background: linear-gradient(90deg, #17a05e 0%, #0e5cad 100%);
  height: 60px;

  &__logo {
    margin-right: 11px;
    margin-left: 24px;
  }
  &__title,
  &__text {
    cursor: default;
  }
  &__title {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.25;
    color: #ffffff;
    margin-bottom: 3px;
  }
  &__text {
    font-size: 0.625rem;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.5);
  }

  &__account {
    cursor: pointer;
    padding-right: 1rem;
    color: rgba(255, 255, 255, 0.3);
    position: relative;
    &:hover {
      color: #fff;
      .dropdown {
        display: block;
      }
    }
    &-name {
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 1.16;
      margin-right: 0.5rem;
      color: #ffffff;
    }
    &-avatar {
      max-width: 100%;
      &-wrapper {
        width: 55px;
        background: rgba(255, 255, 255, 0.6);
      }
    }
  }

  .dropdown {
    display: none;
    position: absolute;
    right: 0;
    top: 60px;
    background-color: #fff;
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    max-height: 400px;
    overflow: auto;
    z-index: 9;
    &__item {
      font-size: 12px;
      line-height: 18px;
      color: #666;
      display: block;
      padding: 10px 1rem;
      text-decoration: none;
      border-radius: 2px;
      &:hover {
        box-shadow: 0 2px 8px rgba(23, 160, 94, 0.3);
      }
    }
  }
}
</style>
