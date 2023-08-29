import PropTypes from 'prop-types';

export default function Rocket({
  photo, description, name,
}) {
  return (
    <section>
      <div>
        <div>
          <img src={photo} alt={name} />
        </div>
        <div className="col-9">
          <h3>{name}</h3>
          <p>{description}</p>
          <button type="button">Reserve</button>
        </div>
      </div>
    </section>
  );
}

Rocket.propTypes = {
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
