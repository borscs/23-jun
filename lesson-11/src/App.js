import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import {RevolvingDot} from "react-loader-spinner";

function App() {

    const [moves, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchMovies() {
        try {
        setIsLoading(true);
        const response = await fetch('https://swapi.dev/api/films')
        const data = await response.json();
        const transportMovies = data.results.map((movie) => {
            return {
                id: movie.episode_id,
                title: movie.title,
                openingText: movie.opening_crawl,
                releaseDate: movie.relese_date
            }

        })
        setMovies(transportMovies);
        setIsLoading(false);
        } catch (error){
            console.log(error);
        }
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMovies}>Fetch Movies</button>

            </section>
            <section>
                {!isLoading && <MoviesList movies={moves}/>}
                {isLoading &&
                    <RevolvingDot
                        height="500"
                        width="500"
                        radius="100"
                        color="#4fa94d"
                        secondaryColor=''
                        ariaLabel="revolving-dot-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />}
            </section>
        </React.Fragment>
    );
}

export default App;
