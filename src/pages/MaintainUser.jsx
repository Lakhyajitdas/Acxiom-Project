import { Link } from "react-router-dom";

const MaintainUser = () => {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/"}>
        <button>LogOut</button>
      </Link>
      <div>
        <div>Membership</div>
        <div>
          <div>Add</div>
          <div>Update</div>
        </div>
      </div>

      <div>
        <div>User Management</div>
        <div>
          <div>Add</div>
          <div>Update</div>
        </div>
      </div>
    </div>
  );
};
export default MaintainUser;
