export default function(props) {
  return (
    <g id={props.id}>
      {props.children}
      <g className='star'>
        {props.view}
      </g>
    </g>
  );
}