import { useState } from "react";
import { TextField, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const Navigate = useNavigate();

  const Detail = {
    Name: "",
    Number: "",
    Email: "",
  };

  const [Details, setDetails] = useState(Detail);

  const SetDetail = (e: any) => {
    let id = e.target.id;
    let value = e.target.value;

    setDetails({ ...Details, [id]: value });
  };

  const SaveDetails = () => {
    Navigate("/SecondPage");
    localStorage.setItem("userDetail", JSON.stringify(Details));
  };
  
  return (
    <>
      <Typography
        variant="h4"
        sx={{ fontFamily: "Monospace", textAlign: "center", mt: 5 }}
      >
        Entre Details
      </Typography>
      <Box
        sx={{
          width: 500,
          border: 1,
          borderColor: "primary.main",
          borderRadius: 1,
          p: 3,
          ml: 55,
          mt: 7,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h4" sx={{ fontFamily: "Monospace" }}>
            Name
          </Typography>
          <TextField
            onChange={SetDetail}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            inputProps={{ id: "Name" }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h4" sx={{ fontFamily: "Monospace" }}>
            Phone number
          </Typography>
          <TextField
            onChange={SetDetail}
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
            inputProps={{ id: "Number" }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h4" sx={{ fontFamily: "Monospace" }}>
            Email
          </Typography>
          <TextField
            onChange={SetDetail}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            inputProps={{ id: "Email" }}
          />
        </Box>
        <Button
          onClick={SaveDetails}
          variant="outlined"
          sx={{ width: "85%", ml: 5, mt: 2, p: 1 }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Form;
