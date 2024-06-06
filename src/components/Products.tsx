import Image from "next/image";
import { ProductProps } from "../../type";
import { HiShoppingCart } from "react-icons/hi"
import { FaHeart } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/nextSlice";

function Products({ productData }: any) {
    const dispatch = useDispatch()
    return (
        <div className="w-full px-6 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-6">
            {
                productData.map(({ _id, title, brand, category, description, image, isNew, oldPrice, price }: ProductProps) => (
                    <div key={_id} className="w-full bg-white text-black border border-gray-300 
                    rounded-lg group overflow-hidden">
                        <div className="w-full h-[300px] relative">
                            <Image
                                className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform
                                          duration-300"
                                src={image}
                                alt="ProductImg"
                                width={300}
                                height={300}
                            />
                            <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400
                            bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 duration-300
                            transition-transform">
                                <span 
                                 onClick={() =>
                                    dispatch(
                                        addToCart({
                                            _id: _id,
                                            brand: brand,
                                            category: category,
                                            image: image,
                                            description: description,
                                            isNew: isNew,
                                            oldPrice: oldPrice,
                                            price: price,
                                            title: title,
                                            quantity: 1,
                                        })
                                    )}
                                className="w-full h-full border-b-[1px] border-b-gray-400
                                flex items-center justify-center text-2xl bg-transparent hover:bg-amazon_yellow
                                cursor-pointer duration-300">
                                    <HiShoppingCart />
                                    </span>

                                <span 
                                
                                 className="w-full h-full border-b-[1px] border-b-gray-400
                                flex items-center justify-center text-2xl bg-transparent hover:bg-amazon_yellow
                                cursor-pointer duration-300">
                                    <FaHeart />
                                </span>
                            </div>
                            {
                                isNew && (
                                    <p className="absolute top-2 right-2 text-amazon_blue font-medium
                                    text-xs tracking-wide animate-bounce">!save ${(oldPrice - price).toFixed(2)}</p>
                                )
                            }
                        </div>
                        <hr className="h-3" />
                        <div className="px-4 py-3 flex - flex-col gap-1">
                            <p className="text-xs text-gray-500 tracking-wide">{category}</p>
                            <p className="text-base font-medium">{title}</p>
                            <p className="flex items-center gap-2">
                                <span className="text-sm line-through ">
                                    ${(oldPrice.toFixed(2))}
                                </span>
                                <span className="text-sm text-amazon_light font-semibold">
                                    ${(price.toFixed(2))}
                                </span>
                            </p>
                            <p className="text-xs text-gray-600 text-justify">
                                {description.substring(0, 120)}
                            </p>
                            <button
                                onClick={() =>
                                    dispatch(
                                        addToCart({
                                            _id: _id,
                                            brand: brand,
                                            category: category,
                                            image: image,
                                            description: description,
                                            isNew: isNew,
                                            oldPrice: oldPrice,
                                            price: price,
                                            title: title,
                                            quantity: 1,
                                        })
                                    )}
                                className="text-white h-10 bg-amazon_blue font-medium
                            rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2">add to cart </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Products;