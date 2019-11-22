import React from "react";

export default function NannyCard(props) {
  const {
    first_name,
    last_name,
    hourly_rate
  } = props.data;
  return (
    <div className="nanny">
      
      <div>First Name: {first_name}</div>
      <div>Last Name: {last_name}</div>
      <div>Hourly Rate: {hourly_rate}</div>
    </div>
  );
}