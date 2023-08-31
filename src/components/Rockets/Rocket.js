import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../../index.css';
import { reserve, cancelBooking } from '../../redux/rockets/rocketSlice';

// added rocket component
const Rocket = ({
  photo, description, name, id, isReserved,
}) => (
  <section>
    <div className="flex justify-start px-16">
      <div className="w-52">
        <img className="img" src={photo} alt={name} />
      </div>
      <div className="w-3/4 ml-4 text-base">
        <h3 className="font-bold text-lg mt-2">{name}</h3>
        <p>
          {isReserved && <BageReserve />}
          {description}
        </p>
        {isReserved ? <CButton id={id} /> : <RButton id={id} />}
      </div>
    </div>
  </section>
);

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
    <button
      className="bg-blue-600 px-4 py-1 text-white rounded mt-2"
      type="button"
      onClick={() => dispatch(reserve(id))}
    >
      Reserve Rocket
    </button>
  );
}

RButton.propTypes = {
  id: PropTypes.string.isRequired,
};

// added badge component
const BageReserve = () => (
  <>
    <div className="bg-teal-500 px-2 rounded text-sm mr-2 inline-block">
      Reserved
    </div>
  </>
);

// added cancel booking functionality
function CButton({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="bg-white text-black  ring-gray-600 ring-2 rounded px-2 py-1 mt-2 text-base"
      onClick={() => dispatch(cancelBooking(id))}
    >
      Cancel Reservation
    </button>
  );
}

CButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Rocket;
