import MoonCard from './MoonCard.js';
import PlanetCard from './PlanetCard.js';

const EarthCard = props => {
  return (
    <PlanetCard name='Earth 🜨' 
                shortName='Earth' 
                imageSrc='https://nssdc.gsfc.nasa.gov/imgcat/hires/a17_h_148_22727.gif' 
                radius='6,371 km' 
                mass={(<span>5.972x10<sup>24</sup> kg, 0.815 Earths</span>)} 
                volume={(<span>1.083x10<sup>11</sup> km<sup>3</sup></span>)} 
                gravity='1G'
                distance={{
                  aphelion: '1.01 AU - 152 million km', 
                  perihelion: '0.98 AU - 147 million km', 
                  mean: '1 AU - 150 million km'
                }} 
                axisTilt='23.44°' 
                dayLength='23h 56 m 4 s' 
                yearLength='365.256 d' 
                temperature={{min: '184 K - −89.2 °C', max: '330 K - 56.7 °C', mean: '287 K - 14.76 °C'}} 
                moons={(<button className='btn btn-link' onClick={() => props.onClick(<MoonCard onClose={props.onClose} />)}><h5>Moon</h5></button>)} 
                link='https://en.wikipedia.org/wiki/Earth' 
                onClose={props.onClose} />
  );
};

export default EarthCard;
