
import './App.css';
import {useEffect, useState} from "react"

function App() {

  let [products,setProducts] = useState([]);

  useEffect(()=>{
    getProductsFromServer();
  },[])
  let getProductsFromServer = async ()=>{


    let reqOptions = {
      method: "GET",
    }
    let JSONData = await fetch("https://fakestoreapi.com/products",reqOptions)

    let JSOData = await JSONData.json();
    setProducts(JSOData)

    console.log(JSOData);
  };

  return (
    <div className="App">
      <button onClick= {()=>{
        getProductsFromServer();
      }}  >Get Products</button>

      <div className="container">
      {products.map((ele,i)=>{
        return <div key={i} className="productDiv">
          <img className="productPic" src={ele.image} title= {ele.description}></img>
          <h5>{ele.title}</h5>
          <h5>{ele.price}</h5>
          <h5>{ele.category}</h5>
        </div>
      })}
      </div>
    </div>
  );
}

export default App;
