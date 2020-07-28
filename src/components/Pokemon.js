import React from 'react';

class Pokemon extends React.Component {
  render() {
    console.log(this.props);
    return (
      <article>
        <ul className='pokemon_list'>
          <li className='pokemon_card '>
            <img
              className='pokemon_img'
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
