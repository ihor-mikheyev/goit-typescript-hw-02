import SearchBar from './components/SearchBar/SearchBar'
import fetchData from './api'
import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    if (query === "") { 
      return;
    }

    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchData(query, page);
        setImages((prevState) => [...prevState, ...response.images])
        setTotalPages(response.total_pages);
      } catch (error) {
        setError(true)
      } finally { 
        setLoading(false)
      }
    }
    getData()
  }, [page, query])
  
    const handleSearch = (newQuery) => {
      setQuery(newQuery);
      setError(false);
    setPage(1);
      setImages([]);
      setTotalPages(totalPages)
    };
  
    const handleLoadMore = () => {
    setPage(page + 1);
    };
  
  // Modal api
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  function openModal(imageUrl) {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedImage("");
  }
  

  return (
    <>
      <SearchBar onSearch={handleSearch} ></SearchBar>

      <ImageGallery items={images} onClick={openModal} />
      {error && <ErrorMessage/>}
      { loading && <Loader/>}
      {loading && page >= totalPages && <b>End of collection!</b>}
      {images.length > 0 && !loading && (
        <LoadMoreButton onClick={handleLoadMore} />)}
    <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
    </>
)
}

export default App
