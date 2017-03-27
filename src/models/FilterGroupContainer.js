class FilterGroupContainer {

  constructor(FilterGroupContainer) {
    if (!FilterGroupContainer) {
      this.operator = 'AND';
      this.groups = [{
        operator: "AND",
        filters: [],
        mandatory: false,
      }];
    } else {
      this.operator = FilterGroupContainer.operator;
      this.groups = FilterGroupContainer.groups;
    }

  }

  isBlank(str){
    return (str == null || /^\s*$/.test(str));
  }

  getValideFilter() {
    const isFilterValid = (filter) => filter.operator && filter.metadata && (!this.isBlank(filter.value));

    this.groups.map((group) => {
      group.filters = group.filters.filter(isFilterValid);
      return group;
    });

    return this;
  }

  reset() {
    this.operator = 'AND';
    this.groups = [{
      operator: "AND",
      filters: [],
    }];
  }

}


export default FilterGroupContainer;
