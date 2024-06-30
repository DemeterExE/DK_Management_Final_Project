export interface Order {
    id?: number;
    customer: string;
    status: 'pending' | 'shipped' | 'not_sent' | 'order_change' | 'order_canceled';
    quantity: number;
    location: string;
    date: Date | string;
    total: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  }
  