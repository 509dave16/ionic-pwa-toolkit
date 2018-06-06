import {handleFormSubmitHoc, handleInputChangeHoc} from "../../helpers/base-component-functions";
export class BaseComponent {
  handleInputChange: Function;
  handleFormSubmit: Function;

  componentWillLoad() {
    this.handleInputChange = handleInputChangeHoc().bind(this);
    this.handleFormSubmit = handleFormSubmitHoc().bind(this);
  }

}
