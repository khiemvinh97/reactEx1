import React, { useState, useEffect } from 'react';
import MainItem from './main__item'

const MainSec = () => {

  useEffect(
    () => {
      fetch('http://localhost:3001/product')
        .then(res => res.json())
        .then((datas) => {
          setData(datas)
        }).catch(err => console.error(err));

      fetch('http://localhost:3001/size')
        .then(res => res.json())
        .then((datas) => {
          setSize(datas)
        }).catch(err => console.error(err));
      setSize(checkSize(data, setSize))
    }, [])

  const [data, setData] = useState(Array)
  const [size, setSize] = useState(Array)

  return (
    <React.Fragment>
      <section className="main__section">
        <div className="container">
          <div className="row">
            <div className="left__item">
              <div className="left__text">
                <h4>Sizes:</h4>
              </div>
              <div className="left__size">
                <CheckLink size={size} data={data} setSize={setSize} setCheck={checkSize} />
              </div>
              <div className="left__note">
                <p>Leave a star on Github if this repository was useful :)</p>
                <button>
                  <i className="fab fa-github" />
                  Star
        </button>
              </div>
            </div>
            <MainItem items={checkSize(data,size)}/>
          </div>
        </div>
      </section>
    </React.Fragment>

  )
}

export default MainSec

const checkSize = (data, size) => {
  let correctData = [];
  Boolean = false;
  for (let i in size) {
    if (size[i].check) {
      Boolean = true;
      data.forEach(item => {
        if (item.size === size[i].size) {
          correctData.push(item)
        }
      });
    }
  }
  if (!Boolean) {
    correctData = data
  }
  return correctData
}


const CheckLink = (props) => {
  const { size, setSize, data ,setCheck} = props
  return (
    size.map((item, index) => {
      if (item.check) {
        return (
          <a className="-active" href="#" key={index} onClick={(e) => {
            e.preventDefault();
            item.check = !item.check
            setSize([...size])
            setCheck(data, size)
          }}>
            <span>{item.size}</span>
          </a>
        )
      }
      else {
        return (
          <a href="#" key={index} onClick={(e) => {
            e.preventDefault();
            item.check = !item.check
            setSize([...size])
            setCheck(data, size)
          }}>
            <span>{item.size}</span>
          </a>
        )
      }
    }
    )
  )
}