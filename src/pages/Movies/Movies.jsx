import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Detail from '../../components/Detail/Detail';
import useDebounced from '../../Hooks/useDebounced';
import Layout_gallery from '../../Layouts/Layout_gallery';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filterMovie, setFilterMovie] = useState([]);
  const debounceValue = useDebounced(filterMovie, 1000);

  const getMovies = async () => {
    const res = await axios.get(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    );
    const data = res.data;
    const datos = data.entries;

    const only = datos.filter(
      (dat) => dat.programType === 'movie' && dat.releaseYear >= 2010,
    );
    const onlys = only.slice(0, 20);
    const order = onlys.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }

      return 0;
    });

    setMovie(order);
    setFilterMovie(order);
    setLoaded(true);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const moviesFilter = (key) => {
    const filter = movie.filter(
      (item) =>
        item.title.toLowerCase().includes(key.toLowerCase()) ||
        (item.releaseYear.toString().includes(key) ==
          item.releaseYear.toString().includes(key) &&
          item.releaseYear.toString().includes(key)),
    );
    setFilterMovie(filter);
  };

  return (
    <main>
      <div className="pt-header2">
        <h2>Popular Movies</h2>
      </div>
      <div className="pt-div">
        <input
          type="text"
          placeholder="Search..."
          onChange={(ev) => moviesFilter(ev.target.value)}
        />
      </div>
      {loaded && filterMovie.length ? (
        <Layout_gallery>
          {debounceValue.map((item) => (
            <Detail item={item} key={item.title} />
          ))}
        </Layout_gallery>
      ) : (
        <h1>No hay coincidencias</h1>
      )}
    </main>
  );
};

export default Movies;
