import {Component, Prop} from '@stencil/core';
import {IStencilElementInjector} from "../../interfaces/IStencilElementInjector";


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @Prop({'connect': 'modal-controller-injector'}) modalCtrlInjector: IStencilElementInjector;
  private modalCtrl: HTMLIonModalControllerElement;

  componentWillLoad = async() => {
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

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title>Ionic PWA Toolkit</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <main>
          <p>
            Welcome to the Ionic PWA Toolkit.
            You can use this starter to build entire PWAs all with
            web components using Stencil and ionic/core! Check out the readme for everything that comes in this starter out of the box and
            Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
          </p>

          <ion-button href='/profile/ionic'>
            Profile page
          </ion-button>
        </main>
      </ion-content>
    ];
  }
}
