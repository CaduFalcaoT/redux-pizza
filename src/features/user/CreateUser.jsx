import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (username === "") return null;

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your fullname..."
        className="flex h-14 w-[562px] items-center rounded-4xl border border-[#AE3700] px-4 text-base text-black outline-0 transition-all duration-300 focus:ring-2 focus:ring-[#AE3700]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 116, 32, 0.25) 0%, rgba(255, 152, 89, 0.25) 100%)",
        }}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
    </form>
  );
}
