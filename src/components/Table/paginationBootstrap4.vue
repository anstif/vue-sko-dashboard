<template>
  <nav v-if="totalPage > 1">
    <ul class="pagination">
      <!-- <li :class="['page-item', {'disabled': isOnFirstPage}]">
        <a href="#!" class="page-link" @click.prevent="loadPage('prev')">
          <svg class="icon icon-angle-left">
            <use href="#icon-angle-left"></use>
          </svg>
        </a>
      </li>-->

      <template v-if="notEnoughPages">
        <li v-for="n in totalPage" :key="n" :class="['page-item', {'active': isCurrentPage(n-1)}]">
          <a href="#!" class="page-link" @click.prevent="loadPage(n-1)" v-html="n"></a>
        </li>
      </template>
      <template v-else>
        <li
          v-for="n in windowSize"
          :key="n"
          :class="['page-item', {'active': isCurrentPage(windowStart+n-1)}]"
        >
          <a
            href="#!"
            class="page-link"
            @click.prevent="loadPage(windowStart+n-1)"
            v-html="windowStart+n-1"
          ></a>
        </li>
      </template>

      <!-- <li :class="['page-item', {'disabled': isOnLastPage}]">
        <a class="page-link" href="#!" @click.prevent="loadPage('next')">
          <svg class="icon icon-angle-right">
            <use href="#icon-angle-right"></use>
          </svg>
        </a>
      </li>-->
    </ul>
  </nav>
</template>

<script>
import VuetablePaginationMixin from "vuetable-2/src/components/VuetablePaginationMixin";

export default {
  mixins: [VuetablePaginationMixin]
};
</script>
