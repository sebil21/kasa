import '../styles/_lodgingInfo.scss';

function LodgingInfo({ title, location }) {
  return (
    <div className="info-container">
      <h2 className="info-title">{title}</h2>
      <p className="info-location">{location}</p>
    </div>
  );
}

export default LodgingInfo;
