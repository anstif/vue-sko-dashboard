<template>
  <div class="mt-4">
    <code>form-spoiler</code>
    <div class="mt-3"></div>
    <form-spoiler :selected="selected1">
      <div slot="header">header</div>
      <div slot="body">body</div>
    </form-spoiler>
    <div class="mt-4"></div>
    <form-spoiler :selected="selected1">
      <div slot="header">
        <h5>Категория бизнеса</h5>
      </div>
      <div slot="body">
        <form-spoiler :selected="selected1">
          <div slot="header">
            <p>Полное наименование</p>
          </div>
          <div slot="body">body</div>
        </form-spoiler>
      </div>
    </form-spoiler>
    <div class="mt-4"></div>
    <form-spoiler :selected="selected2">
      <div slot="header">
        <p>Полное наименование</p>
      </div>
      <div slot="body">body</div>
    </form-spoiler>
  </div>
</template>

<script>
import FormSpoiler from "../components/FormSpoiler.vue";

export default {
  components: {
    FormSpoiler
  },
  data() {
    return {
      selected1: false,
      selected2: true
    };
  }
};
</script>

<style lang="scss">
</style>
