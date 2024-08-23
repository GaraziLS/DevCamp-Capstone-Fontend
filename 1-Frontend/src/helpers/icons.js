import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faWandMagicSparkles, faTrash, faPenToSquare, faCircleInfo, faSpinner, faCircleUser, faRightFromBracket, faMap, faIdCard } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    library.add(faHouse, faMagnifyingGlass, faWandMagicSparkles, faIdCard, faTrash, faPenToSquare, faCircleInfo, faSpinner, faCircleUser, faRightFromBracket, faMap);
}
export default Icons;