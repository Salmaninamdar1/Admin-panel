// import { AddCard } from '@mui/icons-material';
import React from 'react'
import Todo from '../TodoRendering/Todo';

function NewComponent() {
      return (
        <div>
          <style dangerouslySetInnerHTML={{__html: "\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  width: 40%;\n}\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.container {\n  padding: 2px 16px;\n}\n" }} />
          <h2>Product Name</h2>
          <div className="card">
            <img src= {Image} alt="Brand Pic" style={{width: '100%'}} />
            <div className="container">
              <h4><b>{Todo}</b></h4> 
              <p>Architect &amp; Engineer</p> 
            </div>
          </div>
        </div>
      );
    
      };
export default NewComponent;