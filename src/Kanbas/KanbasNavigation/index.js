import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { faUser, faGauge, faBook, faCalendarDays, faPrint, faClock, faVideo, faArrowRight, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [faUser, faGauge, faBook, faCalendarDays, faPrint, faClock, faVideo, faArrowRight, faCircleQuestion];
  const { pathname } = useLocation();
  return (
    <div className="menu">
      {links.map((link, index) => (
        <div className="list-group-item mt-2">
            <div className="icon-link-container">
                <FontAwesomeIcon icon={icons[index]} style={{color: `${link==="Account" ? "#ffffff" : "#ff0000"}`}} />
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`text-decoration-none ${pathname.includes(link) ? "active text-danger" : "text-white"}`}>
                    {link}
                </Link>
            </div>
        </div>
      ))}
    </div>
  );
}
export default KanbasNavigation;