import React from "react";


const Nav = (props) =>{
    const {
        categories=[],
        SetCurrentCategory,
        currentCategory, 
        contactSelected,
        setContactSelected
    } =props;

    return(
   <header className="flex-row px-1" style={{justifyContent:"space-between"}}>
        <h2 className="flex">
            <a data-testid="link" href="/">
                <span role ="img" aria-label="camera">{" "}📸</span>{" "}Oh snap    
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about"onClick={() => setContactSelected(false)}>About me</a>
                </li>
                <li>
                <span className={`mx-2 ${contactSelected && 'navActive'}`} onClick={() => setContactSelected(true)}>Contact</span>
                </li>
                {categories.map((category)=>(
                    <li   className={`mx-1 ${
                        currentCategory.name === category.name && !contactSelected && `navActive`
                        }`}
                    key={category.name}>
                        <span onClick={()=>{SetCurrentCategory(category);setContactSelected(false);}}>{category.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
   </header>
    )
}

export default Nav