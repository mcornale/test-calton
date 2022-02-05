import Analysis from './components/Analysis/Analysis';
import FormsContainer from './components/Forms/FormsContainer';
import Header from './components/Header/Header';
import { Chart, registerables } from 'chart.js';

const App = () => {
  Chart.register(...registerables);
  Chart.defaults.font.family = "'Montserrat', sans-serif";
  Chart.defaults.font.weight = 500;
  Chart.defaults.font.size = '12';
  Chart.defaults.color = '#222';

  return (
    <>
      <Header />
      <main>
        <h1>Analisi Avanzata</h1>
        <FormsContainer />
        <Analysis />
      </main>
    </>
  );
};

export default App;
