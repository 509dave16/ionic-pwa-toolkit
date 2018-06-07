import {Component, Prop, State} from "@stencil/core";
import {BaseComponent} from "../common/classes/BaseComponent";
import {SuperLoginService} from "../common/superlogin-service";

@Component({tag: 'login-page'})
export class LoginPage extends BaseComponent {
  @Prop({connect: 'ion-loading-controller'}) loadCtrl: StencilComponents.IonLoadingController;
  @State() username: string;
  @State() password: string;
  @Prop({connect: 'nav-injector'}) navInjector: StencilComponents.NavInjector;
  private nav: HTMLIonNavElement;

  componentWillLoad() {
    super.componentWillLoad();
    this.initialize();
  };

  private async initialize() {
    this.nav = await (this.navInjector.create()) as HTMLIonNavElement;
  }

  login = async () => {
    const loading = await this.loadCtrl.create({content: 'Logging In'});
    loading.present();
    console.log(this.username, this.password);
    await SuperLoginService.login(this.username, this.password);
    loading.dismiss();
    this.nav.setRoot('app-home', {});
  };

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title>Login</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-item-group>
          <form onSubmit={(e) => this.handleFormSubmit(e, this.login)}>
            <ion-item>
              <ion-label>Username</ion-label>
              <ion-input onInput={(e) => this.handleInputChange('username', e)} type={'text'}/>
            </ion-item>
            <ion-item>
              <ion-label>Password</ion-label>
              <ion-input onInput={(e) => this.handleInputChange('password', e)} type={'password'}/>
            </ion-item>
            <ion-button expand={'block'} type={'submit'}>Submit</ion-button>
          </form>
        </ion-item-group>
      </ion-content>
    ];
  }
}
