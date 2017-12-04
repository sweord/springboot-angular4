import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList = ['11', '22', '33', '44', '55'];
  selectProduct = '11';

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              private addOrderDialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  onSelectProduct(product) {
    this.selectProduct = product;
  }

  logout() {
    this.http.get('/logout').subscribe( data => {
      this.router.navigateByUrl('/login');
    });
  }
}
