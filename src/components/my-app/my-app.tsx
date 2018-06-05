// TODO: Link to Modal Controller definition and readme
// https://github.com/ionic-team/ionic/tree/master/core/src/components/modal-controller
import '@ionic/core';
import {Component, Prop, Listen} from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  @Prop({connect: 'ion-toast-controller'}) toastCtrl: HTMLIonToastControllerElement;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
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
    // this.presentModal();
  }

  presentModal = async () => {
    // initialize controller
    const modalController = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();

    // create component to open
    const element = document.createElement('div');
    element.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Super Modal</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <h1>Content of doom</h1>
        <div>Here's some more content</div>
        <ion-button class="dismiss">Dismiss Modal</ion-button>
      </ion-content>
    `;

    // listen for close event
    const button = element.querySelector('ion-button');
    button.addEventListener('click', () => {
      modalController.dismiss();
    });

    // present the modal
    const modalElement = await modalController.create({
      component: element
    });
    modalElement.present();
    /*<ion-modal-controller></ion-modal-controller>*/
  };

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url='/' component='app-home'></ion-route>
          <ion-route url='/profile/:name' component='app-profile'></ion-route>
        </ion-router>
        <ion-nav></ion-nav>
      </ion-app>
    );
  }
}

