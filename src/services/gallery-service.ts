import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class galleryService{
	
	public host: string = "https://pixabay.com/api/";

	constructor(private http: HttpClient){}

   chercher(query: string,size: number, page: number){
   	
	    let res= this.http.get(this.host+"?key=11027643-08f6b73c53e5d40de43a0889f&q="
	     	          +query+"&per_page="+size+"&page="+page)
	     
	    return res;
   }
}