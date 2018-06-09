import {Component, Prop, State} from "@stencil/core";
// import {RxDBService} from "../common/services/rxdb.service";
import {BaseComponent} from "../common/classes/BaseComponent";
@Component({tag: 'rxdb-page'})
export class RxdbPage extends BaseComponent {
  @State() createAuthorName: string;
  @Prop({ connect: 'ion-loading-controller'}) loadCtrl: StencilComponents.IonLoadingController;

  createAuthor = async() => {
    // const loading: StencilComponents.IonLoading = await this.loadCtrl.create({ content: "Creating author"});
    // loading.present();
    // await RxDBService.createAuthor(this.createAuthorName);
    // loading.dismiss();
  };
  
  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title>RxDB Page</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-item-group>
          <ion-item-divider color="light">Create Author</ion-item-divider>
          <form onSubmit={(e) => this.handleFormSubmit(e, this.createAuthor)}>
            <ion-item>
              <ion-label>Name</ion-label>
              <ion-input onInput={(e) => this.handleInputChange('createAuthorName', e)} type={'text'}/>
            </ion-item>
            <ion-button expand={'block'} type={'submit'}>Submit</ion-button>
          </form>
        </ion-item-group>
      </ion-content>
    ];
  }
}
