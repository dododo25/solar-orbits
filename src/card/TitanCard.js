import PlanetMoonCard from './PlanetMoonCard.js';

const TitanCard = props => {
  return (
    <PlanetMoonCard name='Titan' 
                shortName='Titan' 
                parentObjectName='Staurn' 
                imageSrc='https://upload.wikimedia.org/wikipedia/commons/f/fe/Titan_in_true_color_by_Kevin_M._Gill.jpg' 
                radius='2,574.73 km, 0.21 Earths' 
                mass={(<span>1.35x10<sup>23</sup> kg, 0.0225 Earths</span>)} 
                volume={(<span>7.16x10<sup>10</sup> km<sup>3</sup>, 0.066 Earths</span>)} 
                gravity='0.14G'
                distance={{aphelion: '1.257 million km', perihelion: '1.187 million km', mean: '1.222 million km'}}
                axisTilt='0°' 
                dayLength='15d 22h' 
                monthLength='15.945 Earth days' 
                temperature={'93.7 K - -179.5 °C'} 
                link='https://en.wikipedia.org/wiki/Titan_(moon)' 
                onClose={props.onClose} />
  );
};

export default TitanCard;
