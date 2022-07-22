import PropTypes from 'prop-types';

import css from './StatisticsStyle.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.statistics__title}>Statistics</h2>
      <div className={css.statistics__list}>
        <p className={css.statistics__item}>
          Good: <span className={css.statistics__num}>{good}</span>
        </p>
        <p className={css.statistics__item}>
          Neutral: <span className={css.statistics__num}>{neutral}</span>
        </p>
        <p className={css.statistics__item}>
          {' '}
          Bad: <span className={css.statistics__num}>{bad}</span>
        </p>
        <p className={css.statistics__item}>
          Total: <span className={css.statistics__num}>{total}</span>
        </p>
        <p className={css.statistics__item}>
          Positive feedback:{' '}
          <span className={css.statistics__num}> {positivePercentage}%</span>
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
