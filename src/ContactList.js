import React from "react";
import "./StyleContactList.css";
import male from "./img/male.png";
import female from "./img/female.png";
import question from "./img/question.png";

function getGenderIcon({ item }) {
    if (item.gender === "Male") {
        return <img src={male} alt="Male" className="image" />
    } else if (item.gender === "Female") {
        return <img src={female} alt="Female" className="image" />
    } else {
        return <img src={question} alt="" className="image" />
    }
}

const ContactList = ({ data }) => {
       return (
        <div className="list">
            {data.map((item) => (
                <div key={item.id} className="list_item">
                    <div key={item.gender} className="item_gender_icon">{getGenderIcon({ item })}</div>
                    <div className="item_name">{item.firstName}</div>
                    <div className="item_lastName">{item.lastName}</div>
                    <div className="item_phone">{item.phone}</div>
                    <div className="item_gender">{item.gender}</div>
                </div>
            ))}
        </div>
    )
}

export default ContactList;

