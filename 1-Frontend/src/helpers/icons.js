import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faWandMagicSparkles, faTrash, faPenToSquare, faCircleInfo, faSpinner, faCircleUser, faRightFromBracket, faDice, faMap, faIdCard, faPeopleGroup, faFlask, faScroll, faBook, faEarthEurope, faBoxOpen, faFilter } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    library.add(faHouse, faMagnifyingGlass, faWandMagicSparkles, faTrash, faPenToSquare, faCircleInfo, faSpinner, faCircleUser, faRightFromBracket, faDice, faMap, faIdCard, faPeopleGroup, faFlask, faScroll, faBook, faEarthEurope, faBoxOpen, faFilter);
}

export default Icons;