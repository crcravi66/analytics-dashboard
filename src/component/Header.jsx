
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <Link to={'/analytics-dashboard/'} className="chart-link">
            <header className="mainheader">
                <h1> Analytics Dashboard</h1>
            </header>
        </Link>
    )
}

export default Header