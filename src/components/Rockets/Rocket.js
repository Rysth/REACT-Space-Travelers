import PropTypes from 'prop-types';

export default function Rocket({
  photo, descripte, name,
}) {
  return (
    <section>
      <div>
        <div>
          <img src={photo} alt={name} />
        </div>
        <div className="col-9">
          <h3>{name}</h3>
          <p>{descripte}</p>
          <button >Reserve</button>
        </div>
      </div>
    </section>
  );
}

Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
