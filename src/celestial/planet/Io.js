import Planet from './Planet';

class Io extends Planet {

  constructor(props) {
    super(props);

    this.view = (
      <circle className='content' r='4' fill='#FFF176' />
    );
  }
}

export default Io;