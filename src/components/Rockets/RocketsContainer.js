import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../../index.css';
import { getData } from '../../redux/rockets/rocketSlice';
import Rocket from './Rocket';

export default function RocketContainer() {
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
            key={rkt.id}
          />
        ))}
      </div>
    </div>
  );
}
