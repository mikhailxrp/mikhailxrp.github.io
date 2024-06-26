import React from 'react';

const Paginator = ({ paginate }) => {
    // количество кнопок
    const totalPage = []

    // расчет количества кнопок
    for (let btn = 1; btn <= 10; btn++) {
        totalPage.push(btn)
    }

    return (
        <div className='container'>
            <ul className="pagination d-flex justify-content-center mt-3 flex-wrap">
                {totalPage.map(pageNUmber => {
                    return <li className='page-item' key={pageNUmber} >
                        <button className='page-link' onClick={() => paginate(pageNUmber)}  >{pageNUmber}</button>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Paginator;