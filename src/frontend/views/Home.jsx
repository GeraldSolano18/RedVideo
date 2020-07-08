/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/app.scss";

const Home = ({ myList, trends, originals, movieListByName }) => {

  console.log('movies list by name del estado ', movieListByName);
  return (
    <>
      <Search />
      {movieListByName.length === 0 ?
        null : (
          <Categories titulo="Resultado de la busqueda... ">
            <Carousel>
              {movieListByName.map((item) => (
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          </Categories>
        )}
      {myList.length > 0 && (
        <Categories titulo="Mi lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories titulo="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories titulo="Originales">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    movieListByName: state.movieListByName,
  };
};

export default connect(mapStateToProps, null)(Home);
