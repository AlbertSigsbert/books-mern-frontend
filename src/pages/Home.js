import Main from "../components/Home/Main";
import Sidebar from "../components/Home/Sidebar";

function Home(props) {
    return (
        <div className="grid grid-cols-4 gap-4 mt-4">
          <Sidebar/>
          <Main/>
        </div>
    );
}

export default Home;