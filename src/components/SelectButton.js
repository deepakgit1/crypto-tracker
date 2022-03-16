import { makeStyles } from '@material-ui/styles'
import React from 'react'

const SelectButton = ({children,selected,onClick}) => {

    const useStyles = makeStyles({
        selectbutton: {
            border: "1px solid #0BC9FF",
            borderRadius: 5,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            fontFamily: "Montserrat",
            cursor: "pointer",
            backgroundColor: selected ? "#0BC9FF" : "",
            color: selected ? "black" : "",
            fontWeight: selected ? 700 : 500,
            "&:hover": {
              backgroundColor: "#02ffe2",
              color: "black",
            },
            width: "22%",
            //   margin: 5,
          }
    })
    const classes = useStyles()
  return (
    <span onClick={onClick} className={classes.selectbutton}>{children}</span>
  )
}

export default SelectButton