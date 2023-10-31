import PlanetMoonCard from './PlanetMoonCard.js';

const IoCard = props => {
  return (
    <PlanetMoonCard name='Io' 
                shortName='Io' 
                parentObjectName='Jupiter' 
                imageSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Io_highest_resolution_true_color.jpg/220px-Io_highest_resolution_true_color.jpg' 
                radius='1,821.6 km - 0.286 Earths' 
                mass={(<span>8.932x10<sup>22</sup> kg, 0.015 Earths</span>)} 
                volume={(<span>2.532x10<sup>10</sup> km<sup>3</sup>, 0.023 Earths</span>)} 
                gravity='0.18G'
                distance={{
                  aphelion: '423,400 km', 
                  perihelion: '420,000 km', 
                  mean: '421,700 km'
                }} 
                axisTilt='6.687°' 
                dayLength='1d 18h 27m 33s' 
                monthLength='1.769 Earth days' 
                temperature={{min: '90 K - -183 °C', max: '130 K - -143 °C', mean: '110 K - -163 °C'}} 
                link='https://en.wikipedia.org/wiki/Io_(moon)'
                onClose={props.onClose} />
  );
};

export default IoCard;
