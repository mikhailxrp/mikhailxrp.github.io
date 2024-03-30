import Movies from "../components/Movies";
import Preloader from "../components/Preloader"
import { useState, useEffect } from "react";
import Search from "../components/Search";


const Main = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function getFilns() {
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=20&selectFields=id&selectFields=name&selectFields=enName&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=videos&selectFields=lists&rating.kp=8-10`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": '9B0DP2V-KPK453X-GB6YBK0-MS3977W'
            },
        })

        if (response.ok) {
            setIsLoading(false)
        } else if (response.status === 403) {
            setIsLoading(false)
            return
        }

        const data = await response.json()
        setMovies(data.docs)
    }

    async function getSearchFilm(film) {
        setIsLoading(true)
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=20&query=${film}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "9B0DP2V-KPK453X-GB6YBK0-MS3977W"
            },
        })

        if (response.ok) {
            setIsLoading(false)
        }

        const data = await response.json()
        setMovies(data.docs)
    }

    async function getTypeMovie(type) {
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=20&type=${type}&selectFields=id&selectFields=name&selectFields=enName&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=videos&rating.kp=8-10`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "9B0DP2V-KPK453X-GB6YBK0-MS3977W"
            },
        })

        if (response.ok) {
            setIsLoading(false)
        }

        const data = await response.json()
        setMovies(data.docs)

    }

    const handleSearchFilm = (film) => {
        getSearchFilm(film)
    }

    const handleTypeMovie = (type) => {
        getTypeMovie(type)
    }


    useEffect(() => {
        getFilns()
    }, [])


    return (
        <main className="container content-main">
            <Search searchFilm={handleSearchFilm} getTypeMovie={handleTypeMovie} />
            {isLoading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );
};

export default Main;