import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
  constructor(){}

  ngOnInit(){}
  
  id: any = "orderhistory";
  tabChange(ids:any){
    this.id= ids;
    console.log(this.id)
  }
}
