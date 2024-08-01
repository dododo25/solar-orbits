import Planet from './Planet';

class Ganymede extends Planet {

  constructor(props) {
    super(props);

    this.view = (
      <circle className='content' r='5' fill='#BDBDBD' />
    );
  }
}

export default Ganymede;