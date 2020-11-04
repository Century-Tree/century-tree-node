/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import TextField from "@material-ui/core/TextField"
import Cancel from "@material-ui/icons/Cancel"
import Check from "@material-ui/icons/Check"
import Edit from "@material-ui/icons/EditOutlined"

const EditableText = ({ title, font, onSubmit }) => {
  const [stateTitle, changeTitle] = React.useState(title)
  const [doubleClick, updateDoubleClick] = React.useState(true)

  const onDoubleClick = e => {
    e.stopPropagation()
    updateDoubleClick(false)
  }

  const onCancelClick = e => {
    e.stopPropagation()
    updateDoubleClick(!doubleClick)
    changeTitle(title)
  }

  const onTitleSubmit = e => {
    e.stopPropagation()
    updateDoubleClick(click => !click)
    changeTitle(stateTitle)
    onSubmit({ target: { value: stateTitle } })
  }
  const onTitleSubmitForm = e => {
    if (e.key === "Enter") {
      onSubmit(e)
      updateDoubleClick(true)
    }
  }
  const onTitleChange = e => {
    e.stopPropagation()
    changeTitle(e.target.value)
  }

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="stretch"
      wrap="nowrap" 
      onClick={onDoubleClick}
    >
      {doubleClick ? (
        <Tooltip title="Click To Change Title" placement="right">
          <Grid item>
            <Grid container direction="row" wrap="nowrap" >
              <Grid item>
                <p className={font}>
                  {title ? `${title}` : "Click To Change Title"}
                </p>
              </Grid>
              <Grid item className="no-print">
                <Edit fontSize="large" />
              </Grid>
            </Grid>
          </Grid>
        </Tooltip>
      ) : (
        <Grid
          container
          justify="flex-start"
          alignItems="stretch"
          direction="column"
          wrap="nowrap"
        >
          <Grid item>
            <TextField
              fullWidth
              autoFocus
              multiline
              variant="outlined"
              value={stateTitle}
              onKeyPress={onTitleSubmitForm}
              onChange={onTitleChange}
            />
          </Grid>
          <Grid container item>
            <Grid item>
              <IconButton onClick={onCancelClick}>
                <Cancel />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={onTitleSubmit}>
                <Check />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
EditableText.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default EditableText
