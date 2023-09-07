import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:8080/api/videos/upload';

  constructor(private http: HttpClient) { }

  uploadVideo(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }
}
