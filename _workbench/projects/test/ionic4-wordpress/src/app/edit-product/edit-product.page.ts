import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  model: any = {};
  id;
  constructor(
      private dataService: DataService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if(this.id) {
      this.dataService.getData(`registrations/${this.id}`).subscribe(data => {
        console.log(data);
        this.model = {
          title: data['title'],
          cmrname: data['cmrname'],
          cmrnumber: data['cmrnumber'],
          cmrmail: data['cmrmail'],
          cmraddress: data['cmraddress'],
          cmrpostcode: data['cmrpostcode'],
          snumber: data['snumber'],
          installation: data['installation'],
          installer: data['installer'],
          gasform: data['gasform'],
          notes: data['notes']
        }
      })
    }
  }

  onEditProduct(f) {
    console.log(f.value);
    if(this.id) {
      this.dataService.putData(`registrations/${this.id}`, f.value).subscribe(data => {
        console.log(data);
        this.dataService.refreshRegistrations.next();
        this.router.navigateByUrl('/tabs');
      })
    }
    else {
      this.dataService.postData('registrations', f.value).subscribe(data => {
        console.log(data);
        this.dataService.refreshRegistrations.next();
        this.router.navigateByUrl('/tabs');
      })
    }
  }
}
