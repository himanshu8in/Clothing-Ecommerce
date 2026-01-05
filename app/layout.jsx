import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "Fashion Store",
  description: "Clothing E-Commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <AuthProvider>
         <CartProvider>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
