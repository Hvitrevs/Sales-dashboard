import { DataGrid, GridColDef, GridToolbar, gridClasses  } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";




type Props ={
    columns: GridColDef[];
    rows: object[];
    slug: string;
    
}


const DataTable = (props:Props) => {

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>

        </div>
      );
    },
  };

      return (
        <div className="dataTable">
          
          <DataGrid
        sx={{
          [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
            outline: "none"
          },
          [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]: {
            outline: "none"
          }
        }}
        // {...props.data}
            className="dataGrid"
            rows={props.rows}
            columns={[...props.columns, actionColumn]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            disableDensitySelector
            disableColumnSelector
          />
        </div>
      );
    };
    
    export default DataTable;