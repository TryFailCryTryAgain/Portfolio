import Left_Pannel_Homepage from "../components/homepage/left_panel_homepage";
import Right_Pannel_Homepage from "../components/homepage/right_panel_homepage";


const Homepage = () => {
    return (
        <div className="container">
            <Left_Pannel_Homepage />
            <Right_Pannel_Homepage />
        </div>
    );
};

export default Homepage;