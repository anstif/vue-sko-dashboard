<template>
  <nav class="header-nav">
    <b-container>
      <b-row align-h="between">
        <router-link
          class="header-nav__item d-flex align-items-center"
          v-for="item in nav"
          :to="item.path"
          :key="item.path"
        >
          <icon :id="item.icon" class="header-nav__icon"></icon>
          <span v-html="item.name"></span>
        </router-link>
      </b-row>
    </b-container>
  </nav>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  },
  data() {
    return {
      nav: [
        {
          icon: "archive",
          name: "Общие<br>сведения",
          path: "/general_information"
        },
        {
          icon: "map",
          name: "Адресные<br>объекты",
          path: "/address_objects"
        },
        {
          icon: "tank",
          name: "Виды<br>отходов",
          path: "/waste_types"
        },
        {
          icon: "list",
          name: "Нормативы<br>Лимиты",
          path: "/standards_limits"
        },
        {
          icon: "tech",
          name: "Установки и<br> Технологии",
          path: "/technologies"
        },
        {
          icon: "doc-sign",
          name: "Договоры",
          path: "/agreements"
        },
        {
          icon: "delivery",
          name: "Движение<br>отходов",
          path: "/waste_movement"
        },
        {
          icon: "graph",
          name: "Отчеты",
          path: "/reports"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.header-nav {
  box-shadow: 0 2px 4px rgba(204, 204, 204, 0.5);
  background-color: #fff;

  &__item {
    font-size: 14px;
    line-height: 20px;
    color: #999;
    height: 60px;
    padding: 0 11px;
    text-decoration: none;
    &:hover {
      color: #17a05e;
      text-decoration: none;
    }
    &.router-link-active {
      color: #17a05e;
      box-shadow: inset 0 -2px 0 #17a05e;
    }
  }
  &__icon {
    font-size: 24px;
    margin-right: 12px;
  }
}
</style>
