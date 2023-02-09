export interface IProductCard {
    title: string;
    description: string;
    current_price: number;
    last_price?: number;
    available_quantity: number;
    category: string;
    url_image: string;
    brand?: string;
  }