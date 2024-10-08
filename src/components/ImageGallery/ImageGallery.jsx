import ImageCard from "../ImageCard/ImageCard";
import css from"./ImageGallery.module.css"

export default function ImageGallery({ items, onClick}) {
    
  return (
    <ul className={css.ul}>
      {items.map((item, index) => {
        return (
          <li key={index} className={css.li}>
            <ImageCard item={item} onClick={()=> onClick(item.urls.regular) } />
          </li>
        );
      })}
    </ul>
  );
}
