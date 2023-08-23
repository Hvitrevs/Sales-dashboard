import { DataGrid, GridColDef, GridToolbar,  } from "@mui/x-data-grid";
import "./dataTable.scss";


type Props ={
    columns: GridColDef[],
    rows: object[]
}


const DataTable = (props:Props) => {

  return (
    <div className="dataTable">
        <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={props.columns}
        initialState={{
            pagination: {
                paginationModel: {
                    pageSize: 9,
                },
            },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs: 500},
            }
        }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        disableRowSelectionOnClick />
    </div>
  )
}

export default DataTable;