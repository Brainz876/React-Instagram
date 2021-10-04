import BottomNavBar from "../Components/BottomNavBar";
import Navbar from "../Components/Navbar";
import Post from "../Components/Post";
import Stories from "../Components/Stories";

function Home() {
    return (
        <div>
          <Navbar />
          <Stories />
          <Post />
          <BottomNavBar />
        </div>
    );
}

export default Home;