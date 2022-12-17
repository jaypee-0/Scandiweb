import React from 'react';

import './style/dropdown.scss';

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      haveText: '',
      currencyKey: 0
    };
  }
  componentDidMount() {
    const dd = document.querySelector('.dropdown');
    window.addEventListener('click', (e) => {
      if (e.target.getAttribute('id') !== 'dd-text') {
        dd.classList.remove('active-dd');
      }
    });
  }

  componentDidUpdate() {
    const aud = document.querySelector('#dd-text');
    if (aud.getAttribute('data-iso') === 'A$') {
      aud.classList.add('dropdown-text-aud');
    } else {
      aud.classList.remove('dropdown-text-aud');
    }
  }
  
  render() {
    const { currencyKey } = this.props
    const { isOpen, haveText } = this.state;
    const data = this.props.data;
    const currency = data.currencies.map(({symbol}) => symbol )

    return (
      <div
        className={isOpen ? 'dropdown active-dd' : 'dropdown'}
        onClick={this.handleClick}
      >
        <div id='dd-text' data-iso={haveText} className='dropdown-text'>
          {/* {!haveText ? '$' : haveText} */}
          {currency[currencyKey]}
        </div>
        {this.itemList(this.props.currencyList)}
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  // handleText = (id) => {
  //   this.setState({
  //     currencyKey: id,
  //   });
  //   console.log(id);
  //   console.log(this.state.currencyKey);
  //   console.log(this.props.currencyKey);
  // };

  itemList = (props) => {
    const list = props.map((item, index) => (
      <div
        onClick={()=>this.props.handleText(index)}
        className='dropdown-item'
        key={item.toString()}
      >
        {item}
      </div>
    ));

    return <div className='dropdown-items'> {list} </div>;
  };
}

export default Dropdown;
