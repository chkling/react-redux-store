import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ProductsPage from "./components/ProductsPage";
import DisplaySingleProduct from "./components/DisplaySingleProduct";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route path="/About">
						<About />
					</Route>
					<Route path="/Store">
						<ProductsPage />
					</Route>
					<Route path="/Item/:id">
						<DisplaySingleProduct />
					</Route>
					<Route path="/Checkout">
						<Cart />
					</Route>
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
