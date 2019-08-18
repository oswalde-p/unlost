import { Application } from './lib/view'
import { ViewSplash } from './views/splash'
import { ViewMenu } from './views/menu'
import { ViewSomethingElse } from './views/something-else'

class MultiScreenApp extends Application {
  screens = { ViewSplash, ViewMenu, ViewSomethingElse };
}

MultiScreenApp.start('ViewSplash')
