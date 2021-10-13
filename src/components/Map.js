import React, { useCallback, useEffect, useMemo, useState } from "react";
import { VectorMap } from "react-jvectormap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import { actionCreators as postsActions } from "../redux/modules/posts";
import RegionText from "./RegionText";

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
    flex-direction: column-reverse;
    margin: 300px 0 50px;
  }
`;

const MapLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 800px) {
    margin-top: 1em;
    width: 100%;
  }

  button {
    width: 30%;
    top: -1em;
    right: 1em;

    @media screen and (max-width: 800px) {
      right: 0;
      top: 0;
      width: 50%;
    }
  }
`;

const Map = () => {
  const dispatch = useDispatch();

  const [selectAll, setSelectAll] = useState(true);

  const codeConverter = useCallback((code) => {
    let name = null;
    RegionName.forEach((v) => {
      if (v[0] === code) {
        name = v[1];
      }
    });
    return name;
  }, []);

  const handleClick = useCallback(
    (e, countryCode) => {
      dispatch(postsActions.updateMapSelected(codeConverter(countryCode)));
    },
    [dispatch, codeConverter]
  );

  const onClickAllBtn = useCallback(() => {
    setSelectAll(!selectAll);
    dispatch(postsActions.updateMapSelected("전국"));
  }, [dispatch, selectAll]);

  return useMemo(
    () => (
      <Container>
        <RegionText />
        <MapLayout>
          <Button variant="contained" onClick={onClickAllBtn}>
            전국
          </Button>
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
    ),
    [handleClick, onClickAllBtn]
  );
};

export default Map;
