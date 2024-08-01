import Planet from './Planet';

class Mercury extends Planet {

  constructor(props) {
    super(props);

    this.view = (
      <circle className='content' r='4' fill='#4E342E' />
    );
  }
}

export default Mercury;