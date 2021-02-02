import { BLEND_MODES, Container, Graphics, Sprite } from "pixi.js";
import gsap from "gsap";

export default class Sun extends Container {
  constructor() {
    super();
    this._blast = new Sprite.from("sun-blast");
    this._blast.anchor.set(0.5, 0.5);
    this._glowTop = new Sprite.from("sun-glow");
    this._glowTop.anchor.set(0.5, 0.5);
    this._glowTop.blendMode = BLEND_MODES.SCREEN;
    this._glowBottom = new Sprite.from("sun-glow");
    this._glowBottom.anchor.set(0.5, 0.5);
    this._glowBottom.blendMode = BLEND_MODES.SCREEN;
    this._body = new Sprite.from("sun");
    this._body.anchor.set(0.5, 0.5);
    this.name = "sun";
    this.addChild(this._blast);
    this.addChild(this._glowTop);
    this.addChild(this._glowBottom);
    this.addChild(this._body);
  }
}
