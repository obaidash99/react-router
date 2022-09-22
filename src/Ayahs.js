import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

// http://www.omdbapi.com?apikey=d1495752

function Ayahs({match}) {
	useEffect(() => {
		fetchSurah();
		console.log(match);
	}, []);

	const [surah, setSurah] = useState([]);

	const fetchSurah = async () => {
		const fetchSurah = await fetch(`http://api.alquran.cloud/v1/surah`);
		const surah = await fetchSurah.json();
		console.log(surah);
	};

	return (
		<div>
			<h1>AYAHS OF THE SURAH</h1>
		</div>
	);
}

export default Ayahs;
