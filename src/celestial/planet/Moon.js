import Planet from './Planet';

class Moon extends Planet {

  constructor(props) {
    super(props);

    this.view = (
      <circle className='content' r='4' fill='#BDBDBD' />
    );
  }
}

export default Moon;