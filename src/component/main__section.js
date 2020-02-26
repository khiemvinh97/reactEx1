import React, { useState, useEffect } from 'react';
import MainItem from './main__item'
import database from '../data/data'


const MainSec = () => {

  const [data, setData] = useState(database.product)
  const [size, setSize] = useState(database.size)
  const [check, setCheck] = useState(checkSize(data, size))


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
                {
                  size.map((item, index) => {
                    if (item.check) {
                      return (
                        <a className="-active" href="#" key={index} onClick={(e) => {
                          e.preventDefault();
                          item.check = !item.check
                          setSize([...size])
                          setCheck(checkSize(data, size))
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
                          setCheck(checkSize(data, size))
                        }}>
                          <span>{item.size}</span>
                        </a>
                      )
                    }
                  }
                  )
                }
              </div>
              <div className="left__note">
                <p>Leave a star on Github if this repository was useful :)</p>
                <button>
                  <i className="fab fa-github" />
                  Star
        </button>
              </div>
            </div>
            <MainItem items={check} />
          </div>
        </div>
      </section>
    </React.Fragment>

  )
}

export default MainSec






const checkSize = (data, size) => {
  let correctData = [];
  Boolean = false ;
  for (let i in size) {
    if (size[i].check) {
      Boolean=true;
      data.forEach(item => {
        if (item.size === size[i].size) {
          correctData.push(item)
        }
      });
    }
  }
  if(!Boolean){
    correctData= data
  }
  return correctData
}



// if (!size[0].check && !size[1].check && !size[2].check && !size[3].check && !size[4].check && !size[5].check && !size[6].check) {
//   correctData = data;
// }