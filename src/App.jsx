import React, { useState, useEffect } from 'react';

function App() {
    const [gif, setGif] = useState('');
    const [query, setQuery] = useState('dog');


    const fetchGif = async (searchQuery) => {
        const apiKey = 'Qq3zxubXFVfQv7tlC1GzzzzBecdF4ZnB';
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=1`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setGif(data.data[0]?.images?.downsized_medium?.url);
        } catch (error) {
            console.error('Error fetching GIF:', error);
        }
    };

  
    useEffect(() => {
        fetchGif(query);
    }, [query]);

 
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchGif(query);
    };

    return (
        <div className="App">
            <h1>GIPHY Search</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for a GIF"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {gif && <img src={gif} alt="Gif" />}
        </div>
    );
}

export default App;
