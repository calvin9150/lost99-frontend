import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

// const Layout = styled.div`
//   width: 300px;
//   height: 450px;
//   border: 1px solid black;
//   margin: 20px;
// `;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 250,
  },
  content: {
    maxHeight: 300,
  },
});

const CardLayout = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg"
        alt="사진"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          지갑 주인 찾아요
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.content}
          noWrap="true"
        >
          지갑안에 1000만원있는데, 주인 찾습니다. 지갑안에 1000만원있는데, 주인
          찾습니다.지갑안에 1000만원있는데, 주인 찾습니다.지갑안에
          1000만원있는데, 주인 찾습니다.지갑안에 1000만원있는데, 주인
          찾습니다.지갑안에 1000만원있는데, 주인 찾습니다.지갑안에
          1000만원있는데, 주인 찾습니다.지갑안에 1000만원있는데, 주인
          찾습니다.지갑안에 1000만원있는데, 주인 찾습니다.지갑안에
          1000만원있는데, 주인 찾습니다.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          수정하기
        </Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
};

export default CardLayout;
