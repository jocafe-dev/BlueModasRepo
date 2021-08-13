import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ClientModel } from "../models/client.model";

@Injectable()
export class ClientService {
  @Output() clientInputed: EventEmitter<ClientModel>;
  private clientInputedState: ClientModel;

  constructor(
    private http: HttpClient
  ) {
    this.clientInputed = new EventEmitter<ClientModel>();
  }

  getAll(): Observable<ClientModel> {
    return this.http.get<ClientModel>(`${environment.apiURL}/Client`);
  }
  
  dispatch(clientInputed: ClientModel){
    this.clientInputed.emit(clientInputed);
    this.clientInputedState = clientInputed;
  }
  getState = () => this.clientInputedState;
  
}