import Section from "./topics/sections";
import "./home-page.css"
import MenuSections from "./menu/menu-sections";
import Topic1Home from "../topic1/topic1-home";

function HomeUI() {
    return (
        <>
            <div class="home">
                <div class="menu">
                    <MenuSections />
                </div>

                <div class="topics">
                    <div class="sectionList">
                        <Topic1Home />
                        <Section />
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
