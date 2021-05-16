import React from "react";
import { Card, FormControl, Grid,  InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./style.css";


const EditorQ = () => {
  return (
    <div 
      style={{
        backgroundImage: `url(${require("./images/bg-01.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        fontFamily: "Roboto",
      }}
    >
      <div>
      <Grid item xs={12} style={{minHeight: "100vh",fontFamily: "Roboto"}}>
        <Grid 
          item
           sm={12} sm={6} sm={6}
          style={{
            padding:"20px",
            width:"50%",
            margin:"auto",
            textAlign: "center",
          }}
        >
      <Card className="card" style={{padding:"30px"}}>
        <FormControl variant="filled">
        <InputLabel> None </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>Aptitude</MenuItem>
          <MenuItem value={20}>Logical</MenuItem>
          <MenuItem value={30}>English</MenuItem>
        </Select>
      </FormControl>
            <h3>Add Questions</h3>
            <Card>
            <Editor style={{padding:"10px",margin:"10px",backgroundColor:"#eee",borderRadius:"20%"}}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              label="Type your questions here..."
            />
          </Card>
            <h3>Options</h3>
            <TextField className="back" variant="outlined" label="A.)Option"></TextField>
            <TextField className="back" variant="outlined" label="B.)Option"></TextField>
            <TextField className="back" variant="outlined" label="C.)Option"></TextField>
            <TextField className="back" variant="outlined" label="D.)Option"></TextField>
            <h3>Answer</h3>
            <TextField className="back" variant="outlined"label="Correct"></TextField> <br/>
            <TextField className="back1" variant="outlined"label="Explanation"></TextField>
            </Card>
        </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default EditorQ;
