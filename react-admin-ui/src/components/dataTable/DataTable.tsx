import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from "@mui/x-data-grid"
import "./dataTable.scss"



const DataTable = () => {
    const columns: GridColDef[] =[
        { field: "id", headerName: "ID", width: 90 },
    ]


  return (
    <div className="dataTable">
        <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columns}
        initialState={{
            pagination: {
                paginationModel: {
                    pageSize: 5,
                },
            },
        }}
        slot={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs: 500},
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        disableRowSelectionOnClick />
    </div>
  )
}

export default DataTable