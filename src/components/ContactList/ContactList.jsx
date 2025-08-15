import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = ({ searchValue, contacts }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  console.log("contacts Value:", contacts);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes((searchValue || "").toLowerCase());
  });

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
