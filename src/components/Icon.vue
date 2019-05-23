<template>
  <svg class="icon" :class="`icon-${id}`">
    <use :href="`#icon-${id}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "arrow-drop-down"
    }
  }
};
</script>

<style lang="scss">
.icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.icon--small {
  width: 1em;
  height: 1em;
}

.icon-archive {
  width: 1.1201171875em;
}

.icon-map {
  width: 1.080078125em;
}

.icon-tank {
  width: 1.2724609375em;
}

.icon-list {
  width: 0.75em;
}

.icon-tech {
  width: 1.25em;
}

.icon-doc-sign {
  width: 0.75em;
}

.icon-delivery {
  width: 1.3046875em;
}

.icon-graph {
  width: 1.125em;
}
</style>
