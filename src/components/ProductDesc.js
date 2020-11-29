import React from "react";

const MoreDetails = ({ about }) => {
	return (
		<div className="details">
			<div>{about}</div>
			<div>+</div>
		</div>
	);
};

export const ProductDesc = () => {
	return (
		<div className="product-desc">
			<div className="product-name">
				<span className="name">
					LG 139cm (55 inch) Ultra HD (4K) LED Smart TV
				</span>
				<span className="modal">(55UM7290PTD)</span>
			</div>
			<div className="product-price-n-review">
				<div className="product-price">
					<span className="current">Rs. 89,999</span>
					<span className="original">Rs. 98,999</span>
					<span className="discount">35%</span>
				</div>
				<div className="product-review">
					<span>
						<span className="icon star">
							<i class="fas fa-star" />
							<i class="fas fa-star" />
							<i class="fas fa-star" />
							<i class="fas fa-star" />
						</span>
						4608 Reviews
					</span>
				</div>
			</div>
			<div className="offers">
				<li className="heading">Available Offers</li>
				<hr />
				<li>Bank Offer10% Instant Discount with HDFC Bank</li>
				<li>
					Credit Cards and Credit/Debit EMI Transaction{" "}
					<span>T&C</span>{" "}
				</li>
				<li>Bank Offer10% Instant Discount with HDFC Bank</li>
				<li>
					Debit Card Transactions <span>T&C</span>{" "}
				</li>
				<li>
					<span>View 4 more Offers</span>
				</li>
			</div>
			<div className="warranty">1 Year manufacture warranty</div>
			<div className="delivery-block">
				<div className="delivery">Delivery</div>
				<input className="pincode" placeholder="Enter pincode" />
				<div className="enter">{">"}</div>
			</div>
			<div className="highlights-n-seller">
				<div className="highlights">
					<div className="heading">Highlights</div>
					<div className="details">
						<li>Resolution: HD Ready 1366 x 768 Pixels</li>
						<li>Sound Output: 20 W</li>
						<li>Refresh Rate: 50 Hz</li>
					</div>
				</div>
				<div className="seller">
					<div className="heading">Seller</div>
					<div className="details">
						<li>White Orange, HSR</li>
						<li className="blue">View more seller</li>
					</div>
				</div>
			</div>
			<div className="more-details">
				<MoreDetails about="Specification" />
				<MoreDetails about="Features" />
				<MoreDetails about="Description" />
			</div>
		</div>
	);
};

export default ProductDesc;
