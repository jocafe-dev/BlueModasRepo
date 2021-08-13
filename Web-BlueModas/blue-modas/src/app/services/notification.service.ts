import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class NotificationService {

    constructor() { }

    success(message: string, title: string = 'Cadastrado com Sucesso', timer: number = 3000) {
        Swal.fire({
            title: title,
            text: `${message}`,
            icon: 'success',
            timer: timer,
            showCancelButton: false,
            showConfirmButton: false,
        });
    }

    error(message: string, timer: number = 5000) {
        Swal.fire({
            title: 'Problemas ao salvar',
            text: `${message}`,
            icon: 'error',
            timer: timer,
            showCancelButton: false,
            showConfirmButton: false,
        });
    }

    notificationWithImage(message: string, imagePath?: string, success: boolean = true, timer: number = 3000) {
        Swal.fire({
            title: success ? 'Cadastrado com Sucesso' : 'Problemas ao salvar',
            text: `${message}`,
            imageUrl: imagePath,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            timer: timer,
            showCancelButton: false,
            showConfirmButton: false,
        });
    }

    notificationFailedLogin(message: string, imagePath?: string) {
        Swal.fire({
            title: 'Não foi possível acessar o sistema',
            text: `${message}`,
            imageUrl: imagePath,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            timer: 5000,
            showCancelButton: false,
            showConfirmButton: false,
        });
    }

    warning(message: string, imagePath?: string) {

    }
}
