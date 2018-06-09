import '@ionic/core';
import {Component, Prop, Listen} from '@stencil/core';
import {MenuControllerInjector} from "../menu-controller-injector/menu-controller-injector";
import SuperloginClient from 'superlogin-client';
import {SuperloginClientConfig} from "../../common/config/superlogin-client.config";
SuperloginClient.configure(SuperloginClientConfig);

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  @Prop({connect: 'ion-toast-controller'}) toastCtrl: HTMLIonToastControllerElement;
  @Prop({connect: 'menu-controller-injector'}) menuInjector: MenuControllerInjector;
  @Prop({connect: 'nav-injector'}) navInjector: StencilComponents.NavInjector;
  private nav: HTMLIonNavElement;
  private menu: HTMLIonMenuControllerElement;
  private componentRoutes: any[] = [
    {name: 'Home', component: 'app-home', path: '/home', defaultParams: {}},
    {name: 'Profile', component: 'app-profile', path: '/profile/:name', defaultParams: {name: 'Iconic'}},
    {name: 'Login', component: 'login-page', path: '/login'},
    {name: 'Registration', component: 'registration-page', path: '/registration'},
  ];


  /**
   * Handle service worker updates correctly.
   * This code will showx a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */

  @Listen('window:swUpdate')
  async onSWUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'New version available',
      showCloseButton: true,
      closeButtonText: 'Reload'
    });
    await toast.present();
    await toast.onWillDismiss();
    window.location.reload();
  }

  async componentDidLoad() {
    this.nav = (await this.navInjector.create()) as HTMLIonNavElement;
    this.menu = (await this.menuInjector.create()) as HTMLIonMenuControllerElement;
  }

  gotoPage(pageName: string, params: any) {
    this.nav.setRoot(pageName, params);
    this.menu.close();
  }

  render() {
    return (
      <ion-app>
        <ion-router root={'/'} useHash={false}>
          {this.renderRoutes()}
        </ion-router>
        {this.renderMenu()}
        <ion-nav main></ion-nav>
      </ion-app>
    );
  }

  renderRoutes() {
    return this.componentRoutes.map((route: any) => {
      return <ion-route url={route.path} component={route.component}/>
    });
  }

  renderMenu() {
    return (
      <ion-menu>
        <ion-content class="menu">
          <ion-list style={{'padding': '10px'}}>
            {this.renderMenuButtions()}
          </ion-list>
        </ion-content>
      </ion-menu>
    );
  }

  renderMenuButtions() {
    return this.componentRoutes.map((route) => {
      return <ion-button expand={'block'}
                         onClick={() => this.gotoPage(route.component, route.defaultParams)}>{route.name}</ion-button>
    })
  }
}

