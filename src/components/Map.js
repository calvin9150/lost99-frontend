import React, { useCallback, useState } from "react";
import { VectorMap } from "react-jvectormap";
import styled from "styled-components";

const RegionName = [
  ["KR-26", "부산"],
  ["KR-27", "대구"],
  ["KR-30", "대전"],
  ["KR-42", "강원"],
  ["KR-29", "광주"],
  ["KR-41", "경기"],
  ["KR-28", "인천"],
  ["KR-49", "제주"],
  ["KR-43", "충북"],
  ["KR-47", "경북"],
  ["KR-45", "전북"],
  ["KR-50", "세종"],
  ["KR-11", "서울"],
  ["KR-44", "충남"],
  ["KR-48", "경북"],
  ["KR-46", "전남"],
  ["KR-31", "울산"],
];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 350px;
  margin: 100px 0 50px;
  z-index: 999999;

  svg {
    height: 350px;
  }

  @media screen and (max-width: 800px) {
    height: 300px;
    flex-direction: column;
    margin: 50px 0 200px;
  }
`;

const MapLayout = styled.div`
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

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

const RegionText = styled.span`
  font-size: 1.5em;
  color: black;
`;

const Map = () => {
  const [regionName, setRegionName] = useState("대한민국");

  const handleClick = (e, countryCode) => {
    setRegionName(codeConverter(countryCode));
  };

  const codeConverter = useCallback((code) => {
    let name = null;
    RegionName.forEach((v) => {
      if (v[0] === code) {
        name = v[1];
      }
    });
    return name;
  }, []);

  return (
    <Container>
      <RegionTextLayout>
        LOST IN <br />
        <RegionText>{regionName}</RegionText>
      </RegionTextLayout>
      <MapLayout>
        <VectorMap
          map={"kr_mill"}
          backgroundColor="transparent" //change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
          onRegionClick={handleClick} //gets the country code
          // containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.5,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //color for the clicked country
            },
            selectedHover: {},
          }}
          regionsSelectable={true}
          regionsSelectableOne={true}
        />
      </MapLayout>
    </Container>
  );
};

export default Map;
