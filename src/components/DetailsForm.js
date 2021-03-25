import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";

export class DetailsForm extends Component {
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
        <AppBar style={{ background: "#8A0015" }} position="sticky">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
              Details professionel
            </Typography>
          </Toolbar>
        </AppBar>
        <br /><p>Compétences</p>
        <TextField
          label="Competence"
          hintText="competence"
          onChange={handleChange("competence")}
          defaultValue={values.competence}
        />
        <br />
        <TextField
          label="Competence Detail"
          hintText="detailscompetence"
          onChange={handleChange("detailscompetence")}
          defaultValue={values.detailscompetence}
        />
        <br />
        <br />
        <p>Experiences</p>
        <TextField
          label="Experience"
          hintText="nameexperience"
          onChange={handleChange("nameexperience")}
          defaultValue={values.nameexperience}
        />
        <br />
        <TextField
          label="Experience date"
          hintText="dateexperience"
          onChange={handleChange("dateexperience")}
          defaultValue={values.dateexperience}
        />
        <br />
        <TextField
          label="Experience details"
          hintText="detailsexperience"
          onChange={handleChange("detailsexperience")}
          defaultValue={values.detailsexperience}
        />
        <br />
        <br />
        <p>Cursus scolaire</p>
        <TextField
          label="Diplome"
          hintText="namediplome"
          onChange={handleChange("namediplome")}
          defaultValue={values.namediplome}
        />
        <br />
        <TextField
          label="Diplome date"
          hintText="datediplome"
          onChange={handleChange("datediplome")}
          defaultValue={values.datediplome}
        />
        <br />
        <TextField
          label="Etablissemement name"
          hintText="etablissemementname"
          onChange={handleChange("etablissementname")}
          defaultValue={values.etablissementname}
        />
        <br />
        <TextField
          label="Details Diplome"
          hintText="Details diplome"
          onChange={handleChange("detailsdiplome")}
          defaultValue={values.detailsdiplome}
        />
        <br />
        <br />
        <Button
          style={{
            background: "#8A0015",
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
            background: "#8A0015",
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

export default DetailsForm;
