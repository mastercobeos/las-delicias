import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";

interface ProductProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
    return (
        <div className="group bg-white border border-gray-100 p-4 transition-all hover:shadow-lg">
            <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Link
                        href={`/producto/${product.id}`}
                        className="bg-primary text-white px-6 py-2 text-sm uppercase tracking-wider font-medium hover:bg-secondary transition-colors"
                    >
                        Ver Detalles
                    </Link>
                </div>
            </div>

            <div className="space-y-2">
                <p className="text-xs text-gray-400 uppercase tracking-widest">{product.category}</p>
                <Link href={`/producto/${product.id}`}>
                    <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                    <span className="font-bold text-primary">${product.price.toLocaleString()} MXN</span>
                    <button className="text-gray-400 hover:text-secondary transition-colors" title="Agregar al carrito">
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
