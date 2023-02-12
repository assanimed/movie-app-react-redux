import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatDuration } from "../../utils/helpers/formatDuration";

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
  background-color: #546ad0;
  padding: 2px 10px;
  border-radius: 5px;
  left: -15px;
  transform: rotateZ(-15deg);
  padding-left: 20px;
  top: 10%;
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

function MovieItem({ poster, rating, title, genre, duration, id }) {
  const displayedDuration = formatDuration(duration);

  return (
    <Link to={`/title/${id}`} className="inline-block">
      <Movie>
        <div className="h-full">
          <img src={poster} alt="movie poster" style={{ width: "100%" }} />
        </div>
        <Rating>
          <div className="text-[14px] font-light text-[#ebe8e8]">
            <span className="text-[#fff] text-[18px] font-bold">{rating}</span>
            /10
          </div>
        </Rating>
        <Description className="desc">
          <p className="text-sm  mb-2">{title}</p>
          <p className="text-xs">{displayedDuration}</p>
          <p className="text-xs text-indigo-200">{genre}</p>
        </Description>
      </Movie>
    </Link>
  );
}

export default MovieItem;
