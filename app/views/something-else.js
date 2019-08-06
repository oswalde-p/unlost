import { me } from 'appbit'
import document from 'document'

import { Application, View, $at } from '../lib/view'

const $ = $at('#view-something-else')

export class ViewSomethingElse extends View {
  el = $();

  constructor() {
    // this.btnStart = $("#btnStart");
    // this.lblTitle = $("#lblTitle");

    super()
  }

  goBack = () => {
    Application.switchTo('ViewMenu')
  }

  handleKeypress = (evt) => {
    if (evt.key === 'down') this.goBack()
  }

  onMount() {
    me.appTimeoutEnabled = false // Disable timeout
    console.log('starting second activity')

    // this.btnStart.addEventListener("click", this.handleStart);
    document.addEventListener('keypress', this.handleKeypress)
  }

  onRender() {
    // set things here
  }

  onUnmount() {
    // this.btnStart.removeEventListener("click", this.handleStart);
    document.removeEventListener('keypress', this.handleKeypress)
  }
}
