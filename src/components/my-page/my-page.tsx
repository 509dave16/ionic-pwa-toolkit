import {Component, Prop} from "@stencil/core";

@Component({ tag: 'my-page'})
export class MyContent {
  @Prop() pageTitle: string;
  render() {
    return ([
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title>{this.pageTitle}</ion-title>
        </ion-toolbar>
      </ion-header>,
        <ion-menu contentId={'my-content'}>
          <ion-content class="menu">
            <ion-list style={{ 'padding': '10px'}}>
              <ion-button expand={'block'} href={'/home'}>Home</ion-button>
              <ion-button expand={'block'} href={'/profile/fromMenu'}>Profile</ion-button>
            </ion-list>
          </ion-content>
        </ion-menu>,
        <ion-content id="my-content" padding>
          <slot />
        </ion-content>
    ])
  }
}
