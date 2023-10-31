import PlanetMoonCard from './PlanetMoonCard.js';

const TritonCard = props => {
  return (
    <PlanetMoonCard name='Triton' 
                shortName='Triton' 
                parentObjectName='Neptune' 
                imageSrc='https://www.masslive.com/resizer/Nx_rt5BeT1StvOBAOYJyfddiDz8=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/ZRPIVBNHIRBBFDS3IH5GSTBLCE.jpg' 
                radius='1,353.4 km, 0.21 Earths' 
                mass={(<span>2.14x10<sup>22</sup> kg, 0.003 Earths</span>)} 
                volume={(<span>1.04x10<sup>10</sup> km<sup>3</sup>, 0.01 Earths</span>)} 
                gravity='0.08G'
                distance='354,759 km' 
                axisTilt='129.61°' 
                dayLength='5d 21h 2m 53s, clockwise' 
                monthLength='5.877 Earth days' 
                temperature={'38 K - -235.2 °C'} 
                link='https://en.wikipedia.org/wiki/Triton_(moon)' 
                onClose={props.onClose} />
  );
};

export default TritonCard;
