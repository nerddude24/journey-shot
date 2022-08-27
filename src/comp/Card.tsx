import React from "react";

export default function Card(props) {
	console.log(props);
	const { title, loc, gmap, start, end, desc } = props.item;
	let { img } = props.item;
	if (!img.startsWith("https")) {
		img = "./src/img/" + img;
	}
	return (
		<div className="card">
			<img src={img} alt="404" className="card-shot" />
			<div className="card-info">
				<div className="card-info-loc">
					<img src="https://img.icons8.com/color/48/000000/marker--v1.png" />
					<p>{loc}</p>
					<a href={"https://www.google.com/maps/place/" + gmap} target="_blank">
						View on Google Maps
					</a>
				</div>
				<div className="card-info-about">
					<h1>{title}</h1>
					<p className="card-info-about-date">
						{start} - {end}
					</p>
					<p className="card-info-about-p">{desc}</p>
				</div>
			</div>
		</div>
	);
}
