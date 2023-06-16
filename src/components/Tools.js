import React from "react";

function Tools() {
  return (
    
    <div id="tools">
    
        <div className="card-container">
        <div className="card">
            <img src="path/to/image1.jpg" alt="Image 1" className="card-image" />
            <div className="card-content">
            <h2 className="card-title">React</h2>
            <p className="card-description">Description 1</p>
            </div>
        </div>
        <div className="card">
            <img src="path/to/image2.jpg" alt="Image 2" className="card-image" />
            <div className="card-content">
            <h2 className="card-title">Python</h2>
            <p className="card-description">Description 2</p>
            </div>
        </div>
        <div className="card">
            <img src="path/to/image3.jpg" alt="Image 3" className="card-image" />
            <div className="card-content">
            <h2 className="card-title">Html</h2>
            <p className="card-description">Description 3</p>
            </div>
        </div>
        </div>

        <div className="card-container" id= "card-spacing">
        <div className="card">
        <img src="path/to/image1.jpg" alt="Image 1" className="card-image" />
        <div className="card-content">
            <h2 className="card-title">Java Script</h2>
            <p className="card-description">Description 1</p>
        </div>
        </div>
        <div className="card">
        <img src="path/to/image2.jpg" alt="Image 2" className="card-image" />
        <div className="card-content">
            <h2 className="card-title">Wordpress</h2>
            <p className="card-description">Description 2</p>
        </div>
        </div>
        <div className="card">
        <img src="path/to/image3.jpg" alt="Image 3" className="card-image" />
        <div className="card-content">
            <h2 className="card-title">Css</h2>
            <p className="card-description">Description 3</p>
        </div>
        </div>
        </div>
    </div>
   
    
  );
}

export default Tools;
