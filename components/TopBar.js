import { IoNotifications } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className="topbar">
      <div>buttons</div>
      <div className="notification">
        <p>
          <IoNotifications />
        </p>
        <p className="image"></p>
      </div>
    </div>
  );
};

export default TopBar;
