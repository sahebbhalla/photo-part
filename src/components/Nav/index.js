import React from "react";


const Nav = (props) =>{
    const {
        categories=[],
        SetCurrentCategory,
        currentCategory
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
                    <a data-testid="about" href="#about">About me</a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                {categories.map((category)=>(
                    <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} 
                    key={category.name}>
                        <span onClick={()=>SetCurrentCategory(category)}>{category.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
   </header>
    )
}

export default Nav