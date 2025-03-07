import PropTypes from "prop-types"


function AddButton({width="w-2/3"}) {
  return (
    <div className={`bg-accent2 ${width} h-7 flex justify-center items-center text-black font-bold border-1 border-white rounded-xs `}>
      Add
    </div>
  )
}

AddButton.prototype = {
  width: PropTypes.string,
}

export default AddButton;