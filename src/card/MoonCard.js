import PlanetMoonCard from './PlanetMoonCard.js';

const MoonCard = props => {
  return (
    <PlanetMoonCard name='Moon ☽' 
                shortName='Moon' 
                parentObjectName='Earth' 
                imageSrc='https://nssdc.gsfc.nasa.gov/planetary/image/moon.jpg' 
                radius='1737.4 km, 0.2727 Earths' 
                mass={(<span>7.342x10<sup>22</sup> kg, 0.012 Earths</span>)} 
                volume={(<span>2.1958x10<sup>10</sup> km<sup>3</sup>, 0.02 Earths</span>)} 
                gravity='0.165G' 
                distance={{
                  aphelion: '405,400 km', 
                  perihelion: '362,600 km', 
                  mean: '384,399 km'
                }} 
                axisTilt='6.687°' 
                dayLength='29.5d' 
                monthLength='29.5d' 
                temperature={{min: '100 K -173 °C', max: '390 K - 117 °C', mean: '250 K - -23 °C'}} 
                link='https://en.wikipedia.org/wiki/Moon' 
                onClose={props.onClose} />
  );
};

export default MoonCard;
