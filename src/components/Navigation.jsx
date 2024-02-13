import logo from '../assets/Images/Nike-Logo.png'

function Navigation ()  {
    return (
        <>
            <nav>
                <div className='logo'>
                    <img width={'100px'} src={logo} alt="" />
                </div>
                <ul>
                    <li href='#'>Menu</li>
                    <li href='#'>Location</li>
                    <li href='#'>About</li>
                    <li href='#'>Contact</li>
                </ul>

                <button>Login</button>
            </nav>
        </>
    )
}
export default Navigation