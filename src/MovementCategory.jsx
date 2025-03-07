import PropTypes from 'prop-types'
function MovementCategory({children, height = 'h-9'}) {
  return(
    <div className={`bg-mainButton ${height} box-border border-1 border-white rounded-xs flex items-center justify-center text-white`}>
    {children}
    </div>
  );
}

MovementCategory.propTypes = {
  children: PropTypes.string,
  height: PropTypes.string
};
export default MovementCategory;
