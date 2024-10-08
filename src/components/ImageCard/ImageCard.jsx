import css from'./ImageCard.module.css'
export default function ImageCard({ item, onClick }) { 
    
    return (
        <div className={css.card } onClick={onClick}>
            <img src={item.urls.small} alt={item.alt_description} />
        </div>
    )
}