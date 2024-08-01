import Planet from './Planet';

class Europa extends Planet {

  constructor(props) {
    super(props);

    this.view = (
      <circle className='content' r='4' fill='#BDBDBD' />
    );
  }
}

export default Europa;