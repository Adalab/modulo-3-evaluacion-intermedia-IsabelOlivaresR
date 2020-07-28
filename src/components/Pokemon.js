import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <article>
        <ul className='card_render '>
          <li>
            <img
              className='pokemon_icon'
              src={this.props.url}
              alt='imagen pokemon'
            />
            <h2 className='pokemon_name'>{this.props.name}</h2>
            <p className='pokemon_type'>{this.props.types}</p>
          </li>
        </ul>
      </article>
    );
  }
}

export default Pokemon;
