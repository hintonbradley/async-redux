import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
	return (
		<nav className="nav">
			<ul className="nav-links left">
				<Link to='/'>
					<li>Logo</li>
				</Link>
			</ul>
			<ul className="nav-links right">
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/instructions'>
					<li>Instructions</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;