export default function(props) {
  const orbitRadius = props.orbitRadius;

  return (
    <g id={props.id}>
      <g className='orbit'>
        <circle cx='0' cy='0' r={orbitRadius} stroke='#FAFAFA' strokeWidth='0.5' strokeDasharray='12' fill='transparent' />,
      </g>
      <g transform={`rotate(${props.angle * -1})`}>
        <g transform={`translate(${orbitRadius}, 0)`}>
          {props.children}
          <g className='planet'>
            <g transform={`rotate(${props.angle})`}>
              {props.view}
            </g>
          </g>
        </g>
      </g>
    </g>
  );
}