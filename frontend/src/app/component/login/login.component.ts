import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router, ActivatedRoute} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  errorMsg = '';

  nameInput = new FormControl();
  passwordInput = new FormControl();

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params != null && params['error'] != null) {
        this.errorMsg = params['error'];
      } else {
        this.errorMsg = '';
      }
    });
  }

  onLogin() {
    const url = '/auth';
    // let data = {username: this.username, password: this.password };
    // let data = "username=" + this.username + "&password=" + this.password;
    let params = new URLSearchParams();
    params.set('username', this.username);
    params.set('password', this.password);

    let header = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    };

    this.http.post(url, params.toString(), header).subscribe(
      data => {
        console.log(data);
        if (data != null && data == 'success') {
          this.router.navigateByUrl("/");
        } else {
          let snackBarRef = this.snackBar.open("Login failed. " + data, "CLOSE", {
            duration: 3000
          });
          snackBarRef.onAction().subscribe();
        }
      },
      err => {
        console.log("error: " + err.errorMsg);
      }
    );
  }
}
