import PropTypes from 'prop-types';
import '../../index.css';

export default function Rocket({
  photo, description, name,
}) {
  return (
    <section>
      <div className="flex justify-start px-16">
        <div className="w-52">
          <img className="img" src={photo} alt={name} />
        </div>
        <div className="w-3/4 ml-4 text-base">
          <h3 className="font-bold text-lg mt-2">{name}</h3>
          <p>{description}</p>
          <button className="bg-blue-600 rounded-sm text-white px-6 py-1 mt-2" type="button">Reserve Rocket</button>
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
