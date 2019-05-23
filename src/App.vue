<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <header class="header">
            <header-top></header-top>
            <header-nav></header-nav>
          </header>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <main>
            <b-container>
              <router-view></router-view>
            </b-container>
          </main>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";
import HeaderNav from "./components/HeaderNav.vue";
import Icon from "./components/Icon.vue";

export default {
  name: "app",
  components: {
    HeaderTop,
    HeaderNav,
    Icon
  },
  data() {
    return {
      msg: "Добро пожаловать в кабинет природопользователя АИС-СКО."
    };
  }
};
</script>

<style lang="scss">
.header {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 99;
}
</style>
