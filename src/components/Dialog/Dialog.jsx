import React, { useEffect, useState } from 'react';

const Dialog = ({ item }) => {
  const [detail, setDetail] = useState();

  const getDeatil = async () => {
    const res = await fetch(item.href);
    const data = await res.json();
    setDetail(data);
  };

  useEffect(() => {
    getDeatil();
  }, []);
  return (
    <dialog>
      <div className="pt-dialog">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.releaseYear}</p>
        <img src={item.images['Poster Art'].url} alt={item.title} />
      </div>
      <button onClick={(ev) => (ev.target.parentNode.open = false)}>X</button>
    </dialog>
  );
};

export default Dialog;
