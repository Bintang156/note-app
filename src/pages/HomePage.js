import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import {getActiveNotes, deleteNote } from "../utils/network-data";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from "react-icons/ai";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
}
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });


  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);
      refreshPage("/");
  }
 
  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (
            <div>
              <section>
                <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
                <br />
                <h2 className="title">{locale === 'id' ? 'Daftar Catatan' : 'Notes List'}</h2>
                <NoteList onDelete={onDeleteHandler} notes={filteredNotes} />
              </section>
              <Link to="/add" className="action">
                <AiOutlinePlusCircle />
              </Link>
            </div>
          )
        }
      }
    </LocaleConsumer>
  );
}

export default HomePage;
