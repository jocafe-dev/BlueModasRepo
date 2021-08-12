export class ProductModel {

  id: number;
  name: string;
  price: number;
  quantity: number;
  inventory: number;
  image: string;
  description: string;
  status: boolean = false;

  constructor() {
  }
}