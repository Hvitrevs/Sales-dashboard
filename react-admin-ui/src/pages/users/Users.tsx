import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"


const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button> + </button>
      </div>
      <DataTable />
    </div>
  )
}
export default Users