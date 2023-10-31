import PlanetMoonCard from './PlanetMoonCard.js';

const GanymedeCard = props => {
  return (
    <PlanetMoonCard name='Ganymede' 
                shortName='Ganymede' 
                parentObjectName='Jupiter' 
                imageSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ganymede_-_Perijove_34_Composite.png/220px-Ganymede_-_Perijove_34_Composite.png' 
                radius='2,634.1 km - 0.413 Earths' 
                mass={(<span>1.4819x10<sup>22</sup> kg, 0.025 Earths</span>)} 
                volume={(<span>7.66x10<sup>10</sup> km<sup>3</sup>, 0.0704 Earths</span>)} 
                gravity='0.15G'
                distance={{
                  aphelion: '1,071,600 km', 
                  perihelion: '1,069,200 km', 
                  mean: '1,070,400 km'
                }} 
                axisTilt='0.33°' 
                dayLength='7d 3h 42m' 
                monthLength='7.15 Earth days' 
                temperature={{min: '70 K - -203 °C', max: '152 K - -121 °C', mean: '110 K - -163 °C'}} 
                link='https://en.wikipedia.org/wiki/Ganymede_(moon)' 
                onClose={props.onClose} />
  );
};

export default GanymedeCard;
