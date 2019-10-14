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

  constdata: ConstData;

  constructor(public storage: Storage,constdata: ConstData,public router: Router) {

    this.constdata = constdata;
    
  }

  async ngOnInit(){
    //検証用
    //this.storage.clear();

    //初回処理
    var result = await this.storage.get("Firstload")
    .then((t)=>{
      if(t){
        return true;       
      } else {
        return false;
      };
    })
    .catch((err)=>{
      return false;
    });

    if (!result){

      //固定値
      await this.storage.set("Regions",JSON.stringify(this.constdata.dataRegions()))
      await this.storage.set("Favorites",JSON.stringify(this.constdata.dataFavorites()))

      //検証用(本番はコメントに)
      await this.storage.set("Events",JSON.stringify(this.constdata.dataEvents()))
      await this.storage.set("Members",JSON.stringify(this.constdata.dataMembers()))

      //初回ロード完了フラグ
      await this.storage.set("Firstload",true);

    }
  }

  onClickSetting(){
    this.router.navigate(["/tabs/tab2"]);
  }
}
