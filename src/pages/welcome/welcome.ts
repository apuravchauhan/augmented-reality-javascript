import { HomePage } from '../home/home';
import { PunjabiPage } from '../punjabi/punjabi';
import { HindiPage } from '../hindi/hindi';

import { Component } from '@angular/core';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  tab1Root = PunjabiPage;
  tab2Root = HindiPage;
  tab3Root = HomePage;
  constructor() {
  }
}