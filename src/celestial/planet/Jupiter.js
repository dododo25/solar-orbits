import Planet from './Planet';

class Jupiter extends Planet {

  constructor(props) {
    super(props);

    const radius = 26;

    this.view = (
      <g transform={`translate(${-radius}, ${-radius})`}>
        <circle cx={radius} cy={radius} r={radius} fill='#DEB887' />
        <ellipse cx='38' cy='38' rx='7' ry='4' fill='#8B0000' fillOpacity='0.6' />
      </g>
    );
  }
}

export default Jupiter;