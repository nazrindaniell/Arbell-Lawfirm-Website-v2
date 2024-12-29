import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function LearnMoreButton({ to, children }) {
  return (
    <Link
      to={to}
      className="learn-more-btn flex w-fit items-center justify-center gap-3"
    >
      {children} <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
}

export default LearnMoreButton;
