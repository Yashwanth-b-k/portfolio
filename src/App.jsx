import Profile from "./left/Profile";
import Container from "./right/Container";

export default function App() {
  return (
    <div className="flex w-full h-screen my-20">
      <Profile />
      <Container />
    </div>
  )
}
