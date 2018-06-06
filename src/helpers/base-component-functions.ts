export function handleInputChangeHoc() {
  return function(propName: string, event: any) {
    this[propName] = event.target.value
    console.log(propName, event.target.value);
  };
}

export function handleFormSubmitHoc() {
  return (e, callback) => {
    e.preventDefault();
    callback();
  };
}
