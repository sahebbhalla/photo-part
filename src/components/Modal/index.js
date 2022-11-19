import React from "react";

const Modal = ({currentPhoto,setIsModalOpen}) =>{
    const {name,category,description,index}=currentPhoto
    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img alt="current category" src={require(`../../assets/large/${category}/${index}.jpg`)}/>
          <p>
           {description}
          </p>
          <button type="button" onClick={()=>setIsModalOpen(false)}>
            Close this modal
          </button>
        </div>
      </div>
    )
}

export default Modal