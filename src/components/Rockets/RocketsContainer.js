import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getData } from '../../redux/rockets/rocketSlice';
import Rocket from './Rocket';

export default function RocketContainer() {
  const { rockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <h2>Rockets</h2>
      <div>
        {rockets.map((rkt) => (
          <Rocket
            image={rkt.photo}
            description={rkt.descripte}
            name={rkt.name}
            key={rkt.id}
          />
        ))}
      </div>
    </div>
  );
}
