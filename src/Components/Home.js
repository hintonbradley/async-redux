import React from 'react';
import PostList from './PostList';

function Home() {
	return (
		<div className="home ui container">
			<h1 className="header">- home page -</h1>
			< PostList />
		</div>
	);
}

export default Home;