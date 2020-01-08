import React from 'react';
import './App.css';
import MenuSuperior from './components/menu-superior/menuSuperior';
import { Switch, Route } from 'react-router-dom'
import Resumo from './components/resumo/resumo';
import Faturamento from './components/faturamento/faturamento';
import Consultas from './components/consultas/consultas';
function App() {
  return (
    <div>
      <MenuSuperior/>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Switch>
              <Route path="/" exact component={Resumo}/>
              <Route path="/consultas" component={Consultas}/>
              <Route path="/faturamento" component={Faturamento}/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
