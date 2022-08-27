import React from "react";
import "./App.css";
import Nav from "./comp/Nav";
import Card from "./comp/Card";
import ShotData from "./ShotData";

export default function App() {
	const cards = ShotData.map((card) => {
		return <Card key={card.id} item={card}></Card>;
	});

	return (
		<div className="app">
			<Nav></Nav>
			<main>{cards}</main>
		</div>
	);
}
