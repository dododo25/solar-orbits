import Planet from './Planet';

class Earth extends Planet {
  
  constructor(props) {
    super(props);

    this.view = (
      <circle className='content' r='9' fill='#0000FF' />
    );
  }
}

export default Earth;