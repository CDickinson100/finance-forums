import Section from "./sections/sections";
import "./home-page.css"

function HomeUI() {
    return (
        <>
            <div class="menu">
                    <h3>Menu</h3>
                <div class="home">
                    <h3>Home</h3>
                </div>

                <div class="topics">
                    <h3>Topics</h3>
                    <Section />
                </div>

                <div class="news">
                    <h3>News</h3>
                </div>
            </div>

        </>
    )
};

export default HomeUI;