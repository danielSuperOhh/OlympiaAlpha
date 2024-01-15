import './brokenLine.css'

const BrokenLine = ({flipHorizontal}) => {

    const lineStyle = {
        transform: flipHorizontal ? 'scaleX(-1)' : 'none',
    };

  return (
    <div className='brokenline'>
        <div className="line" style={lineStyle}></div>
    </div>
  )
}

export default BrokenLine