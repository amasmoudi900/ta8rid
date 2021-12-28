import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-menu',
  templateUrl: './popular-menu.component.html',
  styleUrls: ['./popular-menu.component.css']
})
export class PopularMenuComponent implements OnInit {

  popularMenuBanner = { subTitle: "Popular Menu", title: "Delicious Food Menu" }
  constructor() { }

  ngOnInit() {
  }

}