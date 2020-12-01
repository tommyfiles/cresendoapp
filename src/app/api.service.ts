import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = "http://localhost:3001";
  
  constructor(private httpClient: HttpClient) { }

  public getRecipes(){  
		return this.httpClient.get(this.SERVER_URL+"/recipes");  
	}  
 public getSpecials(){  
		return this.httpClient.get(this.SERVER_URL+"/specials");  
	}  
}

