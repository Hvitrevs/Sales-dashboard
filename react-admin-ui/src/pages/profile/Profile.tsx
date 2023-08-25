import Single from "../../components/single/Single"
import { adminPage } from "../../data"
import "./profile.scss"

const Profile = () => {
  return (
    <div className="profile">
        <Single {...adminPage} />
    </div>
  )
}

export default Profile