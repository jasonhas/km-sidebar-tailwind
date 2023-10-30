import DocumentResult from "./DocumentResult"

const DocumentResults = ({ results }) => {

    return (
        <div>
            {results.map((result, id) => {
                return (
                    <DocumentResult result={result} key={id}/>
                )
            })}
        </div>
    )
}

export default DocumentResults