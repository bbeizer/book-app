import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ book }) => {
        // eslint-disable-next-line no-unused-vars
        const [show, setShow] = useState(false);
        // eslint-disable-next-line no-unused-vars
        const [bookItem, setItem] = useState();

    return (
        <>
            {book.map((item, index) => {
                let thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
                let amount = item.saleInfo.listPrice?.amount;

                if (thumbnail && amount) {
                    return (
                        <div key={index} className="card" onClick={() => { setShow(true); setItem(item) }}>
                            <img src={thumbnail} alt="" />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </>
    );
};

Card.propTypes = {
    book: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Card;
