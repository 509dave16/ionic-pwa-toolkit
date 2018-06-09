import {Component, Prop, State} from "@stencil/core";
import {BaseComponent} from "../common/classes/BaseComponent";
import {SuperLoginService} from "../common/superlogin-service";

@Component({tag: 'registration-page'})
export class RegistrationPage extends BaseComponent {
  @State() name: string;
  @State() username: string;
  @State() email: string;
  @State() password: string;
  @State() confirmPassword: string;
  @Prop({connect: 'ion-loading-controller'}) loadCtrl: StencilComponents.IonLoadingController;
  @Prop({connect: 'ion-alert-controller'}) alertCtrl: StencilComponents.IonAlertController;
  @Prop({connect: 'nav-injector'}) navInjector: StencilComponents.NavInjector;
  private nav: HTMLIonNavElement;

  componentWillLoad() {
    super.componentWillLoad();
    this.initalize();
  };

  initalize = async() => {
    this.nav = await (this.navInjector.create()) as HTMLIonNavElement;
  };

  register = async() => {
    const loading: HTMLIonLoadingElement = await this.loadCtrl.create({ content: 'Registering'});
    loading.present();
    const success: boolean = await SuperLoginService.register(this.name, this.username, this.password, this.confirmPassword, this.email);
    loading.dismiss();
    console.log(this.nav);
    if (success) {
      this.nav.setRoot('app-home', {});
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Registration Error',
        message: 'Invalid submission. Please correct the fields.',
        buttons: ['Dismiss']

      });
      alert.present();
    }
  };

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title>Registration</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-item-group>
          <form onSubmit={(e) => this.handleFormSubmit(e, this.register)}>
            <ion-item>
              <ion-label>Name</ion-label>
              <ion-input onInput={(e) => this.handleInputChange('name', e)} type={'text'}/>
            </ion-item>
            <ion-item>
              <ion-label>Username</ion-label>
              <ion-input onInput={(e) => this.handleInputChange('username', e)} type={'text'}/>
            </ion-item>
            <ion-item>
              <ion-label>Password</ion-label>
              <ion-input onInput={(e) => this.handleInputChange('password', e)} type={'password'}/>
            </ion-item>
            <ion-item>
              <ion-label>Confirm Password</ion-label>
              <ion-input onInput={(e) => this.handleInputChange('confirmPassword', e)} type={'password'}/>
            </ion-item>
            <ion-item>
              <ion-label>Email</ion-label>
              <ion-input onInput={(e) => this.handleInputChange('email', e)} type={'email'}/>
            </ion-item>
            <ion-button expand={'block'} type={'submit'}>Submit</ion-button>
          </form>
        </ion-item-group>
      </ion-content>
    ];
  }
}
