import PropTypes from 'prop-types';

const articlePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
  descendants: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
  kids: PropTypes.arrayOf(PropTypes.number),
});

export {articlePropTypes}