import React from "react";

export default function NannyCard(props) {
  const {
    name,
    gender,
    image,
    species,
    status,
    type
  } = props.data;
  return (
    <div className="nanny">
      <div>Name: {name}</div>
      <div>Gender: {gender}</div>
      <div>Species: {species}</div>
      {type ? <div>Type: {type}</div> : null }
      {status !== "unknown" ? <div>Status: {status}</div> : null }
      <img src={image} alt={type ? type : name}/>
    </div>
  );
}