import '../../index.css';
import ProfileRockets from './Display_Rocket';

function ProfileContainer() {
  return (
    <section className="flex px-16 mt-6">
      <div className="w-1/2 font-bold text-xl font-serif">
        <h1>My Mission</h1>
      </div>
      <div className="w-1/2 font-bold text-xl font-serif">
        <h1 className="mb-4">My Mission</h1>
        <ProfileRockets />
      </div>
    </section>
  );
}

export default ProfileContainer;
