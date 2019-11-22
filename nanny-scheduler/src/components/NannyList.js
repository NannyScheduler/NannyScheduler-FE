import React, { useEffect, useState } from "react";
import axios from 'axios';

import NannyCard from './NannyCard';
import SearchForm from './SearchForm';

function NannyList(props) {
  // TODO: Add useState to track data from useEffect
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://nanny-scheduler1.herokuapp.com/api/nanny/')
			.then(res => {
				setNannies(res.data);
			})
			.catch(error => console.error(error))
		return () => {
			setNannies([]);
		};
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  const nanList = (nannies);
  return (
    <section className="nanny-list">
      <h2>Nanny List</h2>
      {
        nanList.map(nannies => <NannyCard key={nannies.id} data={nannies} />)
      }
    </section>
  );
}

export default NannyList;
