import { Bar } from 'react-chartjs-2';
import './AnalysisWidget.css';

const AnalysisWidget = (props) => {
  const { title, chartData } = props;

  return (
    <section className='analysis-widget'>
      <header className='analysis-widget__header'>
        <h3>{title}</h3>
      </header>
      <Bar
        className='analysis-widget__chart'
        options={{
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          scales: {
            x: {
              stacked: true,
              max: chartData.maxXValue,
            },
            y: {
              stacked: true,
            },
          },
        }}
        data={chartData}
      />
    </section>
  );
};

export default AnalysisWidget;
