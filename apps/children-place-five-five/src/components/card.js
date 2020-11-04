import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Container } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    height: "100%",
    position:
      "relative" /* Ensure absolute positioned child elements are relative to this*/,
  },
  content: {
  },
  image: {
    width: "100%",
  },
  media: {
    display: "inline-block",
    verticalAlign: "top",
    margin: "2%",
    height: 55,
    width: 55,
    backgroundColor: theme.palette.primary.light,
    borderRadius: "50%",
    display: "inline-block",
    marginBottom: "30%",
  },
}))

export default function MediaCard({ title, description }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Container className={classes.content}>
        <Grid container direction="column" className={classes.content}>
          <Grid item>
            <div className={classes.media} />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h3" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Card>
  )
}
