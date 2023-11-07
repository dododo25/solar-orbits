import './CelestialCard.css';
import CardTemplate from './CelestialCardTemplate';

const PlanetCard = props => {
  let distanceElement = undefined;
  let temperatureElement = undefined;

  if (props.distance.mean) {
    distanceElement = (
      <div>
        <h5><b>Aphelion: </b>{props.distance.aphelion}</h5>
        <h5><b>Perihelion: </b>{props.distance.perihelion}</h5>
        <h5><b>Mean: </b>{props.distance.mean}</h5>
      </div>
    );
  }

  if (props.temperature.mean) {
    temperatureElement = (
      <div>
        <h5><b>Minimum: </b>{props.temperature.min}</h5>
        <h5><b>Maximunm: </b>{props.temperature.max}</h5>
        <h5><b>Mean: </b>{props.temperature.mean}</h5>
      </div>
    );
  }

  return (
    <CardTemplate onClose={props.onClose}>
      <div className='d-flex justify-content-center'>
        <img src={props.imageSrc} width='360' alt={props.shortName} />
      </div>
      <h1 className='d-flex justify-content-center mb-3'>{props.name}</h1>
      <h5><b>Radius: </b>{props.radius}</h5>
      <h5><b>Mass: </b>{props.mass}</h5>
      <h5><b>Volume: </b>{props.volume}</h5>
      <h5><b>Gravity: </b>{props.gravity}</h5>
      <div className='d-flex flex-row'>
        <h5 className='me-1'><b>Distance from {props.parentObjectName}: </b>{props.distance.mean ? undefined : props.distance}</h5>
        {distanceElement}
      </div>
      <h5><b>Axis tilt: </b>{props.axisTilt}</h5>
      <h5><b>Length of day: </b>{props.dayLength}</h5>
      <h5><b>Length of lunar month: </b>{props.monthLength}</h5>
      <div className='d-flex flex-row'>
        <h5 className='me-1'><b>Temperature: </b>{props.temperature.mean ? undefined : props.temperature}</h5>
        {temperatureElement}
      </div>
      <h5><a href={props.link}>Link</a> to the Wikipedia page.</h5>
    </CardTemplate>
  );
};

export default PlanetCard;
