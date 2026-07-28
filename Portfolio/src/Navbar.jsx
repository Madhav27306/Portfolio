
import { useState, useEffect  } from "react";

function Navbar(){

    const [isMenu, setMenu]=useState(false);
    const [isNav, setNav]= useState(true);
    

   useEffect(() => {
        let lastScrollY = window.scrollY;

        const controlNav = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 200) {
                setNav(false); 
            } else {
                setNav(true);  
            }    
            lastScrollY = window.scrollY; 
        };

        window.addEventListener('scroll', controlNav);
        
        return () => {
            window.removeEventListener('scroll', controlNav);
        };
    }, []); 

     function handleMenu(){
        setMenu(!isMenu);
    }


    return(
        <header>
            <div className={`navbar ${isNav ? "" : "hidden"}`}>
                <div className="title">Madhav Gupta</div>

  
                <div className="mobile-icons">
                    <button className="menu" onClick={handleMenu}>{isMenu ?  "x": "☰"}</button>
                </div>
                
                <div className={`nav-btns ${isMenu ? "active" : ""}`}>
                    <div>
                        <a className="linkedin" href="https://www.linkedin.com/in/madhavgupta27/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        </div>
                    <div>
                        <a className="github" href="https://github.com/Madhav27306" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                    <div>
                        <a className="resume" href="/SecurityResume.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
            
        </header>
        
        
    ); 

}

export default Navbar;