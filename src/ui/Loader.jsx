import { Hatch } from "ldrs/react";
import "ldrs/react/Hatch.css";
export default function Loader() {
  return (
    <div className="fixed w-full h-screen flex justify-center items-center bg-[rgba(216,196,186,0.62)]">
      <Hatch size="64" stroke="10" speed="3.5" color="#7C2700" />
    </div>
  );
}
