import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiService } from '../api.service';
import {NavigationComponent} from '../navigation/navigation.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
	recipes = [];
	specials = [];
	uuid: string;
	newspecials =[];
	newrecipes =[];
	onpromo;

	constructor(private apiService: ApiService,private route: ActivatedRoute,private router: Router) { 

		 
	}
	ngOnInit() {

		function  getFilteredDetails(obj,value){
			return	obj.filter(function(el){
				return el.uuid == value;
			});
		}


		this.route.queryParams.subscribe(params => {
			 this.uuid = params['detail']
		});  

		this.apiService.getRecipes().subscribe((data: any[])=>{  
			this.recipes = data;  
			this.newrecipes = getFilteredDetails(data,this.uuid);
			//console.log(this.newrecipes);

		}) 
		this.apiService.getSpecials().subscribe((data: any[])=>{  
			this.specials = data;  
					}) 
 		
	}
	checkpromo(value){
			this.onpromo = this.specials.some(t=>t.ingredientId === value);
			return this.onpromo;
			/*this.onpromo = this.specials.filter(t=>t.ingredientId === value);
			if(this.onpromo.length==0){
				this.onpromo = 0
			}else{
				this.onpromo = this.onpromo[0].uuid;
			}*/
			return this.onpromo;

			}	
	showpromodetails(value){
		this.router.navigate(['promos'], { queryParams: { promodetail: value } });
	//	console.log(value)
	//	console.log('test')
	}
}
