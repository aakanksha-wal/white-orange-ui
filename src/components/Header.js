import React from "react";

export const Header = () => {
	return (
		<div className="header">
			<div className="left">
				<span className="icon">
					<i class="fas fa-bars" />
				</span>
				White Orange
			</div>
			<div className="middle">
				<span className="icon">
					<i class="fas fa-map-marker-alt" />
				</span>
				<input placeholder="Bengaluru" />
			</div>
			<div className="right">
				<span className="icon">
					<i class="fas fa-search" />
				</span>
				<span className="icon">
					<i class="fas fa-shopping-cart" />
				</span>
				<span className="icon">
					<i class="fas fa-user" />
				</span>
			</div>
		</div>
	);
};

export default Header;

