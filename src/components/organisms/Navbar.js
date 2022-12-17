import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { graphql } from "@apollo/client/react/hoc";
import { GET_CATEGORIES } from "../../queries/getQueries";
import { CartConsumer } from "../Context/CartContext";
import Dropdown from "../Utils/Header/utils/Dropdown/Dropdown";
import CartOverlay from "../Utils/Header/utils/Dropdown/CartOverlay/CartOverlay";
import { Nav, CurrencyWrap, Img, Ul, Lia, Currencies, P, PokerContain } from "../../style/NavbarStyles";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyKey: 0,
    };
  }

  convertHexToSwatchOV() {
    const productColor = document.querySelectorAll(".product-color-bag");
    productColor.forEach((child) => {
      const pcNodes = child.childNodes;
      pcNodes.forEach((gChild) => {
        gChild.style.backgroundColor = gChild.getAttribute("value");
        if (gChild.getAttribute("value") === "#FFFFFF") {
          gChild.classList.add("color-visibility");
        }
      });
    });
  }
  openNav() {
    document.getElementById("myCart").classList.toggle("show-cart");
    this.convertHexToSwatchOV();
  }
  closeNav() {
    window.addEventListener("click", (e) => {
      e.target.className === "sidebar show-cart" && document.getElementById("myCart").classList.toggle("show-cart");
    });
  }
  displayCategories() {
    const data = this.props.data;
    if (data.loading === false) {
      return data.categories.map(({name}) => {
        return (
          <Lia key={name}>
            <NavLink activeClassName="active" className="navlink" id={name} to={`/${name}`}>
              {name}
            </NavLink>
          </Lia>
        );
      });
    }
  }
  displayCurrencySymbols2() {
    const data = this.props.data;
    if (data.loading) {
      return ["Loading"];
    } else {
      return data.currencies.map((currency) => {
        const currencyISO = {
          $: "USD",
          "£": "GBP",
          A$: "AUD",
          "¥": "JPY",
          "₽": "RUB",
        };
        //console.log(currency)
        return currency.symbol + " " + currencyISO[currency.symbol];
      });
    }
  }
  componentDidMount() {
    const currencyDropdown = document.querySelector(".dropdown-text");
    document.addEventListener("click", () => {
      switch (currencyDropdown.textContent.charAt(0)) {
        case "£":
          this.setState({
            currencyKey: 1,
          });
          break;
        case "A":
          this.setState({
            currencyKey: 2,
          });
          break;
        case "¥":
          this.setState({
            currencyKey: 3,
          });
          break;
        case "₽":
          this.setState({
            currencyKey: 4,
          });
          break;
        default:
          this.setState({
            currencyKey: 0,
          });
      }
    });
  }
  render() {
    this.closeNav();
    return (
      <Nav>
          <Ul>{this.displayCategories()}</Ul>
          <Link to="/all">
            <Img src="./logo.png" alt="" />
          </Link>
        <CurrencyWrap>
          <Currencies>
            <Dropdown currencyList={this.displayCurrencySymbols2()} />
          </Currencies>
          <div
            onClick={() => {
              this.openNav();
            }}
            className="cart-vector"
          >
            <CartConsumer>
              {(props) => {
                const { cart, quantities } = props;
                if (cart.length >= 1) {
                  return (
                    <PokerContain>
                      <P>{cart.length + quantities.length}</P>;
                    </PokerContain>
                  );
                }
              }}
            </CartConsumer>
            <div style={{marginLeft: 50}}>
              <Img src="./assets/shopping-cart.png" width={24} height={20} />
            </div>
          </div>
          <CartOverlay close={this.closeNav} currency={this.state.currencyKey} />
        </CurrencyWrap>
      </Nav>
    );
  }
}

export default graphql(GET_CATEGORIES)(Navbar);
