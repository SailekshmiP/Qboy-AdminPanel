import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-general-menu',
  templateUrl: './general-menu.component.html',
  styleUrls: ['./general-menu.component.css']
})
export class GeneralMenuComponent implements OnInit {
  displayedColumns = ['id', 'itemname', 'itemimage', 'action'];
  dataSource = new MatTableDataSource();
  results;
  apiUrl;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  page: number = 0;
  limit: number = 20;
  // skip: number = 0;
  totalLength: number;
  pageIndex: number = 0;
  // pageLimit: number[] = [5, 10];
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice: EasydealService, 
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.apiUrl = "https://shopgi.in/";

    this.getallgeneralmenu();
  }

  getallgeneralmenu() {
    this.easydeelservice.getallgeneralmenubypagination(this.page).subscribe(
      data => {
        this.results = data['gmenu'];
        this.dataSource.data = this.results;
        let totalelements = data['totalPages'] * 20;
        console.log(totalelements)
        this.totalLength = totalelements;
      },
      error => {

      }
    )
  }
  active(s) {
    console.log(s);

    this.easydeelservice.changestatus(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        this.ngOnInit();
      },
      error => {
        this.toastr.error("Unable to Update status");
        this.ngOnInit();

      }
    )
  }
  inactive(s) {

    this.easydeelservice.changestatus(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        this.ngOnInit();
      },
      error => {
        this.toastr.error("Unable to Update status");
        this.ngOnInit();

      }
    )
  }
  edit(s) {
    sessionStorage.setItem("generalmenu", JSON.stringify(s));
    this.router.navigate(['/editgeneralmenu'])
  }
  changePage(event) {
    console.log(event.pageIndex)

    this.easydeelservice.getallgeneralmenubypagination(event.pageIndex).subscribe(

      data => {
        this.dataSource = new MatTableDataSource();

        console.log(data);
        this.results = data['gmenu'];
        this.dataSource.data = this.results;
        // this.totalLength = data['totalPages'] * 20;
        // this.totalLength = 100;
        let totalelements = data['totalPages'] * 20;
        console.log(totalelements)
        this.totalLength = totalelements;
      },
      error => {
        console.log(error);

      }
    )
  }
}
