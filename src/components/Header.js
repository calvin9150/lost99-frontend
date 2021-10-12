import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup, Grid, Toolbar, Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const Header = (props) =>{

    // const style = makeStyles({

    //     buttonGroupStyle: {
    //         backgroundColor: "blue",
    //     }
    //   });

    // const classes  = style();
      
    return(

        <Toolbar padding = "16px">

        <Typography style={{ flex: 1 }} noWrap sx={{ flexGrow: 1 }} variant="h6" color="inherit">
          Lost and Found 99
        </Typography>

        <ButtonGroup  href="#" variant="outlined"   size="large" variant="contained" aria-label="outlined primary button group" >
            <Button>로그인</Button>
            <Button>회원가입</Button>
        </ButtonGroup>

      </Toolbar>

         
  

    )
}



export default Header;