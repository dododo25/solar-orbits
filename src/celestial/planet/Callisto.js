import Planet from './Planet';

class Callisto extends Planet {

  constructor(props) {
    super(props);

    this.view = (
      <circle className='content' r='4' fill='#9575CD' />
    );
  }
}

export default Callisto;