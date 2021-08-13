import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductModel } from 'src/app/models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientModel } from '../models/client.model';
import { UtilService } from '../services/util.service';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'client-identification',
  templateUrl: './client-identification.component.html',
  styleUrls: ['./client-identification.component.scss']
})
export class ClientIdentificationComponent implements OnInit {
  clientIdentificationForm: FormGroup;
  shoppingCart: ProductModel[] = [];
  clientModel: ClientModel;

  constructor(
    private _fb: FormBuilder,
    private _clientService: ClientService,
    private _shoppingCartService: ShoppingCartService,
    private _notificationService: NotificationService,
    private _toast: ToastrService,
    private _router: Router,
    private _utilService: UtilService) {

    this.clientIdentificationForm = this._fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
    });

  }

  ngOnInit() {
    this.getState();
    this.loadClient(this.clientModel);
  }

  loadClient(client: ClientModel) {
    this.clientIdentificationForm.patchValue(client);
  }

  getState() {
    this.shoppingCart = this._shoppingCartService.getState();
  }

  goToConfirmedOrder(clientInputed: ClientModel) {
    this.clientInputed(clientInputed)
    this.save();
    this._router.navigate(['/confirmed-order']);
  }

  save() {
    if (!this.clientIdentificationForm.valid) {
      this._utilService.FormValidate(this.clientIdentificationForm);
    }
    // this._clientService
    //   .save(this.clientIdentificationForm.value)
    //   .toPromise()
    //   .then(ret => {
    //     this._notificationService.success("Salvo com Sucesso");
    //   }).catch(_ => {
    //     this._notificationService.error(_.error[0].value);
    //   });
  }

  clientInputed(clientInputed: ClientModel) {
    console.log(clientInputed)
    this._clientService.dispatch(clientInputed);
    this._toast.success(`Compra finalizada com sucesso!`, "Identificação Concluída.", {
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    })
  }

  getStateClient() {
    this.clientModel = this._clientService.getState();
  }
}
