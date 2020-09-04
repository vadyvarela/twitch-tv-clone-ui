import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg' 

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamCollumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText
} 
from './styles';

const StreamList: React.FC = () => {
  const StreamLItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamCollumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}> Vady Varela </StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}> Front-end com Next.js, styled-components & Vuejs </StreamDescription>
          <StreamCategory numberOfLines={1}> Science e Category </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portugues</TagText>
          </TagView>
          <TagView>
            <TagText>React Native</TagText>
          </TagView>
        </TagRow>
      </StreamCollumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamLItem />
      <StreamLItem />
      <StreamLItem />
      <StreamLItem />
    </List>
  );
};

export default StreamList;
