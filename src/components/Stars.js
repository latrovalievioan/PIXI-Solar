import { Container, Graphics, Sprite } from "pixi.js";
import gsap from "gsap";

export default class Stars extends Container {
  constructor() {
    super();
    this.name = "stars";
    for (let i = 0; i < 20; i++) {
      this._createStar();
    }
  }
  _createStar() {
    const star = new Sprite.from("star");
    this.addChild(star);
    star.x = Math.floor(Math.random() * 2500 - 1000);
    star.y = Math.floor(Math.random() * 1000 - 800);
  }
}
