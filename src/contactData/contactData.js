import React, {Component} from 'react';
import {createOrder} from '../Store/orderActions'
import {connect} from 'react-redux'
import Spinner from "../components/Spinner/Spinner";
import Button from "../components/Button/Button";
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        street: '',
        postal: '',
        loading: false,
    };

    valueChanged = event => this.setState({[event.target.name]: event.target.value});

    orderHandler = async (event) => {
        event.preventDefault();

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.name,
                email: this.state.email,
                street: this.state.street,
                postal: this.state.postal,
            }
        };
       await this.props.createOrder(order);
        this.props.history.push('/')

    };

    render() {
        let form = (
            <form onSubmit={this.orderHandler}>
                <input
                    className="Input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={this.state.name}
                    onChange={this.valueChanged}
                />
                <input
                    className="Input"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={this.valueChanged}
                />
                <input
                    className="Input"
                    type="text"
                    name="street"
                    placeholder="Street address"
                    value={this.state.street}
                    onChange={this.valueChanged}
                />
                <input
                    className="Input"
                    type="text"
                    name="postal"
                    placeholder="Postal Code"
                    value={this.state.postal}
                    onChange={this.valueChanged}
                />
                <Button type="Success">ORDER</Button>
            </form>
        );

        if (this.props.loading) {
            form = <Spinner/>;
        }

        return (
            <div className="ContactData">
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    loading: state.order.loading,
    error:state.order.error
});

const mapDispatchToProps = dispatch => ({
    createOrder:order => dispatch(createOrder(order))
});
export default connect(mapStateToProps,mapDispatchToProps) (ContactData);