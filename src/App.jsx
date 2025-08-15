import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, addContact } from "./redux/contactsSlice";
import { selectNameFilter, changeFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);
  console.log("Contact List:", contactList);
  const searchTerm = useSelector(selectNameFilter);

  const handleAddContact = (name, number) => {
    dispatch(addContact(name, number));
  };

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={searchTerm} onChange={handleFilterChange} />
      <ContactList searchValue={searchTerm} contacts={contactList} />
    </>
  );
}

export default App;
