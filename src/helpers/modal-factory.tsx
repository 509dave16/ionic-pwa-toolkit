

export async function createSuperModal(modalCtrl: HTMLIonModalControllerElement): Promise<HTMLIonModalElement> {
  // create component to open
  const element: HTMLElement = document.createElement('div');
  element.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Super Modal</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <h1>Content of doom</h1>
        <div>Here's some more content</div>
        <ion-button class="dismiss">Dismiss Modal</ion-button>
      </ion-content>
    `;

  // listen for close event
  const button = element.querySelector('ion-button');
  button.addEventListener('click', () => {
    modalCtrl.dismiss();
  });

  // present the modal
  const modalElement: HTMLIonModalElement = await modalCtrl.create({
    component: element
  });
  return modalElement;
};
