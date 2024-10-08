import { FiSearch } from "react-icons/fi";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({onSearch}) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (form.elements.request.value === "") { 
      toast("Your request could not be processed");
      return;
    }
    onSearch(form.elements.request.value)
    
    // console.log(form.elements.request.value);
    form.reset();
  }

  return (
<header>
      <form className={css.searchBar} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="request"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <FiSearch color="#fff" />
        </button>
      </form>
      <Toaster position="bottom-center" toastOptions={{
        duration: 2500,
      }} />
</header>
  );
}
