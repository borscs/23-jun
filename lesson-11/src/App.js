import React, {useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import {RevolvingDot} from "react-loader-spinner";
import AddMovie from "./components/AddMovie";

function App() {

    const [moves, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchMovies();
    }, []);

    async function uploadMovies(movie) {
        const response = await fetch('https://react-fev-2022-feb-pro-default-rtdb.europe-west1.firebasedatabase.app/move.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }

    async function fetchMovies() {
        try {
            setIsLoading(true);
            const response = await fetch('https://react-fev-2022-feb-pro-default-rtdb.europe-west1.firebasedatabase.app/move.json')
            const data = await response.json();
            console.log(data);
            const transportMovies = [];

            for (const key in data) {
                transportMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate
                })
            }
            // const transportMovies = data.results.map((movie) => {
            //     console.log(movie);
            //     return {
            //         id: movie.episode_id,
            //         title: movie.title,
            //         openingText: movie.opening_crawl,
            //         releaseDate: movie.relese_date
            //     }
            // })
            setMovies(transportMovies);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    let content = <p>Not Found Films</p>;

    if (isLoading) {
        content = <RevolvingDot
            height="500"
            width="500"
            radius="100"
            color="#4fa94d"
            secondaryColor=''
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    } else if (moves.length > 0) {
        content = <MoviesList movies={moves}/>;
    }


    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={uploadMovies}/>
            </section>
            <section>
                <button onClick={fetchMovies}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
