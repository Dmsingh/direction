import React from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";




const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});



function card({classes}) {
  return (
    <Card className={classes.card}>
       
       
    <CardContent className={classes.content}>
      <Typography
        className={"MuiTypography--heading"}
        variant={"h6"}
        gutterBottom
      >
        Nature Around Us
      </Typography>
      <Typography
        className={"MuiTypography--subheading"}
        variant={"caption"}
      >
        We are going to learn different kinds of species in nature that live
        together to form amazing environment.
      </Typography>
      <Divider className={classes.divider} light />
  
    </CardContent>
  </Card>
  )
}





export default card
