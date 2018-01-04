import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    filterByCity(city) {
      return city !== ""
        ? this.get("store")
            .query("rental", { city })
            .then(results => ({ query: city, results }))
        : this.get("store")
            .findAll("rental")
            .then(results => ({ query: city, results }));
    }
  }
});
