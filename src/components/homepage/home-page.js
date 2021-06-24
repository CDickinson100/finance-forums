import Section from "./topics/sections";
import "./home-page.css"
import MenuSections from "./menu/menu-sections";

function HomeUI() {
    return (
        <>
            <div class="home">
                <div class="menu">
                    <MenuSections />
                </div>

                <div class="topics">
                    <Section />

                </div>

                <div class="news">

                </div>
            </div>

        </>
    )
}

export default HomeUI;