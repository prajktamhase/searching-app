import React, { useEffect, useState } from "react";
import "./App.css"
import { phonebook } from "../../component/Data/Data";
import ContactCard from "../../component/ContactCard/ContactCard";
function App() {
    const [contacts, setContacts] = useState(phonebook)
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const filterContact = phonebook.filter((contact) => {
            const name = contact.name.toLowerCase();
            const mobile = contact.mobile.toString();

            const query = searchTerm.toLowerCase();


            return (name.includes(query) || mobile.includes(query))

        })
        setContacts(filterContact)
    },[searchTerm])

    return (
        <>
            <h1 className="text-center">Contact baba </h1>
            <input type="text" placeholder="search" className="searchbar"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }} />
            <div>
                {contacts.map((contact, index) => {
                    const { name, mobile } = contact;
                    return <ContactCard key={index} name={name} mobile={mobile} />
                })}
            </div>
        </>
    )
}
export default App