import SearchResult from "./SearchResult"

const SearchResults = ({ results }) => {

    return (
        <div>
            {results.map((result, id) => {
                return (
                    <SearchResult result={result} key={id}/>
                )
            })}
        </div>
    )
}

export default SearchResults