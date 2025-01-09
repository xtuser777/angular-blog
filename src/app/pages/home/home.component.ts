import { Component, OnInit } from '@angular/core';
import { dataFake, Post } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = dataFake;
  mainPost: Post = dataFake[0];
  constructor() { }

  ngOnInit(): void {
  }

}
