import Component from '@ember/component';
import { debounce } from '@ember/runloop';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then(({ results }) => this.set('results', results));
  },

  filterItems() {
    let filterInputValue = this.get('value');
    let filterAction = this.get('filter');
    filterAction(filterInputValue).then(({ query, results }) => {
      if (query === this.get('value')) this.set('results', results)
    });
  },

  actions: {
    handleFilterEntry() {
      debounce(this, this.filterItems, 200);
    }
  }
});
