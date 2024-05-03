import { Block, Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useCallback, useState } from "react";
import "./Admin.scss";

const rows = [
  {
    id: 1,
    userid: "001",
    username: "Alice",
    activeStatus: true,
  },
  {
    id: 2,
    userid: "002",
    username: "Bob",
    activeStatus: false,
  },
  {
    id: 3,
    userid: "003",
    username: "Charlie",
    activeStatus: true,
  },
  {
    id: 4,
    userid: "004",
    username: "Alice",
    activeStatus: true,
  },
  {
    id: 5,
    userid: "005",
    username: "Bob",
    activeStatus: false,
  },
  {
    id: 6,
    userid: "006",
    username: "Charlie",
    activeStatus: true,
  },
  {
    id: 7,
    userid: "007",
    username: "Alice",
    activeStatus: true,
  },
  {
    id: 8,
    userid: "008",
    username: "Bob",
    activeStatus: false,
  },
  {
    id: 9,
    userid: "009",
    username: "Charlie",
    activeStatus: true,
  },
  {
    id: 10,
    userid: "010",
    username: "Alice",
    activeStatus: true,
  },
  {
    id: 11,
    userid: "011",
    username: "Bob",
    activeStatus: false,
  },
  {
    id: 12,
    userid: "012",
    username: "Charlie",
    activeStatus: true,
  },
];

const Admin: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState(false);

  const handleOpen = useCallback(
    (row: any) => {
      console.log("x", row);

      setActiveStatus(row?.activeStatus);
      setIsOpen(true);
    },
    [activeStatus]
  );

  const columns: any = [
    {
      headerName: "User ID",
      field: "userid",
      flex: 1,
    },
    {
      headerName: "Username",
      field: "username",
      flex: 1,
    },
    {
      headerName: "Active Status",
      field: "activeStatus",
      flex: 1,
    },
    {
      headerName: "",
      field: "",
      renderCell: ({ row }: any) => {
        return (
          <IconButton
            size="small"
            color={row?.activeStatus ? "error" : "success"}
            onClick={() => handleOpen(row)}
          >
            {row?.activeStatus ? <Block /> : <Check />}
          </IconButton>
        );
      },
      flex: 1,
    },
  ];

  const handleClose = () => setIsOpen(false);

  return (
    <Box m={1} className="admin">
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={40}
        columnHeaderHeight={40}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[7]}
      />
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>{`Are you sure want to ${
          activeStatus === false ? "activate" : "deactivate"
        }`}</DialogTitle>

        <DialogActions>
          <Button
            size="small"
            color="error"
            variant="outlined"
            sx={{ textTransform: "none" }}
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            size="small"
            color="success"
            variant="contained"
            sx={{ textTransform: "none" }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Admin;
