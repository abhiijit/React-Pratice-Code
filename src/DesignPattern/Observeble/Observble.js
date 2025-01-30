class loginOberveble {
  constructor() {
    this.observeble = [];
  }

  subscribe(func) {
    this.observeble.push(func);
  }
  unSubscribe(fn) {
    this.observeble = this.observeble.filter((f) => f !== fn);
  }
  notify(value) {
    this.observeble.forEach((oberser) => oberser(value));
  }
}

export default new loginOberveble();
