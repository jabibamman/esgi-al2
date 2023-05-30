import { RestaurantsService } from './../../../services/restaurants.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  restaurants: Array<{id: number; title: string; desc: string; food: Array<string>}> = [];

  constructor(
    restaurantsService: RestaurantsService,
  ) {
    this.restaurants = restaurantsService.getRestaurants();
  }

}