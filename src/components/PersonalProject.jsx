import React from "react";
import { Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
//import ImageCarousel from "./ImageCarousel";

const PersonalProject = (props) => {
  return (
    <div className="personal-project-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Fade left="true" duration={1000} delay={500}>
            <div className="personal-project-left-side">
              <h4 className="personal-project-header">{props.ProjectTitle}</h4>
              <p className="personal-project-description">
                {props.ProjectDescription}
              </p>
              <br/>
              <a
                class="personal-project-button"
                href={props.ProjectButtonLink}
                target="_noopener"
              >
                {props.ProjectButtonDescriptor}
              </a>
            </div>
          </Fade>
        </Grid>
        <Grid item xs={6}>
          <Fade right="true" duration={1200} delay={600}>
            <img
              src={props.PersonalProjectImagePath}
              className="personal-project-image"
              alt={props.PersonalProjectImageDescription}
            ></img>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalProject;
