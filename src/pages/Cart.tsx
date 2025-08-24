import { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Mock cart data - in real app this would come from state management
const mockCartItems = [
  {
    id: 1,
    name: 'Wireless Gaming Headphones',
    price: 299000,
    image: '/src/assets/headphones-yellow.jpg',
    quantity: 2,
  },
  {
    id: 2,
    name: 'Gaming Mechanical Keyboard',
    price: 850000,
    image: '/src/assets/gaming-keyboard.jpg',
    quantity: 1,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <main className="container mx-auto px-4 py-8 min-h-screen">
        <div className="max-w-2xl mx-auto text-center py-16">
          <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Keranjang Kosong</h1>
          <p className="text-muted-foreground mb-8">
            Belum ada produk yang ditambahkan ke keranjang
          </p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary-dark">
              Mulai Belanja
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Keranjang Belanja
        </h1>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-2xl p-4 md:p-6"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-2 truncate">
                      {item.name}
                    </h3>
                    <p className="text-primary font-bold mb-4">
                      Rp {item.price.toLocaleString('id-ID')}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive/80 p-2 rounded-lg hover:bg-destructive/10 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Ringkasan Pesanan
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">Rp {total.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ongkos Kirim</span>
                  <span className="font-medium">Gratis</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">Rp {total.toLocaleString('id-ID')}</span>
                </div>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                Checkout
              </Button>
              
              <Link to="/" className="block text-center mt-4">
                <Button variant="outline" className="w-full">
                  Lanjut Belanja
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}