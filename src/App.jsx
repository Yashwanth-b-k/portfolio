import Profile from "./left/Profile";
import Container from "./right/Container";

export default function App() {
  return (
    <div className="flex w-full h-screen my-20 rounded-2xl">
      <div className="w-72 h-screen fixed ">
        <Profile />
      </div>
      <div className="ml-85 w-full h-screen">
        <Container />
      </div>
    </div>
  );
}
