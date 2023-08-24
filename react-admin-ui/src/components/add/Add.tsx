import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";


type Props ={
    slug: string;
    columns: GridColDef[];
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props: Props) => {
  return <div className="add">
        <div className="modal">
            <span className="close"> x </span>
            <h1>New{props.slug}</h1>
        </div>
    </div>;
};

export default Add;