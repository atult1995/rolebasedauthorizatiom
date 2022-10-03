import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public backend:BackendService) { }

  ngOnInit(): void {
    console.log("ad",this.backend.isAdmin,"user",this.backend.isLoggedIn)
  }

}
