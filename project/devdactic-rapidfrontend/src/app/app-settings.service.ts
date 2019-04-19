import { Injectable } from '@angular/core';
const CONFIG = {
  apiUrl: 'https://api.mlab.com/api/1/databases?apiKey=R97lJ9eRI-1FIbC6F2Dnw7x4EJVBMzGD',
};
@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor() { }
  
    public getApiUrl() {
      return CONFIG.apiUrl;
    }
  }

