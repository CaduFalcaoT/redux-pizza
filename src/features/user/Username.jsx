import { useSelector } from "react-redux";

export default function Username({ className }) {
  const username = useSelector((state) => state.user.name);

  return <p className={className}>{username}</p>;
}
