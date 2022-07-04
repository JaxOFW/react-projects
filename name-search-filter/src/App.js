import logo from './logo.svg';
import './App.css';
import fakeNames from './MOCK_DATA.json';
import { useState } from 'react';

function App() {
	const [ searchTerm, setSearchTerm ] = useState('');
	return (
		<div className="App">
        	<img src={logo} className="App-logo" alt="logo" />
			<div class="App-Header">Name Filter</div>
			<input
				type="text"
				placeholder="Enter a name..."
				onChange={(event) => {
					setSearchTerm(event.target.value);
				}}
			/>
			<div className="App-Names">
				{fakeNames.filter((val) => {
					if (searchTerm === "") {
						return val
					} else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val
					} else {
						return false;
					}
				}).map((val, key) => {
					return (
						<div className="name" key={key}>
							<p>{val.first_name}</p>
						</div>
					)
				})}
			</div>
		</div>
	);
}

export default App;
