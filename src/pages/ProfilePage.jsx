import { useLocation } from "react-router-dom"

const ProfilePage = () => {
    const location = useLocation()
    const id = location.state.id
    const name = location.state.name
    const username = location.state.username
    const website = location.state.website
    const email = location.state.email

    return (
        <div className="p-12">
            <h2 className="text-2xl font-semibold">Profile Page for </h2>
            
            Profile Page {id} {name} {username} {website} {email}</div>

    )
}

export default ProfilePage