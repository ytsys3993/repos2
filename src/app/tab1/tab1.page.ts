import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';
import { ConstData} from '../../shares/models'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public storage: Storage,public constdata: ConstData,public router: Router) {

    //初回処理
    this.storage.get("Firstload")
    .then((t)=>{
    })
    .catch((err)=>{
      this.storage.set("RegionMaster",constdata.dataRegion)
      this.storage.set("Firstload",true)
    });
    
  }
  onClickSetting(){
    this.router.navigate(["/tabs/tab2"]);
  }
}
