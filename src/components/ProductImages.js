import React from "react";
import image from "../assets/product.png";

const ImageBox = () => {
	return <div className="image-box" />;
};

export const ProductImages = () => {
	return (
		<div className="product-images">
			<div className="product-nav">
				<span className="prev-nav">Home</span>
				<span className="nav-icon">
					<i class="fas fa-chevron-right" />
				</span>
				<span className="prev-nav">TVs</span>
				<span className="nav-icon">
					<i class="fas fa-chevron-right" />
				</span>
				<span>LG 55" Smart</span>
			</div>
			<img src={image} alt="tv" />
			<div className="img-nav">
				<div className="view-360">View 360</div>
				<div className="carousel">
					<div className="other-images">
						<ImageBox />
						<ImageBox />
						<ImageBox />
						<ImageBox />
					</div>
					<div className="nav">
						<div className="left">{"<"}</div>
						<div className="right">{">"}</div>
					</div>
				</div>
				<div className="action-buttons">
					<div className="btn secondary">Add to cart</div>
					<div className="btn primary">Buy Now</div>
				</div>
			</div>
		</div>
	);
};

export default ProductImages;