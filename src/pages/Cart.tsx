import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus } from 'lucide-react';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <main className="bg-background min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="font-display text-3xl md:text-4xl text-foreground font-bold">Your cart is empty</h1>
          <p className="text-muted">Looks like you haven't added anything yet.</p>
          <Link to="/shop" className="btn-primary inline-block">BROWSE PLANNERS</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-display text-3xl md:text-4xl text-foreground font-bold mb-12">Your cart</h1>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Items */}
            <div className="md:col-span-2 space-y-0">
              {cart.map(item => (
                <div key={item.cartId} className="flex gap-6 py-8 border-b border-border">
                  <div className="w-20 h-24 bg-background-secondary flex-shrink-0 overflow-hidden">
                    {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-sans font-semibold text-foreground">{item.name}</h3>
                        {item.color && <p className="text-xs text-muted mt-1">{item.color}</p>}
                        {item.addOns && item.addOns.length > 0 && (
                          <p className="text-xs text-muted mt-0.5">+ {item.addOns.join(', ')}</p>
                        )}
                      </div>
                      <button onClick={() => removeFromCart(item.cartId)} className="text-muted hover:text-foreground transition-colors">
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border">
                        <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} className="px-3 py-2 hover:bg-background-secondary transition-colors">
                          <Minus size={14} />
                        </button>
                        <span className="px-4 py-2 text-sm font-medium text-foreground">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} className="px-3 py-2 hover:bg-background-secondary transition-colors">
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-medium text-foreground">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="bg-background-secondary p-8 space-y-6">
                <h3 className="font-sans font-semibold text-lg text-foreground">Order summary</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="text-foreground font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  All planners are delivered instantly via digital download. No shipping required.
                </p>
                <Link to="/checkout" className="btn-primary block w-full text-center">PROCEED TO CHECKOUT</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
