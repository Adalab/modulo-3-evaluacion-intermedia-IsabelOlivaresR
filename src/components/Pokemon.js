import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='card'>
        <img
          className='pokemon_img'
          src={this.props.url}
          alt={this.props.name}
        />
        <h2 className='pokemon_name'>{this.props.name}</h2>
        <p className='pokemon_type'>{this.props.types}</p>
      </div>
    );
  }
}

export default Pokemon;
