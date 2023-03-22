import Hero from "../../components/Hero";
import Newsletter from "../../components/Newslleter";
import Posts from "../../components/Posts";
import Users from "../../components/Users";

function Home() {
    return (
        <>
            <Hero />
            <Posts />
            <Newsletter />
            <Users />
        </>
    );
}

export default Home;
