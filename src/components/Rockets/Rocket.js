import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../../index.css';
import { reserve } from '../../redux/rockets/rocketSlice';

export default function Rocket({
  photo, description, name, id, isReserved,
}) {
  const reservedBadge = <span className="border bg-teal-400 text-white px-1 rounded-md text-sm">Reserved</span>;
  return (
    <section>
      <div className="flex justify-start px-16">
        <div className="w-52">
          <img className="img" src={photo} alt={name} />
        </div>
        <div className="w-3/4 ml-4 text-base">
          <h3 className="font-bold text-lg mt-2">{name}</h3>
          <p>
            {isReserved && reservedBadge}
            &nbsp;
            {description}
          </p>

          {isReserved || <RButton id={id} />}
        </div>
      </div>
    </section>
  );
}

Rocket.propTypes = {
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};

function RButton({ id }) {
  const dispatch = useDispatch();
  return (
    <button className="bg-blue-600 px-4 py-1 text-white rounded" type="button" onClick={() => dispatch(reserve(id))}>
      Reserve Rocket
    </button>
  );
}

RButton.propTypes = {
  id: PropTypes.string.isRequired,
};
