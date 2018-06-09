export class SuperLogin {
  private url: string = 'https://dsf-pouchdb-auth.herokuapp.com';
  private session: any;
  constructor() {}

  async login(username, password) {
    const headers: any = {'Content-Type': 'application/json', 'Accept': 'application/json'};
    const credentials = { username, password };
    try {
      const response: Response = await fetch(`${this.url}/auth/login`, {
        method: 'POST',
        cache: 'no-cache',
        headers: headers,
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      data.serverTimeDiff = data.issued - Date.now();
      console.log(data);
      this.setSession(data);
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }

  async register(name: string, username: string, password: string, confirmPassword: string, email: string) {
    const form = { name, username, password, confirmPassword, email };
    const headers: any = {'Content-Type': 'application/json', 'Accept': 'application/json'};
    try {
      const response: Response = await fetch(`${this.url}/auth/register`, {
        method: 'POST',
        cache: 'no-cache',
        headers: headers,
        body: JSON.stringify(form)
      });
      const data = await response.json();
      data.serverTimeDiff = data.issued - Date.now();
      this.setSession(data);
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }

  private setSession(session) {
    this.session = session;
    localStorage.setItem('superlogin.session', JSON.stringify(this.session));
  }
}
export const SuperLoginService: SuperLogin = new SuperLogin();
