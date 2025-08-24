function ProductCard({ product }: { product: {
    id: string;
    name: string;
    image: string;
    price: number;
    discount?: number;
}; }) {
    function getDiscountPercent(originPrice: number, afterDiscountPrice: number): number {
        if (originPrice <= 0 || afterDiscountPrice < 0 || afterDiscountPrice > originPrice) {
            return 0;
        }

        const discount = ((originPrice - afterDiscountPrice) / originPrice) * 100;
        return Math.ceil(discount);
    }

    const price = `Rp `+product.price.toLocaleString("id-ID");
    const discountPrice = product.discount ? `Rp `+product.discount.toLocaleString("id-ID") : undefined;
    const discountPercent = getDiscountPercent(product.price, product.discount ?? 0);

    return (
    <div
        className="product-card group cursor-pointer animate-scale-in"
        style={{animationDelay: `0.2s`}}
    >
        <div className="relative overflow-hidden rounded-2xl">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            {product.discount && (
                <div className="absolute top-2 left-2 flash-gradient text-white text-xs px-3 py-2 rounded-full font-bold shadow-lg">
                    -{discountPercent}%
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
            <h3 className="text-sm md:text-base font-exo font-semibold text-card-foreground line-clamp-1 mb-2 group-hover:text-primary transition-colors duration-300">
                {product.name}
            </h3>
            {product.discount ? (<div className="flex flex-col gap-1">
                <div className="text-lg md:text-xl font-bold text-primary">
                {discountPrice}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground line-through">
                {price}
                </div>
            </div>) : (
            <div className="flex flex-col gap-1">
                <div className="text-lg md:text-xl font-bold text-primary">
                {price}
                </div>
            </div>)
            }
            <button className="w-full mt-3 bg-primary text-primary-foreground py-2 rounded-xl text-sm font-medium hover:bg-primary-dark transition-all duration-300">
                Add to Cart
            </button>
        </div>
    </div>
    );
}

export default ProductCard;