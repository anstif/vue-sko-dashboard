<template>
  <div class="mt-5">
    <div>
      <code>&lt;icon id=&quot;date&quot;&gt;&lt;/icon&gt;</code>
    </div>
    <b-row class="mt-4">
      <b-col lg="auto" v-for="icon in icons" :key="icon" class="mb-4 text-center icon-grid">
        <p class="text text--small text--tip mb-3">{{ icon }}</p>
        <icon :id="icon"></icon>
      </b-col>
    </b-row>
    <div class="mt-4">
      <code>&lt;icon id=&quot;date&quot; class=&quot;icon--small&quot;&gt;&lt;/icon&gt;</code>
    </div>
    <b-row class="mt-4">
      <b-col lg="auto" v-for="icon in icons" :key="icon" class="mb-4 text-center">
        <p class="text text--small text--tip mb-2">{{ icon }}</p>
        <icon :id="icon" class="icon--small"></icon>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Icon from "../components/Icon.vue";

export default {
  components: {
    Icon
  },
  data() {
    return {
      icons: [
        "date",
        "doc",
        "grid",
        "eye",
        "repeat",
        "filter",
        "location",
        "download",
        "heart",
        "burger",
        "more",
        "plus",
        "cross",
        "check",
        "backward",
        "forward",
        "angle-up",
        "angle-down",
        "angle-left",
        "angle-right",
        "arrow-drop-up",
        "arrow-drop-down"
      ]
    };
  }
};
</script>

<style lang="scss">
.icon-grid {
  min-width: 8%;
}
</style>
