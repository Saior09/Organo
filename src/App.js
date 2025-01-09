import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulário';
import {useState} from 'react';
import Time from './Componentes/Time';

function App() {

const times = [
  {
    nome: 'Head',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
  },
  {
    nome: 'Gerência',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },  
  {
    nome: 'Coordenação',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },  
  {
    nome: 'Consultoria',
    corPrimaria: '#D86EBF',
    corSecundaria: '#FDE9F5'
  },  
  {
    nome: 'Time N2',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  },  
  {
    nome: 'Time N1',  
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
  },
]

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) => {
  setColaboradores([...colaboradores, colaborador])
}

  return (
    <div className="App">
      <Banner/>
      <Formulario times = {times.map(times => times.nome)} aoColaboradorCadastrado ={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        
        {times.map(time => <Time 
        key={time.nome} 
        nome = {time.nome} 
        corPrimaria = {time.corPrimaria} 
        corSecundaria = {time.corSecundaria}
        colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
         />)}

    </div>
  );
}

export default App;
