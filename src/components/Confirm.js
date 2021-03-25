import React, { Component, Fragment } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    //PROCESS FORM//
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        email,
        status,
        codepostale,
        centreinteret,
        age,
        ville,
        competence,
        detailscompetence,
        nameexperience,
        dateexperience,
        detailsexperience,
        adresse,
        profilnote,
        datediplome,
        namediplome,
        detailsdiplome,
        etablissementname,

        twitter,
        github,
        linkedin,
        website
      }
    } = this.props;
    return (
      <Fragment>
        <AppBar style={{ background: "#098F8F" }} position="sticky">
          <Toolbar title="Enter Personal Information">
            <Typography color="inherit" variant="title">
              Confirm Details
            </Typography>
          </Toolbar>
        </AppBar>

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Confirm your info
            </ListSubheader>
          }
        >
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Descritpion du profil"
              secondary={profilnote}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Age" secondary={age} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Ville" secondary={ville} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Adresse" secondary={adresse} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Code Postale" secondary={codepostale} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Status Social" secondary={status} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Centre d'intéret"
              secondary={centreinteret}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Twitter" secondary={twitter} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Linkedin" secondary={linkedin} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Website" secondary={website} />
          </ListItem>

          <ListItem>
            <ListItemText primary="GIthub" secondary={github} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Competence" secondary={competence} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Details compétences"
              secondary={detailscompetence}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Experience name"
              secondary={nameexperience}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Experience date"
              secondary={dateexperience}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Details experience"
              secondary={detailsexperience}
            />
          </ListItem>

          <ListItem>
            <ListItemText primary="Diplome" secondary={namediplome} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Diplome Date" secondary={datediplome} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Details diplome"
              secondary={detailsdiplome}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Etablissement name"
              secondary={etablissementname}
            />
          </ListItem>
        </List>

        <br />

        <br />
        <Button
          style={{
            background: "#EE3B55",
            color: "#FFFFFF",
            marginRight: "1em"
          }}
          label="Continue"
          onClick={this.back}
        >
          Back
        </Button>
        <Button
          style={{
            background: "#3C61B8",
            color: "#FFFFFF",
            marginRight: "1em"
          }}
          label="Continue"
          onClick={this.continue}
        >
          Confirm and Continue
        </Button>
      </Fragment>
    );
  }
}

export default Confirm;
