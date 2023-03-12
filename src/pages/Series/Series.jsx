import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Detail from '../../components/Detail/Detail';
import useDebounced from '../../Hooks/useDebounced';
import Layout_gallery from '../../Layouts/Layout_gallery';

const Series = () => {
  const [serie, setSerie] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filterSerie, setFilterSerie] = useState([]);
  const debounceValue = useDebounced(filterSerie, 1000);

  const getSeries = async () => {
    const res = await axios.get(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    );
    const data = res.data;
    const datos = data.entries;

    const only = datos.filter(
      (dat) => dat.programType === 'series' && dat.releaseYear >= 2010,
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

    setSerie(order);
    setFilterSerie(order);
    setLoaded(true);
  };

  useEffect(() => {
    getSeries();
  }, []);

  const seriesFilter = (key) => {
    const filter = serie.filter(
      (item) =>
        item.title.toLowerCase().includes(key.toLowerCase()) ||
        (item.releaseYear.toString().includes(key) ==
          item.releaseYear.toString().includes(key) &&
          item.releaseYear.toString().includes(key)),
    );
    setFilterSerie(filter);
  };

  return (
    <main>
      <div className="pt-header2">
        <h2>Popular Series</h2>
      </div>
      <div className="pt-div">
        <input
          type="text"
          placeholder="Search..."
          onChange={(ev) => seriesFilter(ev.target.value)}
        />
      </div>
      {loaded && filterSerie.length ? (
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

export default Series;
