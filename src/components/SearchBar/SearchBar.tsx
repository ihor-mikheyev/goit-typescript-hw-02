import { FiSearch } from "react-icons/fi";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import React from "react";

interface Props { 
  onSearch: (query: string) => void;
}

const  SearchBar:React.FC<Props> = ({onSearch}) => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const requestValue = form.elements.namedItem("request") as HTMLInputElement;
    if (requestValue.value === "") { 
      toast("Your request could not be processed");
      return;
    }
    onSearch(requestValue.value);
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


export default SearchBar;