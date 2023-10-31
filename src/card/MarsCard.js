import PlanetCard from './PlanetCard.js';

const MarsCard = props => {
  return (
    <PlanetCard name='Mars ♂' 
                shortName='Mars' 
                imageSrc='https://nssdc.gsfc.nasa.gov/planetary/image/mars.jpg' 
                radius='3,389.5 km, 0.532 Earths' 
                mass={(<span>6.417x10<sup>23</sup> kg, 0.107 Earths</span>)} 
                volume={(<span>1.631x10<sup>11</sup> km<sup>3</sup>, 0.151 Earths</span>)} 
                gravity='0.38G'
                distance={{
                  aphelion: '1.66 AU - 249.26 million km', 
                  perihelion: '1.38 AU - 206.65 million km', 
                  mean: '1.52 AU - 227.94 million km'
                }} 
                axisTilt='25.19°' 
                dayLength='24h 37m 23s' 
                yearLength='687 days, 1.88 Earth years' 
                temperature={{min: '163 K - -110 °C', max: '308 K - 35 °C', mean: '213 K - -60 °C'}} 
                moons=' Phobos, Deimos' 
                link='https://en.wikipedia.org/wiki/Mars' 
                onClose={props.onClose} />
  );
};

export default MarsCard;
