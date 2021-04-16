export default class Game {
  _name = 'Marbles';
  _version = 'v0.1.0';

  constructor({ name, version }) {
    if (this._isEmpty(name) || this._isEmpty(version)) return;
    this._name = name;
    this._version = version;
  }

  log() {
    return `${this._name} ${this._version}`;
  }

  _isEmpty(val) {
    return val === null || val === undefined || val === "";
  }
}