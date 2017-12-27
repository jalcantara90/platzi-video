import React from 'react';
import Category from './category';
import './categories.css';
function Categories(props) {
  return (
    <div className="Categories">
    {
      props.categories.map(categoria => {
        return (
          <Category 
            key={categoria.id} 
            {...categoria}
            handleOpenModal={props.handleOpenModal}
          />
        )
      })
    }
    </div>
  )
}

export default Categories;