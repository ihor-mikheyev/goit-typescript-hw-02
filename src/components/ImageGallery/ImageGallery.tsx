import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

interface Item {
  id: string;
  urls: string;
  alt_description: string;
}

interface Props {
  items: Item[];  
  onClick: (url: string) => void;  
}

 const ImageGallery:React.FC<Props> =({ items, onClick}) => {
    
  return (
    <ul className={css.ul}>
      {items.map((item) => {
        return (
          <li key={item.id} className={css.li}>
            <ImageCard item={item} onClick={()=> onClick(item.urls.regular) } />
          </li>
        );
      })}
    </ul>
  );
}


export default ImageGallery;
