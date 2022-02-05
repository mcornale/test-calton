import { useState } from 'react';
import './Topics.css';

const INITIAL_VISIBLE_TOPICS = 6;

const Topics = (props) => {
  const { topicsName, topicsColor } = props;

  const [topicsToShow, setTopicsToShow] = useState(INITIAL_VISIBLE_TOPICS);

  const topicsCount = topicsName.length;

  const filteredTopicsName = topicsName.slice(0, topicsToShow);

  const onChangeTopicsToShow = () => {
    setTopicsToShow((prevTopicsToShow) =>
      prevTopicsToShow === topicsCount ? INITIAL_VISIBLE_TOPICS : topicsCount
    );
  };

  return (
    <>
      <section className='topics-list'>
        {filteredTopicsName.map((topicName, index) => (
          <p
            key={index}
            className='topics-list__topic'
            style={{ backgroundColor: topicsColor[index] }}
          >
            {topicName}
          </p>
        ))}
      </section>
      <button onClick={onChangeTopicsToShow} className='topics-list__button'>
        {topicsToShow === topicsCount ? 'Mostra meno' : 'Mostra tutti'}
      </button>
    </>
  );
};

export default Topics;
