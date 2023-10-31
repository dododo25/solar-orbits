import CallistoCard from './CallistoCard.js';
import EuropaCard from './EuropaCard.js';
import GanymedeCard from './GanymedeCard.js';
import IoCard from './IoCard.js';
import PlanetCard from './PlanetCard.js';

const JupiterCard = props => {
  return (
    <PlanetCard name='Jupiter ♃' 
                shortName='Jupiter' 
                imageSrc='https://nssdc.gsfc.nasa.gov/planetary/image/jupiter.jpg' 
                radius='69,911 km, 10.973 Earths' 
                mass={(<span>1.9x10<sup>27</sup> kg, 317.8 Earths</span>)} 
                volume={(<span>1.43x10<sup>15</sup> km<sup>3</sup>, 1.321 Earths</span>)} 
                gravity='2.53G'
                distance={{
                  aphelion: '5.457 AU - 816 million km', 
                  perihelion: '4.951 AU - 741 million km', 
                  mean: '5.2038 AU - 778 million km'
                }} 
                axisTilt='3.13°' 
                dayLength='9h 55m 30s' 
                yearLength='11.862 Earth years' 
                temperature={'165 K - 438 °C'} 
                moons={(
                  <span>
                    &nbsp;
                    <button className='btn btn-link px-0' onClick={() => props.onClick(<CallistoCard onClose={props.onClose} />)}><h5>Callisto</h5></button>,&nbsp;
                    <button className='btn btn-link px-0' onClick={() => props.onClick(<EuropaCard onClose={props.onClose} />)}><h5>Europa</h5></button>,&nbsp;
                    <button className='btn btn-link px-0' onClick={() => props.onClick(<GanymedeCard onClose={props.onClose} />)}><h5>Ganymede</h5></button>,&nbsp;
                    <button className='btn btn-link px-0' onClick={() => props.onClick(<IoCard onClose={props.onClose} />)}><h5>Io</h5></button>,
                    and other 91 moons
                  </span>
                )} 
                link='https://en.wikipedia.org/wiki/Jupiter' 
                onClose={props.onClose} />
  );
};

export default JupiterCard;
