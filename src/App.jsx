import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ListaDePessoas from './ListaDePessoas';
import GeraPessoas from './GeraPessoas';

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [pagina, setPagina] = useState(0);

  function fetchMoreData() {
    setPagina(pagina + 1);

    const novasPessoas = GeraPessoas(pagina + 1);
    setPessoas([...pessoas, ...novasPessoas]);
  }

  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <InfiniteScroll
        dataLength={pessoas.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <ListaDePessoas pessoas={pessoas} />
      </InfiniteScroll>
    </div>
  );
}

export default App;
