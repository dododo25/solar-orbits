const Sun = props => {
  return (
    <g id={props.id}>
      {props.children}
      <g className='star'>
        <circle r='80' fill='#FBC02D' />
      </g>
    </g>
  );
}

export default Sun;