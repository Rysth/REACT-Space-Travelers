import '../../index.css';
import { useSelector } from 'react-redux';

// profile rockets component
function ProfRockets() {
  const { rocket } = useSelector((store) => store.rockets);
  const bookRocket = rocket.filter((rocket) => rocket.isReserved);
  if (bookRocket.length === 0) {
    return <div className="border border-gray-600 px-4 py-5 font-thin text-base">You have not reserved any rocket yet.</div>;
  }
  return (
    <div>
      {bookRocket.map((rocket) => (
        <div key={rocket.id} className="showRocket border border-gray-600 px-4 py-5 font-thin text-base">
          {rocket.name}
        </div>
      ))}
    </div>
  );
}

export default ProfRockets;
