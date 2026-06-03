
import { useState, useEffect  } from "react";

function Navbar(){

    const [isMenu, setMenu]=useState(false);
    const [isSearch, setSearch]=useState(false);
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
        setSearch(false);
    }

     function handleSearch(){
        setSearch(!isSearch);
        setMenu(false);
    }

    return(
        <header>
            <div className={`navbar ${isNav ? "" : "hidden"}`}>
                <div className="title">My Portfolio</div>

                <div className={`search-container ${isSearch ? "active" : ""}`}>
                    <input type="text" placeholder="Search..." className="search-bar" />
                </div>
                <div className="mobile-icons">
                    <button className="search-icon" onClick={handleSearch}>🔍</button>
                    <button className="menu" onClick={handleMenu}>{isMenu ?  "x": "☰"}</button>
                </div>
                
                <div className={`nav-btns ${isMenu ? "active" : ""}`}>
                    <button className="about">About Me</button>
                    <button className="blog">Blog</button>
                    <button className="socials">Socials</button>
                </div>
            </div>
            
        </header>
        
        
    ); 

}

export default Navbar;