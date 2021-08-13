
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { FormGroup, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UtilService {

    constructor(private _http: HttpClient, private _toastr: ToastrService) {
    }

    FormValidate(form: FormGroup) {
        Object.keys(form.controls).forEach((campo) => {
            const controle = form.get(campo);
            if (controle instanceof FormGroup) {
                this.FormValidate(controle);
            }
            else if (controle instanceof FormArray) {
                (controle as FormArray).controls.forEach(ctrl => this.FormValidate(<FormGroup>ctrl));
            }
        });
    }

    IsNullObject(obj: any) {
        return obj == null;
    }

    IsNullOrEmpty(string: string) {
        if (string == null)
            return true;

        if (string.trim() == '')
            return true;

        if (string == undefined)
            return true;

        return false;
    }

    ResponseErrorMessage(response: HttpErrorResponse) {
        if (response.error != null && typeof response.error === "object") {
			var i = (<any[]>response.error).length;
            if (i > 0) {
                var messages = '';
				(<any[]>response.error).forEach(x => messages += ' ' + x.value);
            }
        }
    }

}
