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

  handleText = (id) => {
    this.setState({
      currencyKey: id,
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
                return (
                  <>
                    <Navbar handleText={this.handleText} currencyKey={this.state.currencyKey} data={data} />
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
