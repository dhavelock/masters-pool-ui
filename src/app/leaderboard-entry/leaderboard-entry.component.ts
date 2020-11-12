import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leaderboard-entry',
  templateUrl: './leaderboard-entry.component.html',
  styleUrls: ['./leaderboard-entry.component.css']
})
export class LeaderboardEntryComponent implements OnInit {

  @Input() member: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.member)
  }

}
