const Sun = props => {
  return (
    <g id={props.id}>
      <g className='planets'>
        {props.children}
      </g>
      <g className='star'>
        <circle r='72' fill='#FBC02D' />
      </g>
    </g>
  );
}

export default Sun;