import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setUser } from 'src/app/store/actions/user.action';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public header: string = 'Home/Login';

  username = new FormControl('', [Validators.required]);

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('username') ? 'Not a valid username' : '';
  }

  public setUsernameInState(username: string) {
     this.store.dispatch(setUser(username));
   }

   onSubmit(): void {
    if (this.username.value != '') {
      this.setUsernameInState(this.username.value)
    }
  }
}
