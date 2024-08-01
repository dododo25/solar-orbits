import Planet from './Planet';

class Neptune extends Planet {

  constructor(props) {
    super(props);

    this.view = (
      <circle className='content' r='16' fill='#3949AB' />
    );
  }
}

export default Neptune;