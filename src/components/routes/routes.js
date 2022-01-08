import DLMSReport from "../BsesDlms";
import ShowCountries from "../CountryRecord/showCountries";
import DynamicTable from "../DynamicTableCreation";
import NotFound from "../NotFound";
import RegistrationPage from "../Registration/register";
import RobotDemo from "../RobotDemo";

export const routes = [
    {
        path:'/',
        index:false,
        element:DynamicTable,
        title:'Dynamic Table'
    },
    {
        path:'/dlmsreport',
        index:false,
        element:DLMSReport,
        title:'DLMS Report'
    },
    {
        path:'/robotdemo',
        index:false,
        element:RobotDemo,
        title:'Robot Demo'
    },
    {
        path:'/register',
        index:false,
        element:RegistrationPage,
        title:'Register'
    },
    {
        path:'/countries',
        index:false,
        element:ShowCountries,
        title:'Show Countries'
    },
    {
        path:'*',
        index:false,
        element:NotFound,
        title:'notfound'
    }
]
