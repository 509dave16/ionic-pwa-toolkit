import '@ionic/core';
import {Component, Prop, Listen} from '@stencil/core';
import {MenuControllerInjector} from "../menu-controller-injector/menu-controller-injector";

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
    this.nav.setRoot('app-profile', { name: 'hello world'});
  }

  gotoPage(pageName: string, params: any) {
    this.nav.setRoot(pageName, params);
    this.menu.close();
  }

  render() {
    return (
      <ion-app>
        <ion-router root={'/home'} useHash={false}>
          <ion-route url='/home' component='app-home'></ion-route>
          <ion-route url='/profile/:name' component='app-profile'></ion-route>
        </ion-router>
        <ion-menu>
          <ion-content class="menu">
            <ion-list style={{ 'padding': '10px'}}>
              <ion-button expand={'block'} onClick={() => this.gotoPage('app-home', {})}>Home</ion-button>
              <ion-button expand={'block'} onClick={() => this.gotoPage('app-profile', {name: 'iconic'})}>Profile</ion-button>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-nav main></ion-nav>
      </ion-app>
    );
  }
}

