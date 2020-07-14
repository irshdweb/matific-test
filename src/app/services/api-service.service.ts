import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = 'assets/api/gallery.json';

  constructor(private http: HttpClient) { }

  getGallery(){
    return this.http.get(this.baseUrl);
  }
}
