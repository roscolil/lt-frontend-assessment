import React from 'react';
import './Wrapper.scss';
import ClassicLink from '../ClassicLink/ClassicLink';
import ShowsLink from '../ShowsLink/ShowsLink';
import MusicLink from '../MusicLink/MusicLink';
import data from '../../data/data.json';

// TODO loop through how ever many links are present in the response and display button for each
const Wrapper = () => {
  return (
    <div className="wrapper">
      <ClassicLink text="Classic link" href="https://linktr.ee" />
      <ShowsLink title="Shows link" data={data[0].shows} />
      <MusicLink title="Music link" data={data[0].music} />
    </div>
  )
}
// TODO these could be combined into one single link component with props
export default Wrapper