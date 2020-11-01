import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {ProductConsumer} from '../context';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   });

export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        return (
            <Card className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <CardActionArea>
                    <img src={img} alt="product" className="card-img-top"></img>
                    <CardContent>
                    <Typography style={{fontSize:"35px"}} gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography style={{fontSize:"30px"}} variant="body2" color="textSecondary" component="p">
                        ${price}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <ProductConsumer>
                {(value)=>(
                <CardActions>
                    <Link style={{textDecoration:"none"}} to='/details'>
                        <Button style={{fontSize:"14px"}} size="small" color="primary"
                            onClick={()=>{value.handleDetail(id)}}>
                            <p>Learn More</p>
                        </Button>
                    </Link>
                    <Button style={{fontSize:"14px"}} size="small" color="primary" disabled={inCart?true:false}
                        onClick={()=>{value.addToCart(id)}}>
                        {inCart?(<p disabled>In Cart</p>):<p><i className="fas fa-cart-plus"/></p>}
                    </Button>
                </CardActions>
                )}
                </ProductConsumer>
            </Card>
        )
    }
}

