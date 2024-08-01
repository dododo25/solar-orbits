import Planet from './Planet';

class Saturn extends Planet {

  constructor(props) {
    super(props);

    const radius = 50;

    this.view = (
      <g transform={`translate(${-radius}, ${-radius})`}>
        <circle cx='50' cy='50' r='20' fill='#D2B48C' />
        <g transform='translate(10 10)'>
          <circle cx='40' cy='40' r='22' fill='transparent' strokeWidth='1' stroke='#9E9E9E' 
            transform='skewX(45) translate(-38 0)' />
          <circle cx='40' cy='40' r='24' fill='transparent' strokeWidth='0.5' stroke='#9E9E9E' 
            transform='skewX(45) translate(-38 0)' />
          <circle cx='40' cy='40' r='26' fill='transparent' strokeWidth='1.5' stroke='#9E9E9E' 
            transform='skewX(45) translate(-38 0)' />
        </g>
        <path d='M 50 30 A 20 20 0 0 1 70 50 L 33 50 L 40 32.6795  A 20 20 0 0 1 50 30' fill='#D2B48C' />
      </g>
    );
  }
}

export default Saturn;