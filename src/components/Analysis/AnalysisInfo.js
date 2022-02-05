import './AnalysisInfo.css';

const AnalysisInfo = (props) => {
  const { title, value } = props;

  return (
    <section className='analysis-info'>
      <h4>{title}</h4>
      <p className='analysis-info__value'>{value}</p>
    </section>
  );
};

export default AnalysisInfo;
