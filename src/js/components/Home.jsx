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
			<UserCard />
			<Jumbotron />
		</>
	)
};

export default Home;