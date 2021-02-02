import { Sprite } from "pixi.js";
import Scene from "./Scene";
import gsap from "gsap";
import Footer from "../components/Footer";
import Sun from "../components/Sun";
import Earth from "../components/Earth";
import Stars from "../components/Stars";

export default class Play extends Scene {
  async onCreated() {
    const footer = new Footer();
    footer.x = -window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    this.addChild(footer);

    const sun = new Sun();
    sun.x = 600;
    sun.y = -200;
    sun.z = 300;
    this.addChild(sun);

    const earth = new Earth();
    earth.x = -600;
    earth.y = 50;
    earth.z = 300;
    this.addChild(earth);
    earth.rocketStart();

    const stars = new Stars();
    stars.z = 0;
    this.addChild(stars);
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) {
    // eslint-disable-line no-unused-vars
  }
}
