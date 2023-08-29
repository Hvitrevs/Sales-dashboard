
import { Link } from "react-router-dom";
import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";


type Props ={
    slug: string;
    columns: GridColDef[];
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props: Props) => {

    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
}


  return <div className="add">
        <div className="modal">
            <span className="close" onClick={()=>props.setOpen(false)}> x </span>
            <h1> New {props.slug}</h1>
            <form onSubmit={handleSubmit}>
                {props.columns
                .filter(item=>item.field !== "id" && item.field !== "img" )
                .map((column) => (
                    <div className="item">
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))}
                <div className="buttonbug">
                  <Link to="/login">
                    <button onClick={() =>alert('Access denied: Only authorized users! Error: #034x8730x90uip239=8/')}> ADD </button>
                  </Link>
                 </div>
            </form>
        </div>
    </div>;
};

export default Add;