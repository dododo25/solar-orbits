import Planet from './Planet';

class Venus extends Planet {

  constructor(props) {
    super(props);

    this.view = (
      <circle className='content' r='8' fill='#F5DEB3' />
    );
  }
}

export default Venus;