import PlanetCard from './PlanetCard.js';
import TitanCard from './TitanCard.js';

const SaturnCard = props => {
  return (
    <PlanetCard name='Saturn ♄' 
                shortName='Saturn' 
                imageSrc='https://nssdc.gsfc.nasa.gov/planetary/image/saturn.jpg' 
                radius='58,23 km, 9.14 Earths' 
                mass={(<span>5.6834x10<sup>26</sup> kg, 95.16 Earths</span>)} 
                volume={(<span>8.2713x10<sup>10</sup> km<sup>14</sup>, 763.59 Earths</span>)} 
                gravity='1.07G'
                distance={{
                  aphelion: '9.0412 AU - 1.35 billion km', 
                  perihelion:'9.0412 AU - 1.35 billion km', 
                  mean: '9.5826 AU - 1.43 billion km'
                }} 
                axisTilt='26.73°' 
                dayLength='10h 33m 38s' 
                yearLength='29.45 Earth years' 
                temperature={'134 K - 407 °C'} 
                moons={(
                  <span>
                    &nbsp;
                    <button className='btn btn-link px-0' onClick={() => props.onClick(<TitanCard onClose={props.onClose} />)}><h5>Titan</h5></button>,
                    and other 145 moons
                  </span>
                )} 
                link='https://en.wikipedia.org/wiki/Saturn' 
                onClose={props.onClose} />
  );
};

export default SaturnCard;
