import { Component, ViewChild,NgModule} from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { EventClass} from '../../shares/models'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  dataEvent = new EventClass;
  dataEvents: any;
  dataMembers: any;
  dataFavorites: any;

    constructor(public storage: Storage,public router: Router) {
      
    }

    async ngOnInit(){

      await this.storage.get("Events").then((t)=>{this.dataEvents=JSON.parse(t);});
      await this.storage.get("Members").then((t)=>{this.dataMembers=JSON.parse(t);});
      await this.storage.get("Favorites").then((t)=>{this.dataFavorites=JSON.parse(t);});
      
      this.dataEvent = this.dataEvents[0];
      
    }

}

    
    