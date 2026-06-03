
import { useState, useEffect  } from "react";

function Navbar(){

    const [isMenu, setMenu]=useState(false);
    const [isNav, setNav]= useState(true);
    

   useEffect(() => {
        // 1. We create a simple local variable to remember the last position
        let lastScrollY = window.scrollY;

        // 2. We move the controlNav brain INSIDE the effect
        const controlNav = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 200) {
                setNav(false); 
            } else {
                setNav(true);  
            }
            // Update the local variable for the next tick
            lastScrollY = window.scrollY; 
        };

        // 3. Attach the listener
        window.addEventListener('scroll', controlNav);

        // 4. Cleanup
        return () => {
            window.removeEventListener('scroll', controlNav);
        };
    }, []); // <-- EMPTY ARRAY! This means React only creates the listener ONCE when the page loads!

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
                    <button className="blog">Blog</button>
                    <div>
                        <a className="linkedin" href="https://www.linkedin.com/in/madhavgupta27/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        </div>
                    <div>
                        <a className="github" href="https://github.com/Madhav27306" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                    <div>
                        <a className="resume" href="/FMadhavGResume.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
            
        </header>
        
        
    ); 

}

export default Navbar;