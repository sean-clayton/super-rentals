import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByCity(param) {
      return param !== ''
        ? this.get('store').query('rental', { city: param })
        : this.get('store').findAll('rental');
    }
  }
});
