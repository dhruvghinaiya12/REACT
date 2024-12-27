import "./UserProfileCard.css";
import Greeting from "./Greeting";
import UserProfileCard from "./UserProfileCard";

function App() {
  return (
    <>
      <div>
        <Greeting />
        <Greeting name="DHRUV" />
        <UserProfileCard
          name="Dhruv Ghinaiya"
          age={21}
          bio=" Tech enthusiast, avid reader, and food lover. Always exploring new ideas and seeking to make an impact with creativity and code. (oh.. i'm just joking)"
          location="Gujarat, India"
          profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0Wl6fGBPSJZdpJ85Zevl3OAhfQ4Pyo5FhQ&s"
          isStyled={true}
        />
      </div>
    </>
  );
}

export default App;
