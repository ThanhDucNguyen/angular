import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServerService {
    constructor(private http: HttpClient, public oktaAuth: OktaAuthService) {
    }
    private async request(method: string, url: string, data?: any) {
      const token = await this.oktaAuth.getAccessToken();
      const result = this.http.request(method, url, {
        body: data,
        responseType: 'json',
        observe: 'body',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return new Promise((resolve, reject) => {
        result.subscribe(resolve, reject);
      });
    }
    getEvents() {
      const url = `${environment.serverUrl}`; // site that doesn’t send Access-Control-*
        fetch(url)
        .then(response => response.text())
        .then(contents => console.log(contents))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
    createMember(event) {
      const url = `${environment.serverUrl}/add?name=${event.name}&phone=${event.phone}&email=${event.email}&yearBirth=${event.yearBirth}`; // site that doesn’t send Access-Control-*
        fetch(url)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
    updateMember(event) {
      console.log(event)
      const url = `${environment.serverUrl}/update/?name_old=${event.name_old}&yearBirth_old=${event.yearBirth_old}&name=${event.name}&phone=${event.phone}&email=${event.email}&yearBirth=${event.yearBirth}`; // site that doesn’t send Access-Control-*
        fetch(url)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
    deleteMember(event) {
      const url = `${environment.serverUrl}/delete/?name=${event.ho_ten}&yearBirth=${event.nam_sinh}`; // site that doesn’t send Access-Control-*
        fetch(url)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
}