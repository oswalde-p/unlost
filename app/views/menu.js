import { me } from "appbit";
import document from "document";

import { Application, View, $at } from "../lib/view";

const $ = $at("#view-menu");

export class ViewMenu extends View {
  el = $();

  constructor() {
    // this.btnStart = $("#btnStart");
    // this.lblTitle = $("#lblTitle");

    super();
  }

  handleStart = () => {
    Application.switchTo("ViewSomethingElse");
  }

  handleKeypress = (evt) => {
    if (evt.key === "down") this.handleStart();
  }

  onMount() {
    me.appTimeoutEnabled = false; // Disable timeout
    console.log('Showing menu')
    // this.btnStart.addEventListener("click", this.handleStart);
    document.addEventListener("keypress", this.handleKeypress);
  }

  onRender() {
    // set things here
  }

  onUnmount() {
    // this.btnStart.removeEventListener("click", this.handleStart);
    document.removeEventListener("keypress", this.handleKeypress);
  }
}
