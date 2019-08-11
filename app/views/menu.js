import { me } from 'appbit'
import document from 'document'
import { gettext } from 'i18n'

import { Application, View, $at } from '../lib/view'

const $ = $at('#view-menu')
const listItems = ['menu.komoot', 'menu.gmaps', 'menu.settings']

export class ViewMenu extends View {
  el = $()

  constructor() {
    // this.btnStart = $("#btnStart");
    // this.lblTitle = $("#lblTitle");

    super()
  }

  handleStart = () => {
    Application.switchTo('ViewSomethingElse')
  }

  handleKeypress = (evt) => {
    if (evt.key === 'down') this.handleStart()
  }

  onMount() {
    me.appTimeoutEnabled = false // Disable timeout
    console.log('Showing menu')
    let nextIndex = 0
    listItems.forEach((item) => {
      const viewItem = document.getElementById(`menu-item-${nextIndex++}`)
      viewItem.getElementById('title').text = gettext(item)
      viewItem.style.display = 'inline'
    })
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
