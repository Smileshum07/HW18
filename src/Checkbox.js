import React from "react";

const CheckBox = ({ data }) => {
       return (
        <div className="list">
            {data.map((item) => (
                <div key={item.id} className="list_item">
                    <div key={item.gender} className="item"></div>
                    <div className="item_name">{item.firstName}</div>
                    <div className="item_lastName">{item.lastName}</div>
                    <div className="item">{item.phone}</div>
                    <div className="item">{item.gender}</div>
                </div>
            ))}
        </div>
    )
}

export default CheckBox;