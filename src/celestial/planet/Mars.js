import Planet from './Planet';

class Mars extends Planet {

  constructor(props) {
    super(props);

    this.view = (
      <circle className='content' r='5' fill='#D84315' />
    );
  }
}

export default Mars;