import { Container, Graphics, Sprite } from "pixi.js";
import gsap from "gsap";

export default class Rocket extends Container {
  constructor() {
    super();
    this._body = new Sprite.from("rocket");
    this._fire = new Container();
    this.name = "rocket";

    this.addChild(this._body);
  }
}
