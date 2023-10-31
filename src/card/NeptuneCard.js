import PlanetCard from './PlanetCard.js';
import TritonCard from './TritonCard.js';

const NeptuneCard = props => {
  return (
    <PlanetCard name='Neptune ♆' 
                shortName='Neptune' 
                imageSrc='https://nssdc.gsfc.nasa.gov/planetary/image/neptune.jpg' 
                radius='24,622 km, 3.86 Earths' 
                mass={(<span>1.02x10<sup>26</sup> kg, 17.147 Earths</span>)} 
                volume={(<span>6.253x10<sup>13</sup> km<sup>3</sup>, 57.74 Earths</span>)} 
                gravity='1.14G' 
                distance={{
                  aphelion: '30.33 AU - 4.54 billion km', 
                  perihelion: '29.81 AU - 4.46 billion km', 
                  mean: '30.07 AU - 4.5 billion km'
                }} 
                axisTilt='28.32°' 
                dayLength='16h 6m 36s' 
                yearLength='164.8 Earth years' 
                temperature={'72 K - -201 °C'} 
                moons={(<button className='btn btn-link' onClick={() => props.onClick(<TritonCard onClose={props.onClose} />)}><h5>Triton</h5></button>)} 
                link='https://en.wikipedia.org/wiki/Neptune' 
                onClose={props.onClose} />
  );
};

export default NeptuneCard;
