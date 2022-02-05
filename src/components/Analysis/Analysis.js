import './Analysis.css';

import AnalysisOverview from './AnalysisOverview';
import AnalysisWidget from './AnalysisWidget';
import widgetsResults from '../../assets/data/bar.json';
import Topics from '../Topics/Topics';
import { ShowingModeContext } from '../../context/ShowingModeContext';
import { useContext, useMemo } from 'react';
import AnalysisInfo from './AnalysisInfo';

const Analysis = () => {
  const { showingMode } = useContext(ShowingModeContext);

  const { dateXaxis: topicsName, dataset: reviewsPerTopicList } =
    widgetsResults.data;

  let totalReviewsCount = 0;

  const topicsColor = useMemo(() => {
    const randomColors = [];
    const huesArr = [];

    for (let i = 0; i < topicsName.length; i++) {
      let newRandomColor = '';
      let hue;
      let saturation;
      let lightness;
      let isDuplicateOrSimilar = false;

      do {
        isDuplicateOrSimilar = false;

        hue = Math.round(Math.random() * 360);
        saturation = Math.round(Math.random() * 20 + 40);
        lightness = Math.round(Math.random() * 20 + 50);

        for (let i = 0; i < huesArr.length; i++) {
          if (hue > huesArr[i] - 10 && hue < huesArr[i] + 10)
            isDuplicateOrSimilar = true;
        }
      } while (isDuplicateOrSimilar);

      newRandomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

      huesArr.push(hue);
      randomColors.push(newRandomColor);
    }

    return randomColors;
  }, [topicsName.length]);

  const topicsReviewsCount = topicsName.map((_, index) => {
    const negativeReviews = reviewsPerTopicList[0].data[index];
    const neutralReviews = reviewsPerTopicList[1].data[index];
    const positiveReviews = reviewsPerTopicList[2].data[index];
    const totalReviews = negativeReviews + neutralReviews + positiveReviews;

    totalReviewsCount += totalReviews;

    if (showingMode === 'Percentuale') {
      return {
        negativeReviews: (negativeReviews / totalReviews) * 100,
        neutralReviews: (neutralReviews / totalReviews) * 100,
        positiveReviews: (positiveReviews / totalReviews) * 100,
        totalReviews: totalReviews,
      };
    }

    return {
      negativeReviews: negativeReviews,
      neutralReviews: neutralReviews,
      positiveReviews: positiveReviews,
      totalReviews: totalReviews,
    };
  });

  const analysisOverviewData = {
    datasets: [
      {
        data: topicsReviewsCount.map(
          (topicReviewsCount) => topicReviewsCount.totalReviews
        ),
        backgroundColor: topicsColor,
      },
    ],
  };

  const topicsPerSentimentData = {
    labels: topicsName,
    maxXValue:
      showingMode === 'Percentuale'
        ? 100
        : Math.max(
            ...topicsReviewsCount.map(
              (topicReviewsCount) => topicReviewsCount.totalReviews
            )
          ),
    datasets: [
      {
        label: '😡',
        data: topicsReviewsCount.map(
          (topicReviewsCount) => topicReviewsCount.negativeReviews
        ),
        backgroundColor: '#ED7266',
      },
      {
        label: '🙂',
        data: topicsReviewsCount.map(
          (topicReviewsCount) => topicReviewsCount.neutralReviews
        ),
        backgroundColor: '#F3C344',
      },
      {
        label: '😍',
        data: topicsReviewsCount.map(
          (topicReviewsCount) => topicReviewsCount.positiveReviews
        ),
        backgroundColor: '#6FDCA5',
      },
    ],
  };

  return (
    <section className='analysis'>
      <section className='analysis__infos-container'>
        <AnalysisOverview chartData={analysisOverviewData}>
          <Topics topicsName={topicsName} topicsColor={topicsColor} />
        </AnalysisOverview>
        <AnalysisInfo title='Topics' value={topicsName.length} />
        <AnalysisInfo title='Recensioni totali' value={totalReviewsCount} />
      </section>
      <section className='analysis__widgets-container'>
        <AnalysisWidget
          chartData={topicsPerSentimentData}
          title='Distribuzione topics per sentiment'
        />
      </section>
    </section>
  );
};

export default Analysis;
