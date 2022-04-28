import GoldGymIcon from "../assets/images/gold-gym-icon.jpg";
import Profile from "./Profile";
import Search from "./Search";

export default function Header() {
  return (
    <header>
      <div className="row">
          <div className="col-2">
            <img src={GoldGymIcon} alt="Gold Gym" className="home-icon" />
          </div>
          <div className="col-7">
            <Search />
          </div>
          <div className="col-3">
            <Profile />
          </div>
        </div>
    </header>
  );
}
