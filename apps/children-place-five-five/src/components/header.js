import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import FiveFive from "../images/white_logo.png"
import ChildPlace from "../images/thechildplace.png"
import Button from "@material-ui/core/Button"
import BackArrow from "@material-ui/icons/ArrowBackSharp"

const Header = ({ path }) => (
  <header style={{}} className="no-print">
    <Link to="/" style={{ textDecoration: "none" }}>
      <AppBar
        position="static"
        style={{
          padding: 10,
          margin: "auto",
          overflow: "hidden",
        }}
      >
        <Grid
          style={{
            margin: 0,
          }}
          container
          direction="column"
          spacing={2}
          alignItems="center"
          justify="center"
        >
          <Grid
            Iitem
            container
            direction="row"
            spacing={2}
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <img
                src={ChildPlace}
                alt="Five Five Logo"
                style={{ height: 150, width: 150 }}
              />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
              <img
                src={FiveFive}
                alt="Five Five Logo"
                style={{ height: 100, width: 150 }}
              />
            </Grid>
          </Grid>
          <Grid item>
            {path !== "/" && (
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<BackArrow />}
              >
                Back
              </Button>
            )}
          </Grid>
        </Grid>
      </AppBar>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
