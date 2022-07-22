import PropTypes from 'prop-types';

import css from './StatisticsSectionStyle.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.sectionContainer}>
      <div className={css.section}>
        <h1 className={css.title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
