<template>
  <div class="mt-4">
    <div class="pb-5 mb-5">
      <code>.button</code>
      <div class="spacer-2 mt-1">
        <a class="button" href="#/components_library/button">Сохранить</a>
        <button class="button">Сохранить изменения</button>
      </div>

      <code class="d-block mt-5">.button.disabled, .button[disabled]</code>
      <div class="d-flex align-items-center spacer-2 mt-1">
        <button class="button disabled">Сохранить изменения</button>
        <button class="button button--pseudo" disabled>
          <icon id="repeat"></icon>Вернуть изменения
        </button>
      </div>

      <code class="d-block mt-5 mb-2">.button.button--pseudo</code>
      <div class="d-flex flex-wrap align-items-center spacer-3">
        <button class="button button--pseudo">Показать все</button>
        <button class="button button--pseudo">
          <icon id="filter"></icon>Фильтр
        </button>
        <button class="button button--pseudo">
          <icon id="download"></icon>Экспорт в Excel
        </button>
        <button class="button button--pseudo">
          <icon id="repeat"></icon>Вернуть изменения
        </button>
        <button class="button button--pseudo">
          <icon id="plus"></icon>Добавить фильтр
        </button>
      </div>
      <div class="d-flex flex-wrap align-items-center spacer-3 mt-1">
        <button class="button button--pseudo">
          <icon id="cross"></icon>Удалить
        </button>
        <button class="button button--pseudo">
          <icon id="eye"></icon>Посмотреть
        </button>
        <button class="button button--pseudo">
          <icon id="eye-off"></icon>Скрыть колонки
        </button>
        <button class="button button--pseudo">К установке
          <icon id="forward"></icon>
        </button>
      </div>

      <code class="d-block mt-5 mb-3">.button.button--xl, .button--rounded, .button--fixed-action</code>
      <div class="d-flex flex-wrap align-items-center spacer-3">
        <button class="button button--xl">Добавить</button>
        <button class="button button--xl button--rounded">
          <icon id="plus"></icon>Добавить
        </button>
        <button class="button button--xl button--rounded button--fixed-action">
          <icon id="plus"></icon>Добавить
        </button>
      </div>

      <code class="d-block mt-5 mb-2">.button.button--sm</code>
      <div class="d-flex flex-wrap align-items-center spacer-3">
        <button class="button button--pseudo button--sm">
          <icon id="eye"></icon>Посмотреть
        </button>
      </div>

      <code
        class="d-block mt-5 mb-2"
      >.button.button--single-icon, .button--icon-lg.button--color-grey, .button--icon-xl.button--color-black, .button--color-light</code>
      <div class="d-flex flex-wrap align-items-center spacer-3">
        <button class="button button--single-icon">
          <icon id="more"></icon>
        </button>
        <button class="button button--single-icon button--color-grey">
          <icon id="backward"></icon>
        </button>
        <button class="button button--single-icon button--icon-lg button--color-grey">
          <icon id="cross"></icon>
        </button>
        <button class="button button--single-icon button--icon-xl button--color-black">
          <icon id="doc"></icon>
        </button>
        <button class="button button--single-icon button--color-black">
          <icon id="doc"></icon>
        </button>
        <button class="button button--single-icon button--sm button--color-black">
          <icon id="doc"></icon>
        </button>
        <button class="button button--single-icon button--color-light">
          <icon id="angle-down"></icon>
        </button>
        <button class="button button--single-icon button--color-light">
          <icon id="angle-up"></icon>
        </button>
      </div>

      <code
        class="d-block mt-5 mb-3"
      >.button.button--circle-xl, .button--circle, .button--circle-outline, .button--no-shadow</code>
      <div class="spacer-3">
        <button class="button button--circle-xl">
          <icon id="plus"></icon>
        </button>
        <button class="button button--circle">
          <icon id="plus"></icon>
        </button>
        <button class="button button--circle-outline">
          <icon id="plus"></icon>
        </button>
        <button class="button button--circle-outline button--no-shadow">
          <icon id="plus"></icon>
        </button>
      </div>

      <code class="d-block mt-5">.button-group .button.button--single-icon</code>
      <div class="spacer-2 mt-1">
        <div class="button-group">
          <button class="button button--single-icon">
            <icon id="minus"></icon>
          </button>
          <button class="button button--single-icon">
            <icon id="zoom"></icon>
          </button>
          <button class="button button--single-icon">
            <icon id="plus"></icon>
          </button>
        </div>
      </div>

      <code class="d-block mt-5">.button.button--highlight</code>
      <div class="spacer-2 mt-1">
        <button class="button button--pseudo button--highlight">
          <icon id="filter"></icon>Фильтр
        </button>
      </div>

      <code class="d-block mt-5">.button.button--selected</code>
      <div class="spacer-2 mt-1">
        <button class="button button--pseudo button--selected">
          <icon id="filter"></icon>Фильтр
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../components/Icon.vue";

export default {
  components: {
    Icon
  }
};
</script>

<style lang="scss">
</style>
