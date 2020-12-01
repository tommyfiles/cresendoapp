import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../api.service';
import {NavigationComponent} from '../navigation/navigation.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	recipes = [];
	specials = [];
	carousel;
	/*@Output() getRecipeUuid = new EventEmitter<string>();*/

	constructor(private apiService: ApiService,private router: Router) { }
	ngOnInit() {
		this.apiService.getRecipes().subscribe((data: any[])=>{  
			this.recipes = data;  
			this.carousel = data[0].images["full"]; 
		}) 
		this.apiService.getSpecials().subscribe((data: any[])=>{  
			this.specials = data;  
		})
	}

	showRecipeDetails(uuid){
		this.router.navigate(['recipe'], { queryParams: { detail: uuid } });
	}

	showPromoDetails(uuid){
		this.router.navigate(['promos'], { queryParams: { detail: uuid } });
	}
}
