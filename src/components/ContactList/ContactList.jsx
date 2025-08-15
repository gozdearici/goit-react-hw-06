import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts) || [];
  const searchValue = useSelector(selectNameFilter) || "";

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  console.log("contacts Value:", contacts);

  const filteredContacts = contacts.filter((contact) =>
    (contact.name || "").toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={css.contactsContainer}>
      {filteredContacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            phone={contact.number}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
