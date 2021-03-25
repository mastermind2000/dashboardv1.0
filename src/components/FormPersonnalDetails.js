import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <AppBar style={{ background: "#333" }} position="sticky">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
              Autre details
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          label="Ville"
          hintText="Enter votre ville"
          onChange={handleChange("ville")}
          defaultValue={values.ville}
        />
        <br />
        <TextField
          label="Adresse"
          hintText="Enter votre adresse"
          onChange={handleChange("adresse")}
          defaultValue={values.adresse}
        />
        <br />
        <TextField
          label="Code postale"
          hintText="Enter Code postale"
          onChange={handleChange("codepostale")}
          defaultValue={values.codepostale}
        />
        <br />
        <TextField
          label="Status"
          hintText="Enter Your Status"
          onChange={handleChange("status")}
          defaultValue={values.status}
        />{" "}
        <br />
        <TextField
          label="Centre d'interet"
          hintText="Centre d'interet"
          onChange={handleChange("centreinteret")}
          defaultValue={values.occupation}
        />
        <br />
        <br />
        <br />
        <p>Facultatif</p>
        <br />
        <TextField
          label="Website"
          hintText="website"
          onChange={handleChange("website")}
          defaultValue={values.website}
        />
        <br />
        <TextField
          label="Linkedin"
          hintText="Linkedin"
          onChange={handleChange("linkedin")}
          defaultValue={values.linkedin}
        />
        <br />
        <TextField
          label="Twitter"
          hintText="Twitter"
          onChange={handleChange("twitter")}
          defaultValue={values.twitter}
        />
        <br />
        <TextField
          label="GitHub "
          hintText="GitHub"
          onChange={handleChange("github")}
          defaultValue={values.github}
        />
        <br />
        <br />
        <br />
        <Button
          style={{
            background: "#333",
            color: "#FFFFFF",
            marginRight: "1em"
          }}
          label="Back"
          onClick={this.back}
        >
          Back
        </Button>
        <Button
          style={{
            background: "#333",
            color: "#FFFFFF"
          }}
          label="Continue"
          onClick={this.continue}
        >
          {" "}
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default FormPersonalDetails;
