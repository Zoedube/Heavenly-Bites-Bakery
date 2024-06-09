import { Link } from "react-router-dom"; // Import Link for routing

const BackButton = () => {
    return (
        <Link to="/"> {/* Replace "/" with the path to your previous page */}
            <button className="bg-[#C3C6D5]  text-black font-bold py-2 px-4 rounded">
                Back
            </button>
        </Link>
    );
};

export default BackButton;


