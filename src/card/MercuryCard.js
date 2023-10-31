import PlanetCard from './PlanetCard.js';

const MercuryCard = props => {
  return (
    <PlanetCard name='Mercury ☿' 
                shortName='Mercury' 
                imageSrc='https://nssdc.gsfc.nasa.gov/planetary/image/mercury.jpg' 
                radius='2,439.7 km, 0.383 Earths' 
                mass={(<span>3.3011x10<sup>23</sup> kg, 0.055 Earths</span>)} 
                volume={(<span>6.083x10<sup>10</sup> km<sup>3</sup>, 0.056 Earths</span>)} 
                gravity='0.38G'
                distance={{
                  aphelion: '0.467 AU - 69.82 million km', 
                  perihelion: '0.308 AU - 46 million km', 
                  mean: '0.387 AU - 57.91 million km'
                }} 
                axisTilt='0.034°' 
                dayLength='4,222.6 h' 
                yearLength='88 Earth days' 
                temperature={{min: '100 K - -173 °C', max: '700 K - 427 °C', mean: '340 K - 67 °C'}} 
                link='https://en.wikipedia.org/wiki/Mercury_(planet)' 
                onClose={props.onClose} />
  );
};

export default MercuryCard;
