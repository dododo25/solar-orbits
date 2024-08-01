import Planet from './Planet';

class Uranus extends Planet {

  constructor(props) {
    super(props);

    const radius = 33;

    this.view = (
      <g transform={`translate(${-radius}, ${-radius})`}>
        <circle cx='33' cy='33' r='18' fill='#66BB6A' />
        <g transform='rotate(9) translate(30 -16)'>
          <g transform='scale(0.2 1.3)'>
            <circle cx='33' cy='33' r='20' fill='transparent' stroke='#BDBDBD' />
          </g>
        </g>
        <path d='M 31 50.8885 A 18 18 0 0 1 33 15 z' fill='#66BB6A' />
      </g>
    );
  }
}

export default Uranus;