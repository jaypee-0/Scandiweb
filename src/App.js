import CategoryPage from "./components/CategoryPage/CategoryPage";
import ProductPage from "./components/ProductPage/ProductPage";
import ErrorPage from "./components/Utils/ErrorPage/ErrorPage";
import CartPage from "./components/CartPage/CartPage";
import "./style/App.scss";
import React, { Component } from "react";
import { Query } from "@apollo/react-components";
import { GET_CATEGORIES } from "./queries/getQueries";
import { CartProvider } from "./components/Context/CartContext";
import { Route, Routes, Navigate } from "react-router-dom";
import Loader from "./components/Utils/Loader";
import Navbar from "./components/organisms/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyKey: 0,
    };
  }

  
  componentDidMount() {
    const activeCurrency = (no) => {
    if (this.state.currencyKey === no) {
      return this.setState({ currencyKey: no });;
    }
    this.setState({ currencyKey: no });
  };
    const currencyDropdown = document.querySelector(".dropdown-text");
    document.addEventListener("click", () => {
      switch (currencyDropdown?.textContent?.charAt(0)) {
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
    const { currencyKey } = this.state;
    return (
      <div className="App">
        <CartProvider>
          <Query query={GET_CATEGORIES}>
            {({ loading, data }) => {
              if (loading) {
                return <Loader />;
              } else {
                const { categories } = data;
                console.log(data.currencies)
                const currency = data.currencies.map(({symbol}) => symbol )
                console.log(currency, "Jaypee")
                return (
                  <>
                    <Navbar />
                    <Routes>
                      <Route path="/" element={<Navigate to="/all" />} />
                      {categories?.map(({ name }) => (
                        <Route key={name} path={name === 0 ? "/" : `/${name}/`} element={<CategoryPage currency={currencyKey} categoryName={name} />} />
                      ))}
                      {categories?.map(({ name }) => (
                        <Route key={name} path={`/${name}/:id`} element={<ProductPage category="0" currency={currencyKey} />} />
                      ))}
                      <Route exact path="/cart" element={<CartPage currency={currencyKey} />} />
                      <Route path="*" element={<ErrorPage />} />
                    </Routes>
                  </>
                );
              }
            }}
          </Query>
        </CartProvider>
      </div>
    );
  }
}

export default App;
