import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CatalogPage } from '../pages/catalog/catalog';
import { ContactPage } from '../pages/contact/contact';
import { ProductPage } from '../pages/product/product';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { CategoryPage } from '../pages/category/category';
import { HighlightPage } from '../pages/highlight/highlight';
import { SettingsPage } from '../pages/settings/settings';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '28c07576'
  },
  'push': {
    'sender_id': '523148085242',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CatalogPage,
    ContactPage,
    ProductPage,
    CategoryPage,
    HighlightPage,
    HomePage,
    TabsPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CatalogPage,
    ContactPage,
    ProductPage,
    CategoryPage,
    HighlightPage,
    HomePage,
    TabsPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
