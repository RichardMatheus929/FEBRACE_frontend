import React from 'react';
import './DashboardDados.css';

const DashboardDados = () => {
  return (
    <div className='dashboard'>
      <div className='box filtro'>
        <div className="button-container">
          {(() => {
            const anos = ["todos os anos", 2023, 2022, 2021, 2020, 2019, 2018];
            return anos.map((anoValue) => (
              <input
                key={anoValue}
                type="button"
                value={anoValue}
                onClick={() => setAno(anoValue)}
              />
            ));
          })()}
        </div>
      </div>
      <div className='box total'>
        <h1>Total</h1>
      </div>
      <div className='box estatistica'>
        <h1>Estatística</h1>
        <h1>Estatistica</h1>
      </div>
      <div className='box classificacao'>
        <h1>Classificacao</h1>
      </div>
    </div>
  );
};

export default DashboardDados;
