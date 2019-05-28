import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {

  registrations: any = [];

  constructor(
      private dataService: DataService,
      public authService: AuthService
  ) {
      this.getRegistrations();
      this.dataService.refreshRegistrations.subscribe(() => {
        this.getRegistrations();
      });
  }

  getRegistrations() {
    this.dataService.getData('registrations').subscribe(data => {
      console.log(data);
      this.registrations = data;
      // setTimeout(() => {
      //  this.registrations = data;
      // })
    });
  }

  ngOnInit() {
  }

}
