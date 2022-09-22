import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

// http://www.omdbapi.com?apikey=d1495752

function Shop() {
	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const data = await fetch('http://api.alquran.cloud/v1/quran/en.asad');
		const items = await data.json();

		const surahs = items.data.surahs;

		setItems(surahs);
	};

	return (
		<div>
			{items.map((surah) => (
				<h3 key={surah.number}>
					{/* <Link to={`/shop/${surah.number}`} state={surah.number}> */}
					<Link to={{ pathname: `/shop/${surah.number}`, state: { state: surah.number } }}>
						{surah.name} or {surah.englishName}
					</Link>
				</h3>
			))}
		</div>
	);
}

export default Shop;
