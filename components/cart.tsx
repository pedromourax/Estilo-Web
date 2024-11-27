"use client";

import { useStore } from "@/lib/store";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ShoppingCart } from "lucide-react";

export function Cart() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateQuantity = useStore((state) => state.updateQuantity);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-12rem)] mt-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b"
            >
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    updateQuantity(item.id, Math.max(0, item.quantity - 1))
                  }
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </Button>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Total:</span>
            <span className="font-bold">R${total.toFixed(2)}</span>
          </div>
          <Button className="w-full" disabled={cart.length === 0}>
            Finalizar Compra
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
