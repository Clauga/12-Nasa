import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiKey = 'CaDMI2Nwkec5jaE5lJBPShLYwCcY8XEUjgpFmJoN';

  constructor(private http: HttpClient) { }

  getImageOfTheDay(): Observable<string> {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
    return this.http.get<any>(apiUrl).pipe(
      map((response: any) => response.url)
    );
  }
}
