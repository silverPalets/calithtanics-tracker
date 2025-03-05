

function Background(props) {
  return (
    <div className="h-screen bg-linear-to-r from-purple-950 to-black">
    {props.children}
    </div>
  )
}

export default Background