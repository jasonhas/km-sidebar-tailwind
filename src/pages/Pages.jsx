import SearchBar from '../components/SearchBar'
import { useState } from 'react';
import SearchResults from '../components/SearchResultsList';
const Pages = () => {

    const [results, setResults] = useState([]);

    return (
        <div className="p-12 flex-auto">
            <h2 className="text-2xl font-semibold">Content Look Up</h2>
            
            <div className="max-w-7xl mx-auto">
                <SearchBar setResults={setResults}/>
                <SearchResults results={results}/>
            </div>
            </div>
    )
}

export default Pages