import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faWandMagicSparkles, faPen, faTrash, faPenToSquare, faCircleInfo, faSpinner, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    library.add(faHouse, faMagnifyingGlass, faWandMagicSparkles, faPen, faTrash, faPenToSquare, faCircleInfo, faSpinner, faCircleUser);
}
export default Icons;