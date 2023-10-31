import PlanetCard from './PlanetCard.js';

const UranusCard = props => {
  return (
    <PlanetCard name='Uranus ⛢' 
                shortName='Uranus' 
                imageSrc='https://nssdc.gsfc.nasa.gov/planetary/image/uranus.jpg' 
                radius='25,362 km, 3.97 Earths' 
                mass={(<span>8.68x10<sup>25</sup> kg, 14.536 Earths</span>)} 
                volume={(<span>	6.833x10<sup>13</sup> km<sup>3</sup>, 63.09 Earths</span>)} 
                gravity='0.89G'
                distance={{
                  aphelion: '20.097 AU - 3 billion km', 
                  perihelion: '18.2861 AU - 2.74 billion km', 
                  mean: '19.19 AU - 2.87 billion km'
                }} 
                axisTilt='97.77°' 
                dayLength='17h 14m 24s' 
                yearLength='84 Earth years' 
                temperature={'76 K - -197.2 °C'} 
                moons={(<span>&nbsp;27 moons</span>)} 
                link='https://en.wikipedia.org/wiki/Uranus_(moon)' 
                onClose={props.onClose} />
  );
};

export default UranusCard;
