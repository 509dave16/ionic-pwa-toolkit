import {Component, Method} from '@stencil/core';
import {IStencilElementInjector} from "../../interfaces/IStencilElementInjector";

const element: HTMLIonModalControllerElement = document.createElement('ion-modal-controller');
const root: HTMLIonAppElement = document.querySelector('ion-app');
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
