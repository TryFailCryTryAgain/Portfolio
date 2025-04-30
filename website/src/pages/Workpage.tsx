import Left_Pannel_Workpage from "../components/workpage/left_panel_workpage";
import Right_Pannel_Workpage from "../components/workpage/right_panel_workpage";


const Workpage = () => {
    return (
        <div className="container">
            <Left_Pannel_Workpage />
            <Right_Pannel_Workpage />
        </div>
    );
};

export default Workpage;