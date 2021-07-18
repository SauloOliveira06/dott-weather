import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetRegion } from "../actions/regionActions";
import _ from "lodash";

const Region = (props) => {
  const regionName = props.match.params.region;
  const dispatch = useDispatch();
  const regionState = useSelector(state => state.Region);

  useEffect(() => {
    dispatch(GetRegion(regionName))
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(regionState.data[regionName])) {
      const regionData = regionState.data[regionName];
      return (
        <div className={"region-wrapper"}>

          <div className="item">
            {regionData.area.map(el => {
              return <p>{el.idAreaAviso} {el.base_idAreaAviso}</p>
            })}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {regionData.global.map(el => {
              return <p>{el.globalIdLocal}</p>
            })}
          </div>
        </div>
      )
    }

    if (regionState.loading) {
      return <p>Carregando...</p>
    }

    if (regionState.errorMsg !== "") {
      return <p>{regionState.errorMsg}</p>
    }

    return <p>erro na requisicao</p>
  }

  return (
    <div className={"region"}>
      <h1>{regionName}</h1>
      {ShowData()}
    </div>
  )
};

export default Region;