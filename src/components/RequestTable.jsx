import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import * as requestService from "../services/RequestService";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export const RequestTable = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    requestService.getAllMaintanenceRequest().then((res) => {
      setRequests(res.data);
    });
  }, []);
  const goToUpdate = (id) => {
    navigate(`/${id}`);
  };

  const deleteRequest = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Table sx={{ minWidth: 700 }}>
        <TableHead sx={{}}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((requests) => {
            return (
              <TableRow hover key={requests.id}>
                <TableCell>{requests.id}</TableCell>
                <TableCell>{requests.firstName}</TableCell>
                <TableCell>{requests.lastName}</TableCell>
                <TableCell>{requests.email}</TableCell>
                <TableCell align="right">
                  <IconButton
                    component="a"
                    onClick={() => goToUpdate(requests.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    onClick={() => deleteRequest(requests.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};