import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductModel } from "../models/product.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${environment.apiURL}/Product`);
  }
}