import React from "react";
import styled from "styled-components";
import poster from "../../../assets/1899_.jpg";

const Movie = styled.div`
  width: 220px;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  &:hover > div:last-child {
    bottom: 0;
  }
`;

const Rating = styled.div`
  position: absolute;
  top: 0;
  color: #fff;
  background: red;
  padding: 2px 10px;
  top: 20%;
`;

const Description = styled.div`
  width: 100%;
  height: 100px;
  background: #000000b3;
  color: #fff;
  position: absolute;
  bottom: -100%;
  padding: 10px;
  transition: all 0.5s cubic-bezier(0.95, 0.01, 0, 1.02);
`;

function MovieItem() {
  return (
    <a href="/" className="inline-block">
      <Movie>
        <div className="h-full">
          <img src={poster} alt="movie poster" style={{ height: "100%" }} />
        </div>
        <Rating>
          <div className="text-[14px] font-light text-[#ebe8e8]">
            <span className="text-[#fff] text-[18px] font-bold">7.2</span> /10
          </div>
        </Rating>
        <Description className="desc">
          <p className="text-[22px] mb-2">1899</p>
          <p className="text-[9px]">
            PG-13 - 2h 49min - Adventure, Drama, Sci-Fi
          </p>
        </Description>
      </Movie>
    </a>
  );
}

export default MovieItem;
