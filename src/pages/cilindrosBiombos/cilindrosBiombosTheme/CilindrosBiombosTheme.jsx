import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { getFiltercilindrosBiombos } from '../../../extension/functionCilindrosBiombos'
import { cilindrosBiombosReducer, initialStateCilindrosBiombos } from '../../../reducer/cilindros-biombos.reducer'
import '../cilindrosBiombosTheme.css'

const CilindrosBiombosTheme = () => {

  const { cilindroBiomboId } = useParams()
const [state, dispatch] = useReducer(cilindrosBiombosReducer, initialStateCilindrosBiombos )
const { themeFilterCilindrosBiombos } = state
useEffect(() => {
  getFiltercilindrosBiombos(dispatch,cilindroBiomboId)
},[])

console.log('themeFilterCilindrosBiombos',themeFilterCilindrosBiombos)
  return (
    <div className="cilindros-biombos-detail">
      <div className="cilindros-biombos-detail__container">
        <div className="cilindros-biombos__image-contianer">
          <img
            className="cilindros-biombos__image"
            src={themeFilterCilindrosBiombos.image}
            alt=""
          />
        </div>
        <div className="cilindros-biombos__info-products">
          <div className="cilindros-biombos__info-products__container">
            <div className="cilindros-biombos__marca-container">
            <h3 className="cilindros-biombos__marca">{themeFilterCilindrosBiombos.marca}</h3>
            <span className="cilindros-biombos__id">Id: {cilindroBiomboId}</span>
            </div>
            <h2 className="cilindros-biombos-title">{themeFilterCilindrosBiombos.name}</h2>
            {/* <p className="cilindros-biombos-description">{themeFilterCilindrosBiombos.description}</p> */}
            <div className="cilindros-biombos-list__container">
              <h3 className="cilindros-biombos-list__title">productos que incluyen:</h3>
              <ul className="cilindros-biombos-list">
                {state.themeFilterCilindrosBiombos.products?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
              <div className="cilindros-biombos__price-container">
                <span>antes:</span>
                <span className="cilindros-biombos__precio-anterior">
                  S/ {themeFilterCilindrosBiombos.price}
                </span>
              </div>
              <div className="cilindros-biombos__price-container cilindros-biombos__price-container--negrita">
                <span>precio:</span>
                <span className="">S/ {Number(themeFilterCilindrosBiombos.price) * 0.8}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {CilindrosBiombosTheme}