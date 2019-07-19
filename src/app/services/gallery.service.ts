import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  apiUrl:string = 'http://localhost:8080/gallery';

  constructor(private httpClient: HttpClient) { }

  getImages():Observable<any> {

    return this.httpClient.get(this.apiUrl);

  }

}
