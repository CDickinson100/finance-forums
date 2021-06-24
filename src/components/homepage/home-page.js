import Section from "./topics/sections";
import "./home-page.css"
import MenuSections from "./menu/menu-sections";
import Topic1Home from "../topic1/topic1-home";
import Topic2Home from "../topic2/topic2";

function HomeUI() {
    return (
        <>
            <div class="home">
                <div class="menu">
                    <MenuSections />
                </div>

                <div class="topics">

                    <div class="sectionList">
                        <div class="sectionName">
                            <h2>Popular Articles</h2>
                        </div>

                        <Topic1Home />
                        <Topic2Home />

                        <div class="sectionName 1">
                            <h2>Popular Forums</h2>
                        </div>

                        <Section />

                    </div>

                </div>

                <div class="news">

                </div>
            </div>

        </>
    )
}

export default HomeUI;
