import {Component, Method} from '@stencil/core';
import {IStencilElementInjector} from "../../interfaces/IStencilElementInjector";


@Component({
  tag: 'nav-injector'
})
export class NavInjector implements IStencilElementInjector {
  @Method()
  create(): Promise<HTMLIonNavElement> {
    const element: HTMLIonNavElement = document.querySelector('ion-nav');
    return element.componentOnReady();
  }
}
