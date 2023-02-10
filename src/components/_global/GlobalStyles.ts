import { createGlobalStyle } from "styled-components";
import dottedImage from "../_assets/img/dotted-bg.png"

const GlobalStyle = createGlobalStyle`

    :root {

        //variables colors
        --main-color: #ff5e3a;
        --secondary-color: #3f4257;
        --main-background-content: #edf2f6;
        --activityOptions-background: #f6f6f6;
        --main-blue: #38a9ff;
        --main-purple: #7c5ac2;
        --main-pink: #f76697;
        --main-yellow: #FFFF00;
        --ligth-blue: #08ddc1;
        --ligth-green: #8fce46;
        --title-color: #515365;
        --text-color: #888da8;
        --white-background: #FFFFFF;
        --white-text-color: #FFFFFF;
        --search-button-color: #f75d52;
        --facebookBG: #2f5b9c;
        --instagramBG: #f74881;
        --twitterBG: #37bff1;
        --first-skill-color: rgb(255,96,58);
        --second-skill-color: rgb(42,125,161);
        --third-skill-color: rgb(255,162,58);
        --fourth-skill-color: rgb(42,183,99);
        --border-light-white: #e6ecf5;
        --input-search-color: #9a9fbf;
        --input-search-background: #494c62;
        --main-markBanner: blue;
        --group-maskBanner: darkmagenta;
        --modal-background: rgba(0, 0, 0, 0.8);
        --bg-dark-opaciy-5: rgba(0,0,0,.5);
        --bg-light-opacity-2: rgba(255, 255, 255, 0.2);
        --bg-light-opacity-3: rgba(255, 255, 255, 0.3);

        //gradient colors
        --email-gradient-bg: linear-gradient(to left,#888da8,#08ddc1);
        --address-gradient-bg: linear-gradient(to left,#888da8,#38a9ff);
        --website-gradient-bg: linear-gradient(to left,#888da8,#7c5ac2);
        --phone-gradient-bg: linear-gradient(to left,#888da8,#514A9D);

        //variables backgrounds image
        --bg-dotted: url(${dottedImage});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5% !important;
    }

    body {
        display: grid;
        grid-template-columns: 1fr;
        font-family: 'Roboto', sans-serif;
        height: 100vh;
    }

    a {
        text-decoration: none;
        color: var(--title-color);
        transition: all 0.3s;

        :hover {
            color: var(--main-color);
        }
    }

    .user-check-icon {
        font-size: 1.8rem !important;
        font-weight: 600;
        margin-left: 0.4rem;
        background-color: var(--ligth-blue);
        color: var(--white-text-color);
        border-radius: 50%;
        padding: 2px;
    }

    .second-headline-icon {
        font-size: 1.7rem;
    }

    .acess-time-icon {
        font-size: 1.7rem;
    }
`

export default GlobalStyle;