import { Link } from "react-router";


export default function Nav() {
    return (


        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:flex-row">
                <button className="shadow-lg">
                    <Link to="/" className="block">
                        📊
                    </Link>
                </button>
                <button className="shadow-lg">
                    <Link to="/about" className="block">
                        ℹ️
                    </Link>
                </button>
        </div>



    )
}