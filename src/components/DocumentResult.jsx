import { Link } from 'react-router-dom'

const DocumenthResult = ({result}) => {

    return (
        <div className="hover:bg-indigo-500"><Link to="/profilepage" state={{ id: `${result.id}`,
         name: `${result.name}`,
         username: `${result.username}`,
         email: `${result.email}`,
         website: `${result.website}`

        }}>{result.name}</Link></div>
    )
}

export default DocumentResult