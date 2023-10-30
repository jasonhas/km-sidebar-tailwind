import DocumentSearch from '../components/DocumentsSearch'
import { useState } from 'react';
import Document from '../components/DocumentResultList';

const Documents = () => {

    const [results, setResults] = useState([]);

    return (
        <div className="p-12 flex-auto">
            <h2 className="text-2xl font-semibold">Document Look Up</h2>
            
            <div className="max-w-7xl mx-auto">
                <DocumentSearch setResults={setResults}/>
                <Document results={results}/>
            </div>
            </div>
    )
}

export default Documents