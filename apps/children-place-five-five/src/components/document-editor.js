import React from "react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import RestoreIcon from "@material-ui/icons/Print"
import FavoriteIcon from "@material-ui/icons/PictureAsPdf"
import Grid from "@material-ui/core/Grid"
import FiveFive from "../images/image.png"
import ChildPlace from "../images/thechildplace.png"
import EditableText from "../components/editable"
import { PDFExport } from "@progress/kendo-react-pdf"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import "@progress/kendo-theme-default/dist/all.css"

const SecondPage = ({ selected: { title, description } }) => {
  const [dateState, changeDateState] = React.useState(new Date().getFullYear())
  const [signature, changeSignature] = React.useState("First Name, Last Name")
  const [company, changeCompany] = React.useState("Company")
  const [personal, changePersonal] = React.useState(
    "Story goes here: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
  )

  let pdfExportComponent

  return (
    <>
      <PDFExport
        paperSize="Tabloid"
        margin={"2cm"}
        scale={0.7}
        landscape
        forcePageBreak={false}
        keepTogether
        fileName={title}
        multiPage={false}
        ref={component => (pdfExportComponent = component)}
      >
        <Grid
          container
          wrap="nowrap"
          direction="column"
          justify="center"
          alignItems="center"
          className="box"
        >
          <Grid item>
            <Container>
              <img
                src={FiveFive}
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
                id="editor_five_img"
                alt="Five Five Logo"
                style={{ maxHeight: 230, width: 315 }}
              />
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <EditableText
                title={dateState}
                font="georiga"
                onSubmit={({ target: { value } }) => changeDateState(value)}
              />
            </Container>
          </Grid>
          <Grid item>
            <h1>{title}</h1>
          </Grid>
          <Grid item>
            <Container maxWidth="md">
              <p>{description}</p>
            </Container>
          </Grid>
          <Grid item>
            <EditableText
              title={signature}
              font="cursive"
              onSubmit={({ target: { value } }) => changeSignature(value)}
            />
          </Grid>
          <Grid item>
            <EditableText
              title={company}
              font="cursive"
              onSubmit={({ target: { value } }) => changeCompany(value)}
            />
          </Grid>
          <Grid item>
            <Container maxWidth="lg">
              <EditableText
                title={personal}
                font=""
                onSubmit={({ target: { value } }) => changePersonal(value)}
              />
            </Container>
          </Grid>
          <Grid item>
            <img
              src={ChildPlace}
              alt="Five Five Logo"
              style={{ maxHeight: 130, width: 150 }}
            />
          </Grid>
        </Grid>
      </PDFExport>
      <div className="no-print">
        <Container>
        <Typography style={{padding: 10}} align="center" className="georiga" variant="body2" color="textSecondary">
          The information on this award is only available at this instant. You
          must save or print this recognition card now.
        </Typography>
        </Container>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            onClick={() => {
              window.print()
            }}
            className="no-print"
            icon={<RestoreIcon 
              fontSize="large"
              className="no-print" />}
          />
          <BottomNavigationAction
            className="no-print"
            onClick={() => {
              pdfExportComponent.save()
            }}
            icon={<FavoriteIcon 
              fontSize="large"
              className="no-print" />}
          />
        </BottomNavigation>
      </div>
    </>
  )
}

export default SecondPage
