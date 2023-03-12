import './Detail.css';

import React from 'react';

import Dialog from '../Dialog/Dialog';

const Detail = ({ item }) => {
  return (
    <div>
      <figure className="pt-figure">
        <img src={item.images['Poster Art'].url} alt={item.title} className="imgDetail" />
        <button onClick={(ev) => (ev.target.nextSibling.open = true)}>
          {item.title}
        </button>
        <Dialog item={item} />
      </figure>
    </div>
  );
};

export default Detail;
