import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-lynda',
  templateUrl: './lynda.component.html',
  styleUrls: ['./lynda.component.scss']
})

export class LyndaComponent implements OnInit {
  testInfo = [];
  columnsToDisplay=['item','price'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;


  constructor(private http:HttpClient) { 

  }

  ngOnInit() {
    this.getTestInfo()
    this.dataSource.sort = this.sort;
    console.log("this.dataSource",this.dataSource)
  }

  getTestInfo(){
    this.http.get('./assets/testInfo.json').subscribe((res) => {
      //updating json object for display
      for(let i in res){
        this.testInfo.push({"item": i, "price": res[i]});
      }
      this.dataSource.data = this.testInfo;
    })
  }

}
