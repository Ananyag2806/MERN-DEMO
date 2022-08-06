import axios from 'axios';
import { useState } from 'react';

function App() {
	const [song, setSong] = useState('');
	const [year, setYear] = useState(0);

	console.log(year);

    const submit = () =>{
        axios.post('http://localhost:3001/insert', {songName: song, releaseDate: year})
    }

	return (
		<div className='App'>
			<h1>Add Song</h1>

			<label>Song Name</label>
			<input type='text' onChange={(e) => setSong(e.target.value)} />

			<label>Release Date</label>
			<input type='number' onChange={(e) => setYear(e.target.value)} />

			<button onClick={submit}>Add Song</button>

			<h1>Top Charts</h1>
		</div>
	);
}

export default App;
