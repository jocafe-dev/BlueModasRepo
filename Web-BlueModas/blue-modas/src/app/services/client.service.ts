import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductModel } from "../models/product.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ClientModel } from "../models/client.model";

@Injectable()
export class ClientService {
  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(`${environment.apiURL}/Client`);
  }
}