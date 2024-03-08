import ProfileForm from "../components/ProfileForm";
import ProfileInfo from "../components/ProfileInfo";
import ProfileNav from "../components/ProfileNav";

const Profile = () => {
  return (
    <div className="max-w-[1194px] mx-auto my-[60px]">
      <ProfileNav />
      <div className="flex gap-2">
        <ProfileInfo />
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;
