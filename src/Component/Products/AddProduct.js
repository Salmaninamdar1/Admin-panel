import React, { useState } from "react";
//import ReactDOM from 'react-dom';

const AddProduct=()=>{
    const [productName, setProductName]=useState({
        pName="",
        pPrice="",
    });
    const changeHandler = (e) => {
        setText(e.target.value);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('The name you entered was: ${name}');
      }
}
return(
<>
<container>
    <form onSubmit={handleSubmit}>
        <div>
            <h1>
                product{text} 
            </h1>
            <input
        type="text"
        name="addProduct"
        placeholder="Enter the product name..."
        value={text}
        onChange={changeHandler}
        />
        <br/>
         <input
        type="text"
        name="addPrice"
        placeholder="Enter the product price..."
        value={text}
        onChange={changeHandler}
        />
        </div>
    </form>
</container>
</>
);
export default AddProduct;