import React ,{ useState }from 'react'
import logo from './../logo.svg';


function Header() {

    const [menuStatus,setMenuStatus] = useState(0);

    const getMenuOpener = function (){
        if(menuStatus === 1){
            document.getElementById("root").classList.remove("menuOpen");
            setMenuStatus(0);
        }else{
            document.getElementById("root").classList.add("menuOpen");
            setMenuStatus(1);
        }
    }
    return (
        <header className={(menuStatus === 1 ? "menuOpen" : "") + " row mx-0 justify-content-between align-items-center"}>
            <div className="col-auto">
                <div className="logo">
                    <img src={logo} />
                </div>
            </div>
            <div className="col-auto">
                <button onClick={() => getMenuOpener(menuStatus)} className="menuIcon btn">
                    <div className="text">Menu</div>
                    <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="closeLine"></div>
                        <div className="closeLine"></div>
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header