import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const LinWrapper = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  a {
    text-align: center;
    display: block;
    background-color: ${(props) => props.bg || "#946dd9"};
    padding: 8px;
    border-radius: 5px;
    color: ${(props) => props.color || "#fff"};
    &:hover {
      background-color: ${(props) => props.hoverbg || "#7959b3"};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0px 3px #b0b2ff;
    }
  }
`;

function AddButton({ text, color, bg, hoverbg }) {
  return (
    <LinWrapper>
      <Link to="new">{text}</Link>
    </LinWrapper>
  );
}

AddButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AddButton;
