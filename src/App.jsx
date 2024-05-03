import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Stories from "./Components/Stories";
import Story from "./Components/Story";


function App() {
    
	return (
		<BrowserRouter>

            <Header />

            <p>avant le main</p>
            
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="stories" element={<Stories />} />
				<Route path="stories/:id" element={<Story />} />
			</Routes>

            <p>après le main</p>

		</BrowserRouter>
	);
}

export default App;
