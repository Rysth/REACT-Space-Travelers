import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../../index.css';
import { getData } from '../../redux/rockets/rocketSlice';
import Rocket from './Rocket';

// added rockets container component
const RocketContainer = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-10">
        {rockets.map((rkt) => (
          <Rocket
            photo={rkt.image}
            description={rkt.description}
            name={rkt.name}
            id={rkt.id}
            key={rkt.id}
            isReserved={rkt.isReserved}
          />
        ))}
      </div>
    </div>
  );
};
export default RocketContainer;
