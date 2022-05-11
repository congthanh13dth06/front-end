import React, { Component, Fragment } from 'react';
import './App.css';

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class AppComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  UNSAFE_componentWillMount() {
    try {
      const { list } = this.state;
      for (let i = 0; i < 64; i++) {
        let model = {
          color: getRandomColor(),
          positionX: parseInt((i / 8)),
          positionY: parseInt((i % 8))
        }
        list.push(model)
        // list = [...list, model]
      }
    } catch (e) {
      console.error(`AppComponent execute error: ${e.message}`);
    }
  }

  render() {

    const { list } = this.state;

    console.log(`list`, list)


    return (
      <Fragment>
        <div className='App'>
          <div className='Main'>
            {
              list.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div style={{ background: item.color }}></div>
                  </Fragment>
                )
              })
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default AppComponent
