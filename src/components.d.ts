/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@ionic/core';
import 'ionicons';


declare global {

  namespace StencilComponents {
    interface AppRoot {

    }
  }

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-root': JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MenuControllerInjector {
      'create': () => Promise<HTMLIonMenuControllerElement>;
    }
  }

  interface HTMLMenuControllerInjectorElement extends StencilComponents.MenuControllerInjector, HTMLStencilElement {}

  var HTMLMenuControllerInjectorElement: {
    prototype: HTMLMenuControllerInjectorElement;
    new (): HTMLMenuControllerInjectorElement;
  };
  interface HTMLElementTagNameMap {
    'menu-controller-injector': HTMLMenuControllerInjectorElement;
  }
  interface ElementTagNameMap {
    'menu-controller-injector': HTMLMenuControllerInjectorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'menu-controller-injector': JSXElements.MenuControllerInjectorAttributes;
    }
  }
  namespace JSXElements {
    export interface MenuControllerInjectorAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface ModalControllerInjector {
      'create': () => Promise<HTMLIonModalControllerElement>;
    }
  }

  interface HTMLModalControllerInjectorElement extends StencilComponents.ModalControllerInjector, HTMLStencilElement {}

  var HTMLModalControllerInjectorElement: {
    prototype: HTMLModalControllerInjectorElement;
    new (): HTMLModalControllerInjectorElement;
  };
  interface HTMLElementTagNameMap {
    'modal-controller-injector': HTMLModalControllerInjectorElement;
  }
  interface ElementTagNameMap {
    'modal-controller-injector': HTMLModalControllerInjectorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'modal-controller-injector': JSXElements.ModalControllerInjectorAttributes;
    }
  }
  namespace JSXElements {
    export interface ModalControllerInjectorAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface NavInjector {
      'create': () => Promise<HTMLIonNavElement>;
    }
  }

  interface HTMLNavInjectorElement extends StencilComponents.NavInjector, HTMLStencilElement {}

  var HTMLNavInjectorElement: {
    prototype: HTMLNavInjectorElement;
    new (): HTMLNavInjectorElement;
  };
  interface HTMLElementTagNameMap {
    'nav-injector': HTMLNavInjectorElement;
  }
  interface ElementTagNameMap {
    'nav-injector': HTMLNavInjectorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'nav-injector': JSXElements.NavInjectorAttributes;
    }
  }
  namespace JSXElements {
    export interface NavInjectorAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppHome {

    }
  }

  interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppProfile {
      'name': string;
    }
  }

  interface HTMLAppProfileElement extends StencilComponents.AppProfile, HTMLStencilElement {}

  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      'name'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LoginPage {

    }
  }

  interface HTMLLoginPageElement extends StencilComponents.LoginPage, HTMLStencilElement {}

  var HTMLLoginPageElement: {
    prototype: HTMLLoginPageElement;
    new (): HTMLLoginPageElement;
  };
  interface HTMLElementTagNameMap {
    'login-page': HTMLLoginPageElement;
  }
  interface ElementTagNameMap {
    'login-page': HTMLLoginPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'login-page': JSXElements.LoginPageAttributes;
    }
  }
  namespace JSXElements {
    export interface LoginPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface RegistrationPage {

    }
  }

  interface HTMLRegistrationPageElement extends StencilComponents.RegistrationPage, HTMLStencilElement {}

  var HTMLRegistrationPageElement: {
    prototype: HTMLRegistrationPageElement;
    new (): HTMLRegistrationPageElement;
  };
  interface HTMLElementTagNameMap {
    'registration-page': HTMLRegistrationPageElement;
  }
  interface ElementTagNameMap {
    'registration-page': HTMLRegistrationPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'registration-page': JSXElements.RegistrationPageAttributes;
    }
  }
  namespace JSXElements {
    export interface RegistrationPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface RxdbPage {

    }
  }

  interface HTMLRxdbPageElement extends StencilComponents.RxdbPage, HTMLStencilElement {}

  var HTMLRxdbPageElement: {
    prototype: HTMLRxdbPageElement;
    new (): HTMLRxdbPageElement;
  };
  interface HTMLElementTagNameMap {
    'rxdb-page': HTMLRxdbPageElement;
  }
  interface ElementTagNameMap {
    'rxdb-page': HTMLRxdbPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'rxdb-page': JSXElements.RxdbPageAttributes;
    }
  }
  namespace JSXElements {
    export interface RxdbPageAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
