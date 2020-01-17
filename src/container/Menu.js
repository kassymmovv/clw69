import React, {Component} from 'react';
import './Menu.css'
import {connect} from "react-redux";
import {dishes} from "../Store/actions";
import Card from '../components/Card'
import {createOrder} from "../Store/orderActions";
class Menu extends Component {
state = {
    orders:{}
};
componentDidMount() {
this.props.renderFoods()
}

    render() {
    console.log(this.props.foods.foods);
    return(
        <div>
            {this.props.foods.foods && Object.keys(this.props.foods.foods).map(res => (
               <Card
                   name={this.props.foods.foods[res].name}
                   img={this.props.foods.foods[res].img}
                   price={this.props.foods.foods[res].price}
                   addToCard={this.props.createOrder(this.props.foods.foods[res])}
               >

               </Card>
            ))}
            <div className="corzina">
                <p>corzina</p>
                <button onClick={handler}>заказать</button>
            </div>
        </div>
    )


    }
}
const handler = () => {
    this.props.history.push('/orders')
};
const mapStateToProps = state => {
   return{
        foods: state.foods
    }
};
const mapDispatchToProps = dispatch => {
  return{
      renderFoods: () => dispatch(dishes()),
      createOrder: order => dispatch(createOrder(order))
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Menu);