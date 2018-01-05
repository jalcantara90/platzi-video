import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Login from '../../widgets/containers/login';
import SearchedMedia from '../../playlist/components/searched-media';
function Categories(props) {
  return (
    <div className="Categories">
      <div className="CategoriesHeader">
        <Search handleInputChange={props.handleInputChange} inputValue={props.inputValue}/>
        <Login handleClick={props.openLoginModal} userLogged={props.userLogged} closeModalLogin={props.closeModalLogin}/>
      </div>
      { !props.inputValue ?
        props.categories.map(categoria => {
          return (
            <Category 
              key={categoria.id} 
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