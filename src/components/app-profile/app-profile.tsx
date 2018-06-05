import { Component, Listen, Prop, State } from '@stencil/core';

import { urlB64ToUint8Array } from '../../helpers/utils';
import {IStencilElementInjector} from "../../interfaces/IStencilElementInjector";


@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {
  @Prop({'connect': 'modal-controller-injector'}) modalCtrlInjector: IStencilElementInjector;
  private modalCtrl: HTMLIonModalControllerElement;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Prop() name: string;

  @State() notify: boolean;
  @State() swSupport: boolean;

  // demo key from https://web-push-codelab.glitch.me/
  // replace with your key in production
  publicServerKey = urlB64ToUint8Array('BBsb4au59pTKF4IKi-aJkEAGPXxtzs-lbtL58QxolsT2T-3dVQIXTUCCE1TSY8hyUvXLhJFEUmH7b5SJfSTcT-E');

  // componentWillLoad() {
  //   if ('serviceWorker' in navigator && 'PushManager' in window) {
  //     this.swSupport = true;
  //   } else {
  //     this.swSupport = false;
  //   }
  // }


  componentWillLoad = async() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      this.swSupport = true;
    } else {
      this.swSupport = false;
    }
    this.modalCtrl = (await this.modalCtrlInjector.create()) as HTMLIonModalControllerElement;
    console.log(this.modalCtrl.create);
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
      this.modalCtrl.dismiss();
    });

    // present the modal
    const modalElement = await this.modalCtrl.create({
      component: element
    });
    modalElement.present();
  };

  @Listen('ionChange')
  subscribeToNotify($event: CustomEvent) {
    console.log($event.detail.checked);

    if ($event.detail.checked === true) {
      this.handleSub();
    }
  }

  handleSub() {
    // get our service worker registration
    navigator.serviceWorker.getRegistration().then((reg) => {

      // check if service worker is registered
      if (reg) {
        // get push subscription
        reg.pushManager.getSubscription().then((sub) => {

          // if there is no subscription that means
          // the user has not subscribed before
          if (sub === null) {
            // user is not subscribed
            reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: this.publicServerKey
            })
              .then((sub: PushSubscription) => {
                // our user is now subscribed
                // lets reflect this in our UI
                console.log('web push subscription: ', sub);
                this.notify = true;
              })
          }
        })
      }
    })
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-buttons slot="start">
            <ion-back-button defaultHref='/'></ion-back-button>
          </ion-buttons>

          <ion-title>Ionic PWA Toolkit</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <p>
          Hello! My name is {this.name}.
          My name was passed in through a route param!
        </p>

        {this.swSupport ? <ion-item>
          <ion-label>Notifications</ion-label>
          <ion-toggle checked={this.notify} disabled={this.notify}></ion-toggle>
        </ion-item> : null}
      </ion-content>
    ];
  }
}
