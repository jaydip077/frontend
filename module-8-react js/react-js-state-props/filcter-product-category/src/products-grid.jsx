import React from "react";
import Data from "./Data";

function ProductsGrid() {

    return(
        <>
        <div className="menu-bar">
            <button type="button">All</button>
            <button type="button">T-Shirt</button>
            <button type="button">Shorts</button>
            <button type="button">Pants</button>
            <button type="button">Shirt</button>
            <button type="button">Jacket</button>
            <button type="button">Jeans</button>
            <button type="button">Sneakers</button>
            <button type="button">Sunglasses</button>

            <div className="products-grid">
                {Data && Data.map((item)=>{
                    return(
                        <div className="product-card">
                            <img src={item.Photo} alt={item.Name} />
                            <h3>{item.Name}</h3>
                            <p>{item.Category}</p>
                            <p>{item.Price}</p>
                        </div>
                    )
    })}
                </div>
        </div>
        </>
    )
}

export default ProductsGrid;