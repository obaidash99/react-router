import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<h3>LOGO</h3>
			<ul>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/shop">Shop</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
