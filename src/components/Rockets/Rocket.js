import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../../index.css';
import { reserve, cancelBooking } from '../../redux/rockets/rocketSlice';

export default function Rocket({
  photo, description, name, id, isReserved,
}) {
  // added reserved button
  const reservedbtn = <span className="bg-teal-500 px-2 rounded text-sm mr-2">reserved</span>;
  const className = isReserved ? reservedbtn : '';

  // added rocket component
  return (
    <section>
      <div className="flex justify-start px-16">
        <div className="w-52">
          <img className="img" src={photo} alt={name} />
        </div>
        <div className="w-3/4 ml-4 text-base">
          <h3 className="font-bold text-lg mt-2">{name}</h3>
          <p>
            {className}
            { description}
          </p>
          {isReserved ? <CButton id={id} /> : <RButton id={id} /> }
        </div>
      </div>
    </section>
  );
}

// added proptypes
Rocket.propTypes = {
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};

// added reserve rocket functionality
function RButton({ id }) {
  const dispatch = useDispatch();
  return (
    <button className="bg-blue-600 px-4 py-1 text-white rounded mt-2" type="button" onClick={() => dispatch(reserve(id))}>
      Reserve Rocket
    </button>
  );
}

RButton.propTypes = {
  id: PropTypes.string.isRequired,
};

// added cancel booking functionality
function CButton({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="border border-gray-700 text-gray-500 rounded px-4 py-1 mt-2"
      onClick={() => dispatch(cancelBooking(id))}
    >
      Cancel Reservation
    </button>
  );
}

CButton.propTypes = {
  id: PropTypes.string.isRequired,
};
