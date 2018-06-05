import '@ionic/core';
import {Component, Prop, Listen} from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  @Prop({connect: 'ion-toast-controller'}) toastCtrl: HTMLIonToastControllerElement;
  @Prop({connect: 'nav-injector'}) navInjector: StencilComponents.NavInjector;
  private nav: HTMLIonNavElement;
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
    this.nav.setRoot('app-profile', { name: 'hello world'});
  }

  render() {
    return (
      <ion-app>
        <ion-router root={'/home'} useHash={false}>
          <ion-route url='/home' component='app-home'></ion-route>
          <ion-route url='/profile/:name' component='app-profile'></ion-route>
        </ion-router>
        <ion-nav></ion-nav>
      </ion-app>
    );
  }
}

