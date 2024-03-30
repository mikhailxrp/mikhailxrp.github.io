import Movies from "../components/Movies";
import Preloader from "../components/Preloader"
import { useState, useEffect } from "react";
import Search from "../components/Search";
import Paginator from "../components/Paginator";


const Main = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setpage] = useState(1)

    async function getFilns(number = 1) {
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=${number}&limit=10&selectFields=id&selectFields=name&selectFields=enName&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=videos&rating.kp=8-10`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": '9B0DP2V-KPK453X-GB6YBK0-MS3977W'
            },
        })

        if (response.ok) {
            setIsLoading(false)
        }

        const data = await response.json()
        setMovies(data.docs)
    }

    async function getSearchFilm(film) {
        setIsLoading(true)
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${film}`, {
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
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=${type}&selectFields=id&selectFields=name&selectFields=enName&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=videos&rating.kp=8-10`, {
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

    const paginate = (number) => {
        setpage(number)
    }

    useEffect(() => {
        getFilns(page)
    }, [page])

    return (
        <main className="container content-main">
            <Search searchFilm={handleSearchFilm} getTypeMovie={handleTypeMovie} />
            {isLoading ? <Preloader /> : <Movies movies={movies} />}
            <Paginator paginate={paginate} />
        </main>
    );
};

export default Main;