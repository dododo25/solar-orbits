import PlanetCard from './PlanetCard.js';

const VenusCard = props => {
  return (
    <PlanetCard name='Venus ♀' 
                shortName='Venus' 
                imageSrc='https://nssdc.gsfc.nasa.gov/planetary/image/venus.jpg' 
                radius='6,051.8 km, 0.95 Earths' 
                mass={(<span>4.8675x10<sup>24</sup> kg, 0.815 Earths</span>)} 
                volume={(<span>9.2843x10<sup>11</sup> km<sup>3</sup>, 0.857 Earths</span>)} 
                gravity='0.904G'
                distance={{
                  aphelion: '0.728 AU - 108.94 million km', 
                  perihelion: '0.718 AU - 107.48 million km', 
                  mean: '0.723 AU - 108.21 million km'
                }} 
                axisTilt='177.36°' 
                dayLength='117 Earth days (10 million h)' 
                yearLength='224.7 Earth days' 
                temperature={'737 K - 464 °C'} 
                link='https://en.wikipedia.org/wiki/Venus' 
                onClose={props.onClose} />
  );
};

export default VenusCard;
