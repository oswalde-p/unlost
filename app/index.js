// import { gettext } from 'i18n'
import { Application } from './lib/view'
import { ViewMenu } from './views/menu'
import { ViewSomethingElse } from './views/something-else'

class MultiScreenApp extends Application {
  screens = { ViewMenu, ViewSomethingElse };
}

MultiScreenApp.start('ViewMenu')
