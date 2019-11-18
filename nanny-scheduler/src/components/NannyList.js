import React, { useEffect, useState } from "react";
import axios from 'axios';

import NannyCard from './NannyCard';
import SearchForm from './SearchForm';

function NannyList(props) {
  // TODO: Add useState to track data from useEffect
  const [nannies, setNannies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character/')
			.then(res => {
				setNannies(res.data.results);
			})
			.catch(error => console.error(error))
		return () => {
			setNannies([]);
		};
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  useEffect(() => {
		if (search !== '') {
			console.log("Searching");
			let _searchResults = nannies.filter(char => (
				char.name.search(search) !== -1 ||
				char.gender.search(search) !== -1 ||
				char.species.search(search) !== -1 ||
				char.type.search(search) !== -1 ||
				char.status.search(search) !== -1
			));
			setSearchResults(_searchResults);
		} else {
			setSearch('');
			setSearchResults([]);
		}
		return () => {
		};
	}, [search])

  const nanList = (searchResults.length > 0 ? searchResults : nannies);
  return (
    <section className="nanny-list">
      <SearchForm
				search={search}
				setSearch={setSearch}
		/>
      <h2>Nanny List</h2>
      {
        nanList.map(nan => <NannyCard key={nan.id} data={nan} />)
      }
    </section>
  );
}

export default NannyList;