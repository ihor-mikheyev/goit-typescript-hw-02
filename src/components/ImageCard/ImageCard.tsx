import React from 'react'
import css from './ImageCard.module.css'

interface Props {
    item: {
        urls: {
            small: string;
        };
        alt_description: string;
    };
    onClick: () => void;
}

 const ImageCard: React.FC<Props> =({ item, onClick }) => { 
    
    return (
        <div className={css.card } onClick={onClick}>
            <img src={item.urls.small} alt={item.alt_description} />
        </div>
    )
}

export default ImageCard;