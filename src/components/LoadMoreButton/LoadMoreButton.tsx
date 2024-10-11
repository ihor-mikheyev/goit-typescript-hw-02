import React from "react";

interface Props { 
    onClick: () => void;
}

const LoadMoreButton:React.FC<Props> =({ onClick }) => { 
    return (
        <button type="button" onClick={onClick}>Load more</button>
    )
}

export default LoadMoreButton;