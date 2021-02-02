import { Container, Graphics, Sprite } from "pixi.js";
import gsap from "gsap";
import Rocket from "./Rocket";
export default class Earth extends Container {
  constructor() {
    super();
    this._body = new Sprite.from("earth");
    this._body.anchor.set(0.5, 0.5);
    this.name = "earth";
    this.addChild(this._body);
    this.rocket = new Rocket();
    this.rocket.pivot.set(-400, 5);
    this.addChild(this.rocket);
  }
  rocketStart() {
    gsap.to(this.rocket, {
      rotation: -Math.PI * 2,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
  }
}
