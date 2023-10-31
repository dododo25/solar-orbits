import PlanetMoonCard from './PlanetMoonCard.js';

const CallistoCard = props => {
  return (
    <PlanetMoonCard name='Callisto' 
                shortName='Callisto' 
                parentObjectName='Jupiter' 
                imageSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Callisto_-_July_8_1979_%2838926064465%29.jpg/220px-Callisto_-_July_8_1979_%2838926064465%29.jpg' 
                radius='2,410.3 km - 0.378 Earths' 
                mass={(<span>1.076x10<sup>23</sup> kg, 0.018 Earths</span>)} 
                volume={(<span>5.9x10<sup>10</sup> km<sup>3</sup>, 0.054 Earths</span>)} 
                gravity='0.13G'
                distance={{
                  aphelion: '1,897,000 km', 
                  perihelion: '1,869,000 km', 
                  mean: '1,882,700 km'
                }} 
                axisTilt='0°' 
                dayLength='16d 16h 32m' 
                monthLength='16.689 Earth days' 
                temperature={{min: '80 K - -193 °C', max: '165 K - -108 °C', mean: '134 K - -139 °C'}} 
                link='https://en.wikipedia.org/wiki/Callisto_(moon)' 
                onClose={props.onClose} />
  );
};

export default CallistoCard;
