export default {
  table: {
    tableWrapper: '',
    tableHeaderClass: 'mb-0',
    tableBodyClass: 'mb-0',
    tableClass: 'table table-borderless',
    loadingClass: 'loading',
    ascendingIcon: 'arrow-drop-up',
    descendingIcon: 'arrow-drop-down',
    ascendingClass: 'sorted-asc',
    descendingClass: 'sorted-desc',
    sortableIcon: 'filter',
    detailRowClass: 'vuetable-detail-row',
    handleIcon: 'fa fa-bars text-secondary',
    renderIcon(classes, options) {
      return `<svg class="icon ${classes.join(' icon-')}"><use href="#icon-${classes[1]}"></use></svg>`
    }
  },
  pagination: {
    wrapperClass: 'pagination float-right',
    activeClass: 'active',
    disabledClass: 'disabled',
    pageClass: 'page-item',
    linkClass: 'page-link',
    paginationClass: 'pagination',
    paginationInfoClass: 'float-left',
    dropdownClass: 'form-control',
    icons: {
      first: 'fa fa-chevron-left',
      prev: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      last: 'fa fa-chevron-right',
    }
  }
}
