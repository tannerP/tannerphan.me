import { Component, Inject, OnInit } from '@angular/core';
import { MenuStateService } from '../services/menu-state.service';
import { IgService } from '../services/ig.service';
import { DOCUMENT } from '@angular/platform-browser';
import {trigger, state, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  public menu_state: String;
  public menu_items = ['people', 'startup'];
  public bckgrnd_img_src = ['portfolio', '', 'blog', '',  'about',  '', 'photos', '', 'work'];
  constructor(@Inject(DOCUMENT) private document: any, private ig: IgService, public menuService: MenuStateService) { }
//  @HostListener('window:scroll', [])
  onWindowScroll() {
    // let number = this.document.body.scrollTop;
    // if (number > 120) {
    //   this.navIsFixed = true;
    //   console.log("number " + number);
    // } else if (this.navIsFixed && number < 10) {
    //   console.log("number " + number);
    //   this.navIsFixed = false;
    // }
  }

  ngOnInit() {
    this.menu_state =  'myself';
  }

  menu_onClick(event: any, item): void {
    // console.log(this.menu_state);
    // console.log(item);
    this.menuService.setState(item);
    this.menu_state = this.menuService.getState();
    // console.log(this.ig.httpLoadPics());
    return;
  }
  monolog_pane_showorhide(id): String {
    return id === this.menu_state ? '' : 'none';
  }
  getMenuState(): String {
    return this.menuService.getState();
  }
  setStyle(): any {
    let random: number;
    const url = ['../../assets/blog.jpg',
      '../../assets/camera.jpg',
      '../../assets/about.jpg'];

    random = Math.floor(Math.random() * 3) ;
    const style = {
        'background-image': 'url(' + url[random] + ')',
        'background-position': 'center',
        'background-repeat':'no-repeat',
        'background-size': 'contain',
    }
    return style;
  }

}