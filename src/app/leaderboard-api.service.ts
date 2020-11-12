import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardApiService {

  // baseUrl = 'https://masters-pool.herokuapp.com/api/v1';
  baseUrl = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) { }

  getLeaderboard() {
    return this.http.get(`${this.baseUrl}/leaderboard`);
  }
}
