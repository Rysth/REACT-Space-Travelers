import '../../index.css';
import ProfileRockets from './Display_Rocket';
import DisplayMissions from './DisplayMissions';

function ProfileContainer() {
  return (
    <section className="flex px-16 mt-6 gap-40">
      <div className="w-1/2 font-bold text-xl font-serif">
        <h1 className="mb-4">My Missions</h1>
        <DisplayMissions />
      </div>
      <div className="w-1/2 font-bold text-xl font-serif">
        <h1 className="mb-4">My Rockets</h1>
        <ProfileRockets />
      </div>
    </section>
  );
}

export default ProfileContainer;
