import React from 'react';
import './App.css';
import About from './About';
import Nav from './Nav';
import Shop from './Shop';
import Home from './Home';
import Ayahs from './Ayahs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/shop/:number" element={<Ayahs />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
