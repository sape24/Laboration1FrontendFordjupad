import banner from '../assets/thorsten1970-banner-4833105_1920.jpg'
import '../components/Header.css'

function Header ({ title }: {title: string}) {
    return (
        <header>
            <h1>{title}</h1>
            <img className='banner' src={banner} alt= "Öppen bok"/>
        </header>
    );
}

export default Header;