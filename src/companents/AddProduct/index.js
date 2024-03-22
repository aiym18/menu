import React, { useContext, useState } from "react";
import { MenuContext } from "../../context";

const AddProduct = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [add, setAdd] = useState([]);

  const { productAll,setProductAll } = useContext(MenuContext);

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      url: url,
      name: name,
      price: price,
      info: info,
    };
    let res = [...productAll,newProduct];
    setAdd(res);

    setUrl("");
    setName("");
    setPrice("");
    setInfo("");
  };
  return (
    <div id="addproduct">
      <div className="container">
        <div className="addproduct">
          <h1>ADD PRODUCT</h1>
          <input
            type="text"
            placeholder="url"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <input
            type="text"
            placeholder="info"
            onChange={(e) => setInfo(e.target.value)}
            value={info}
          />
          <button onClick={() => addProduct()}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
