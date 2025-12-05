import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import UserCard from "./UserCard";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container my-4">
				<div className="row g-0 justify-content-center">
					<div className="col-12 col-lg-3">
						<UserCard />
					</div>
					<div className="col-12 col-lg-3">
						<UserCard />
					</div>
					<div className="col-12 col-lg-3">
						<UserCard />
					</div>
					<div className="col-12 col-lg-3">
						<UserCard />
					</div>
				</div>
			</div>
		</>
	)
};

export default Home;