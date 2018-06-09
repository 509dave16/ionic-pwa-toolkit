import {Component, Method} from '@stencil/core';
import {IStencilElementInjector} from "../../interfaces/IStencilElementInjector";


@Component({
  tag: 'menu-controller-injector'
})
export class MenuControllerInjector implements IStencilElementInjector {
  @Method()
  create(): Promise<HTMLIonMenuControllerElement> {
    const element: HTMLIonMenuControllerElement = document.querySelector('ion-menu-controller');
    if (!element) {
      throw new Error('Did you forget to render an <ion-menu> element? No ion-menu-controller element exists.');
    }
    return element.componentOnReady();
  }
}
