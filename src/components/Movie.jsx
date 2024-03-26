import Image from './Image'

function Movie({ name, image, description, rating, genres, year, trailer }) {
    let link = null

    if (trailer === '!#' || trailer.trailers.length === 0) {
        link = '!#'
    } else {
        link = trailer.trailers[0].url
    }

    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    {image && <img src={image} className="img-fluid rounded-start" alt="..." />}
                    {!image && <Image />}

                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div>
                            Рейтинг KP:<span className="rating-kp"> {rating.kp}</span> <br />
                            Рейтинг imdb:<span className="rating-kp"> {rating.imdb}</span> <br />
                            Год: <span className="rating-kp"> {year}</span>
                            <p> Жанр:<span> {genres.map(g => g.name + ' ')}</span></p>
                        </div>
                        <p className="card-text">
                            {description}
                        </p>
                        <a href={link}
                            target="blanc"
                            className="card-text">
                            <small className="text-muted">
                                {link === '!#' ? 'Видео отсутствует' : 'Смотреть трейлер'}
                            </small>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Movie;