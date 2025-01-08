import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function BackButton({ children }) {
  return (
    <Link
      to="/blog"
      className="flex w-fit items-center justify-center gap-3 py-2 text-base font-medium text-orange lg:text-lg"
    >
      <FontAwesomeIcon icon={faChevronLeft} /> {children}
    </Link>
  );
}

export default BackButton;
