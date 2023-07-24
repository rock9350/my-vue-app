import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import demo from "./../Demo" ;



export default function Side() {
  const initialState = demo.map(() => ({
    checked: false,
    sub_departments: demo.map(() => false),
  }));

  const [checkboxState, setCheckboxState] = React.useState(initialState);

  const openState = demo.map(() => true);

  const [checkboxOpenState, setCheckboxOpenState] = React.useState(openState);

  const handleParentChange = (index: any) => (event: any) => {
    const newCheckboxState = [...checkboxState];
    newCheckboxState[index].checked = event.target.checked;
    newCheckboxState[index].sub_departments = newCheckboxState[
      index
    ].sub_departments.map(() => event.target.checked);
    setCheckboxState(newCheckboxState);

    const newOpenCheckBox = [...checkboxOpenState];
    const open = newOpenCheckBox[index];
    newOpenCheckBox[index] = !open;
    setCheckboxOpenState([...newOpenCheckBox]);
    console.log(checkboxOpenState);
  };

  const handleChildChange =
    (parentIndex: any, childIndex: any) => (event: any) => {
      const newCheckboxState = [...checkboxState];
      newCheckboxState[parentIndex].sub_departments[childIndex] =
        event.target.checked;
      newCheckboxState[parentIndex].checked = newCheckboxState[
        parentIndex
      ].sub_departments.every((value: any) => value);
      setCheckboxState(newCheckboxState);
    };

  return (
    <div
      style={{
        position: "absolute",
        top: "27%",
        left: "6%",
        border: "10px solid",
        padding: "15px",
        width: "185px",
      }}
    >
      {demo.map((items: any, parentIndex: any) => (
        <>
          <FormControlLabel
            key={items.department}
            label={items.department}
            control={
              <Checkbox
                checked={checkboxState[parentIndex].checked}
                indeterminate={
                  checkboxState[parentIndex].checked &&
                  !checkboxState[parentIndex].sub_departments.every(
                    (value: any) => value
                  )
                }
                onChange={handleParentChange(parentIndex)}
              />
            }
          />
          <Box
            sx={{
              display: checkboxOpenState[parentIndex] ? "none" : "flex",
              flexDirection: "column",
              ml: 3,
            }}
          >
            {items.sub_departments.map((child: any, childIndex: any) => (
              <FormControlLabel
                key={child}
                label={child}
                control={
                  <Checkbox
                    checked={
                      checkboxState[parentIndex].sub_departments[childIndex]
                    }
                    onChange={handleChildChange(parentIndex, childIndex)}
                  />
                }
              />
            ))}
          </Box>
        </>
      ))}
    </div>
  );
}
