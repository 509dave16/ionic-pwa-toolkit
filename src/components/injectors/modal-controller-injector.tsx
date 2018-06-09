import {Component, Method} from '@stencil/core';
import {IStencilElementInjector} from "../../interfaces/IStencilElementInjector";

const element: HTMLIonModalControllerElement = document.createElement('ion-modal-controller');
const root: HTMLIonAppElement = document.querySelector('ion-app');
if (!element) {
  throw new Error('Did you forget to render an <ion-app> element? Must have one to attach a ion-modal-controller element to.');
}
root.appendChild(element);

@Component({
  tag: 'modal-controller-injector'
})
export class ModalControllerInjector implements IStencilElementInjector {
  @Method()
  create(): Promise<HTMLIonModalControllerElement> {
    return element.componentOnReady();
  }
}
