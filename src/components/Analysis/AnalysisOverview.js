import { Doughnut } from 'react-chartjs-2';

import './AnalysisOverview.css';

const AnalysisOverview = (props) => {
  const { chartData, children } = props;

  return (
    <section className='analysis-results'>
      <header className='analysis-results__header'>
        <h3>Distribuzione topics</h3>
      </header>
      <Doughnut
        className='analysis-results__chart'
        options={{
          plugins: {
            tooltip: {
              enabled: false,
            },
          },
        }}
        data={chartData}
      />
      {children}
    </section>
  );
};

export default AnalysisOverview;
