import '../../index.css';
import { useSelector } from 'react-redux';

// added profile rockets component
function ProfRockets() {
  const { rockets } = useSelector((store) => store.rockets);
  const bookRocket = rockets.filter((rocket) => rocket.isReserved);
  if (bookRocket.length === 0) {
    return <div className="border border-gray-600 px-4 py-5 font-thin text-base">You have not reserved any rocket yet.</div>;
  }
  return (
    <ul className="list-group">
      {bookRocket.map((rocket) => (
        <li key={rocket.id} className="showRocket border border-gray-600 px-4 py-5 font-thin text-base">
          {rocket.name}
        </li>
      ))}
    </ul>
  );
}

export default ProfRockets;
