import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer B QAt6EqSaePGHZq9cSWpWCxAEv3wnPT7xOmPu_uwVaT_k61r78x6o7Qk1bpGvj_4yMbuiWmGeb5Uqp6hXcU',
    });

    return this.http.get(url, { headers });
  }

  getNewRealeses() {
    return this.getQuery('browse/new-releases').pipe(
      map((data) => {
        return data['albums'].items;
      })
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(
      map((data) => {
        return data['artists'].items;
      })
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data) => {
        return data['tracks'];
      })
    );
  }

}
