import React from "react";
import "../../styles/Home.css"




const numberSeparated = (number) => {
	const units = number % 10;
	const tens = Math.floor((number / 10) % 10)



	return { units, tens }
}





const Home = (props) => {
	const { units, tens } = numberSeparated(props.count)


	return (
		<>
			<div>
				<div className="container d-flex align-items-center justify-content-center">
					<div className="d-flex justify-content-center" id="count">
						<div>
							<i className="fa-solid fa-stopwatch-20"></i>
						</div>
						<div>
							{tens}
						</div>
						<div>
							{units}
						</div>
					</div>
				</div>
				<div className="container d-flex align-items-center justify-content-center">

					<button className="btn btn-danger m-2" onClick={props.onReset}>reset</button>
					<button className="btn btn-danger m-2" onClick={props.stop}>stop</button>
					<button className="btn btn-success m-2" onClick={props.start}>start</button>
				</div>
			</div>
		</>
	);
};

export default Home;