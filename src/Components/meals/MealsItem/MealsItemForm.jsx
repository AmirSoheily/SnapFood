import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Input from "../../Ui/Input";
import classes from "./MealsItemForm.module.css";
export default function MealsItemForm(props) {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <AddCircleOutlineIcon></AddCircleOutlineIcon>
    </form>
  );
}
