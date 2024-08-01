import { Month } from '../../Constants';

import Planet from './Planet';

class Moon extends Planet {

  constructor(props) {
    super(props);

    this.duration = Month;

    this.view = (
      <circle className='content' r='4' fill='#BDBDBD' />
    );
  }
}

export default Moon;