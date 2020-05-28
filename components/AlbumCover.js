import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Logo = styled(Image)`
  width: 150px;
  height: 150px;
`;

const AlbumCover = ({ cover }) => {
  return (
    <Logo
      source={{
        uri: cover[1].url
      }}
    />
  );
};

AlbumCover.propTypes = {
  cover: PropTypes.arrayOf(Object).isRequired
};

export default AlbumCover;
