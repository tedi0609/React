import React from 'react';

class Lesson extends React.Component {
  render() {
    return (
      <div className='lesson-card'>
        <div className='lesson-item'>
          {/* Masukan nilai milik props name  */}
          <p><p>{this.props.name}</p></p>
          {/* Tentukan nilai dari props image untuk atribut src */}
          <img src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default Lesson;
