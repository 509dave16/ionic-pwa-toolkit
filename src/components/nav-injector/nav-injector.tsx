import {Component, Method} from '@stencil/core';
import {IStencilElementInjector} from "../../interfaces/IStencilElementInjector";


@Component({
  tag: 'nav-injector'
})
export class NavInjector implements IStencilElementInjector {
  @Method()
  create(): Promise<HTMLIonNavElement> {
    const element: HTMLIonNavElement = document.querySelector('ion-nav');
    if (!element) {
      throw new Error('Did you forget to render an <ion-nav> element?');
    }
    return element.componentOnReady();
  }
}
