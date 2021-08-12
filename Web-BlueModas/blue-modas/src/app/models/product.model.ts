export class ProductModel {

  id: number;
  name: string;
  price: number = 0;
  quantity: number = 0;
  inventory: number;
  image: string;
  description: string;
  status: boolean = false;

  constructor() {
  }
}