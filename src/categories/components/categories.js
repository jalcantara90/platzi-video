import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Login from '../../widgets/containers/login';
import SearchedMedia from '../../playlist/components/searched-media';
import Media from '../../playlist/components/media';

function Categories(props) {
  return (
    <div className="Categories">
      <div className="CategoriesHeader">
        <Search handleInputChange={props.handleInputChange} inputValue={props.inputValue}/>
        {
          props.search &&
            props.search.map((item) => {
              return <Media {...item.toJS()} key={item.get('id')}/>
            })
        }
        <Login handleClick={props.openLoginModal} userLogged={props.userLogged} closeModalLogin={props.closeModalLogin}/>
      </div>
      { !props.inputValue ?
        props.categories.map((categoria) => {
          return (
            <Category 
              key={categoria.get('id')}
              {...categoria.toJS()}
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