import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../data.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product;
  constructor(
      private activatedRoute: ActivatedRoute,
      private dataService: DataService,
      public authService: AuthService,
      private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.dataService.getData(`registrations/${id}`).subscribe(data => {
      console.log(data);
      this.product = data;
    })
  }

  onDelete() {
    this.dataService.deleteData(`registrations/${this.product.id}`).subscribe(data => {
      console.log(data);
      this.dataService.refreshRegistrations.next();
      this.router.navigateByUrl('/tabs');
    })
  }

}
