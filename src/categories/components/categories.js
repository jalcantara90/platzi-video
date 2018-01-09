import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import SearchedMedia from '../../playlist/components/searched-media';

function Categories(props) {
  return (
    <div className="Categories">
    <Search handleInputChange={props.handleInputChange} inputValue={props.inputValue}/>
    { !props.inputValue ?
      props.categories.map(categoria => {
        return (
          <Category 
            key={categoria.title} 
            {...categoria}
            handleOpenModal={props.handleOpenModal}
          />
        )
      })
      :
      <SearchedMedia
        handleOpenModal={props.handleOpenModal}
        {...props.searched}
      />
  
    }
    </div>
  )
}

export default Categories;