import PlanetMoonCard from './PlanetMoonCard.js';

const EuropaCard = props => {
  return (
    <PlanetMoonCard name='Europa' 
                shortName='Europa' 
                parentObjectName='Jupiter' 
                imageSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Europa_in_natural_color.png/275px-Europa_in_natural_color.png' 
                radius='1,560.8 km - 0.245 Earths' 
                mass={(<span>4.8x10<sup>22</sup> kg, 0.008 Earths</span>)} 
                volume={(<span>1.593x10<sup>10</sup> km<sup>3</sup>, 0.015 Earths</span>)} 
                gravity='0.13G'
                distance={{
                  aphelion: '676,938 km', 
                  perihelion: '664,862 km', 
                  mean: '670,900 km'
                }} 
                axisTilt='0.1°' 
                dayLength='3d 13h 13m' 
                monthLength='3.551 Earth days' 
                temperature={{min: '50 K - -223 °C', max: '102 K - -171 °C', mean: '125 K - -148 °C'}} 
                link='https://en.wikipedia.org/wiki/Europa_(moon)' 
                onClose={props.onClose} />
  );
};

export default EuropaCard;
