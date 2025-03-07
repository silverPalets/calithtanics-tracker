import PropTypes from 'prop-types'

function Background({children}) {
  return (
    <div className="h-screen bg-linear-to-r from-purple-950 to-black px-8 pt-10">
    {children}
    </div>
  )
}

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background