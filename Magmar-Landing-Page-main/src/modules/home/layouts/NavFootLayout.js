import Navbar from "../features/navbar";

export default function NavFootLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
