import { DataGrid } from "@mui/x-data-grid"
import "./dataTable.scss"



const DataTable = () => {
  return (
    <div className="dataTable">
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
            pagination: {
                paginationModel: {
                    pageSize: 5,
                },
            },
        }}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick />
    </div>
  )
}

export default DataTable