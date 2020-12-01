import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiService } from '../api.service';
import {NavigationComponent} from '../navigation/navigation.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {
	recipes = [];
	specials = [];
	uuid : string;
	ingid :string;
	newspecials = [];



	constructor(private apiService: ApiService,private route: ActivatedRoute) { }
	
	ngOnInit() {

			function  getFilteredDetails(obj,value){
				return	obj.filter(function(el){
					return el.uuid == value;
				});
			}
			function  getFilteredDetailsPromo(obj,value){
				return	obj.filter(function(el){
					return el.ingredientId == value;
				});
			}

				this.route.queryParams.subscribe(params => {
				this.uuid = params['detail'];
				this.ingid = params['promodetail'];
				});  



		 		this.apiService.getRecipes().subscribe((data: any[])=>{  
				this.recipes = data;  
				}) 
				this.apiService.getSpecials().subscribe((data: any[])=>{  
				this.specials = data;  

					if(this.uuid){
						this.newspecials = getFilteredDetails(data,this.uuid);
					}else{
						this.newspecials = getFilteredDetailsPromo(data,this.ingid);
					}

				})


	}

}
