import React from 'react';
import { useState } from 'react';

const Search = ({ searchFilm, getTypeMovie }) => {
    const [search, setSearch] = useState('')
    const [typeFilm, setTypeFilm] = useState('movie')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const sendSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            searchFilm(search)
            setSearch('')
        }
    }

    const selectTypeMovie = (e) => {
        setTypeFilm(e.target.value)
        getTypeMovie(e.target.value)
    }

    return (
        <>
            <div className='wrapper-search pt-3'>
                <div className='form-control search-form'>
                    <input
                        type="search"
                        className="form-control"
                        placeholder='Поиск фильма...'
                        value={search}
                        onChange={handleSearch}
                        onKeyDown={sendSearch}
                    />
                    <button type="button" className="btn btn-secondary search-btn" onClick={sendSearch}>Поиск</button>
                </div>
                <div className="form-check form-check-inline pt-2">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="typeFilm"
                        id="inlineRadio1"
                        value="movie"
                        onChange={selectTypeMovie}
                        checked={typeFilm === "movie"}
                    />
                    <label className="form-check-label" htmlFor="typeFilm">Фильмы</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="typeFilm"
                        id="inlineRadio2"
                        value="tv-series"
                        onChange={selectTypeMovie}
                        checked={typeFilm === "tv-series"}
                    />
                    <label className="form-check-label" htmlFor="typeFilm">Сериалы</label>
                </div>
            </div>
        </>
    );
};

export default Search; 