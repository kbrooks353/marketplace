import React, { Fragment, Component } from 'react';
import './App.css';
import AppBar from "./components/AppBar"
import SearchBox from "./components/SearchBox"
import DataBody from "./components/DataBody"
import products from "./products/products.json"

class App extends Component {

  state = {
    products
  }
   
render(){
  return (
    <Fragment>
      <AppBar/>
      <SearchBox/>
      {this.state.products.map(product => (
        <DataBody
          key={product.name} 
          name={product.name}
          image= {product.image}
          price= {product.salePrice}
        />
      ))}
      
    </Fragment>
  );
}
 
}

export default App;
