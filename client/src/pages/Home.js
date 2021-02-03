import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <div class='pt-3 text-center font-details pb-3'>
            <h2>
                <Link to="/calendar">
                    <Button>Calendar 2020-2021</Button>
                </Link>
            </h2>
        </div>
    );
}

export default Home;

