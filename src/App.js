import "./App.css";
import React, {useState} from 'react';
import ContactList from "./ContactList.js";
import contacts from "./Contacts.js";
import CheckBox from "./Checkbox.js";


function App() {
  const [query, setQuery] = useState("");
  const keys = ["firstName", "lastName", "phone"];
  const [contactGender, getGender] = useState("");
  
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const filterGender = (data) => {
    return data.filter((item) => {
      item.gender === contactGender
    })
  }
    

  return (
    <div className="App">
        <div className="App-header">
            <p>КОНТАКТИ</p>
            <div className="App-filter">
                <input
                  type="text"
                  placeholder="  Пошук контактів..."
                  className="search"
                  onChange={(e) => setQuery(e.target.value)} />
                <input
                  type="checkbox"
                  name="gender1"
                  value="Male"
                  onChange={(e) => getGender(e.target.value)}
                 />
                <label for="gender1">Male</label>
                <input
                  type="checkbox"
                  name="gender2"
                  value="Female"
                  onChange={(e) => getGender(e.target.value)}
                />
                <label for="gender2">Female</label>
                <input
                  type="checkbox"
                  name="gender3"
                  value=""
                  onChange={(e) => getGender(e.target.value)}
                />
                <label for="gender3">No gender</label>
            </div>
            <div className="contact_list">
                <ContactList data={search(contacts)} />
               
            </div>
        </div>
    </div>
  );
}

export default App;
