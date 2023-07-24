import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Side from "../sidemeun/sidemeun";

interface Post {
  userId: number;
  id: string;
  title: string;
  body: string;
}

const SecondPage = () => {
  const navigate = useNavigate();

  const [dataFetch, setdataFetch] = useState([
    {
      id: "",
      body: "",
      title: "",
    },
  ]);

  const fetchData = async () => {
    const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data: Post[] = await respone.json();
 
 // const data: Post[] = await respone.json();

    setdataFetch([...data]);

    // console.log(data);

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((respone) => respone.json())
    //   .then((data) => console.log(data));
  };


  useEffect(() => {
    const itemsString = localStorage.getItem("userDetail");

    if (itemsString !== null) {
    const items = JSON.parse(itemsString);
    if (items.Name == "" || items.Email == "" || items.Number == "") {
      navigate("/");
    }
  }
    fetchData();
  }, []);

  return (
    <>
    <TableContainer sx={{ width: '50%',mt:25,ml:70 }} component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Summary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataFetch.map((dataFetch) => (
            <TableRow
              key={dataFetch.id}
              sx={{  }}
            >
              <TableCell component="th" scope="dataFetch">
                {dataFetch.id}
              </TableCell>
              <TableCell align="left">{dataFetch.title}</TableCell>
              <TableCell align="left">{dataFetch.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Side/>
    </>
  );
};

export default SecondPage;
