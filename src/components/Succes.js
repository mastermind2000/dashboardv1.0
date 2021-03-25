import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MuiThemeProvider
} from "@material-ui/core";

export class Success extends Component {
  first = (e) => {
    setTimeout(() => {
      this.props.firstStep();
    }, 1000);
  };
  render() {
    return (
      <MuiThemeProvider>
        <AppBar style={{ background: "#1D008A" }} position="sticky">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
              Confirm Details
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <Typography variant="title">
          Nous avons bien enregistrer vos informations
        </Typography>
        <br />
        <Typography>Si vous souhaitez recommencer cliquer ici </Typography>
        <Button
          style={{ background: "#2E3B55", color: "#FFFFFF" }}
          onClick={this.first}
        >
          Recommencer
        </Button>
      </MuiThemeProvider>
    );
  }
}

export default Success;
