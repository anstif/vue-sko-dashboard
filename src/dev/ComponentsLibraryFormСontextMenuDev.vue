<template>
  <div class="mt-4">
    <code>ContextMenu</code>
    <div class="mt-4"></div>

    <context-menu>
      <template v-slot>
        <router-link class="dropdown__item" to="/general_information">Ссылка</router-link>
        <a href="#!" @click.prevent="click">Удалить</a>
      </template>
    </context-menu>
  </div>
</template>

<script>
import ContextMenu from "../components/ContextMenu.vue";

export default {
  components: {
    ContextMenu
  },
  data() {
    return {};
  },
  methods: {
    click() {
      alert("Удалить");
    }
  }
};
</script>

<style lang="scss">
</style>
