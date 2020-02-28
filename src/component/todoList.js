import React, { useState, useEffect } from 'react';
import ShopCart from './shoping__cart'

const ToDoList = (props) => {

  const { items } = props
  const [data, setData] = useState(Array);
  const [loadPage, setLoad] = useState(false)
  let [amount, setAmount] = useState(data.length)

  useEffect(() => {
    setAmount(data.length)
    setTimeout(() =>
    setLoad(true)
    , 300)
  })

  if (!loadPage) {
    return (
      <div className="loader"></div>
    )
  }
  
  else {
    return (
      <React.Fragment>
        <ShopCart data={data} amount={amount} />
        {items.map((item, index) =>
          <div className="product__item" key={item.id}>
            <div className="product__img">
              <img className="img" src={`${item.img}`}></img>
            </div>
            <div className="product__name">
              <p>{item.name}</p>
            </div>
            <div className="product__span">
              <span />
            </div>
            <div className="product__price">
              <p>
                $<span>{parseFloat(item.price).toFixed(2)}</span>
              </p>
              <p className="-info">or 9 x ${parseFloat(item.price / 9).toFixed(2)}</p>
            </div>
            <div className="product__button" >
              <a href="#"
                onClick={(e) => addCart(e, data, item, setData)}
              >Add to cart</a>
            </div>
            <div className="product__ship">
              <p>Free shiping</p>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default ToDoList

const addCart = (e, data, item, setData) => {
  e.preventDefault();
  if (data.length === 0) {
    setData([...data, item]);
  }
  else if (!data.includes(item)) {
    setData([...data, item]);
  }
  else {
    let changeQuan = data
    changeQuan[changeQuan.indexOf(item)].Quantity += 1
    setData([...changeQuan])
  }
  document.getElementsByClassName("shopping__cart")[0].style.right = "0px";
  document.getElementsByClassName("shopping__cart")[0].style.visibility = "visible";
  document.getElementsByClassName("shopping__cart")[0].style.display = "flex";
  document.getElementsByClassName("cancel__cart")[0].style.display = "block";
}