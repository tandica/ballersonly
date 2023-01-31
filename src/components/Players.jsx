export default function Players(props) {
  return (
    <div className="trending-city-card card">
      <div className="city-name">{props}</div>
      <div className="city-summary">
        <p>{props}</p>
        <p>Population: {props}</p>
      </div>
      <div>
        {/* <a href={`/cities/${props.short_name}`}>
          <img
            className="trending-city-img"
            alt={props.long_name}
            src={props.image_url}
          />
        </a> */}
      </div>
    </div>
  );
}
