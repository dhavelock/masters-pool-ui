import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { LeaderboardApiService } from '../leaderboard-api.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  pool: any
  columnsToDisplay = ['nickname', 'score'];

  constructor(private leaderboardApi: LeaderboardApiService) { }

  ngOnInit(): void {
    this.leaderboardApi.getLeaderboard().subscribe((response: any) => {
      this.pool = response
    });
  }
}
