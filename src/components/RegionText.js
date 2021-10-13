import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const RegionTextLayout = styled.div`
  text-align: right;
  width: 50%;
  font-size: 4em;
  padding-top: 1em;
  color: gray;

  @media screen and (max-width: 800px) {
    text-align: center;
    width: 100%;
    font-size: 2em;
    padding-top: 0;
  }
`;

const Text = styled.span`
  font-size: 1.5em;
  color: black;
`;

const RegionText = (props) => {
  const [regionName, setRegionName] = useState("전국");

  const mapSelected = useSelector((state) => state.posts.mapSelected);

  useEffect(() => {
    setRegionName(mapSelected);
  }, [mapSelected]);

  return (
    <>
      <RegionTextLayout>
        LOST IN <br />
        <Text>{regionName}</Text>
      </RegionTextLayout>
    </>
  );
};

export default RegionText;
