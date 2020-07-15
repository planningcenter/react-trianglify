import React from "react"
import Trianglify from "trianglify";
import { number, string, oneOfType, array, bool, func } from "prop-types"

const RenderTrianglify = ({
  width=500,
  height=300,
  cellSize=50,
  variance=0.75,
  seed=null,
  xColors="random",
  yColors="match",
  colorSpace="lab",
  fill=true,
  strokeWidth=0,
  className="",
  ...rest
}) => {
  const pattern = Trianglify({
    width,
    height,
    cellSize,
    variance,
    seed,
    xColors,
    yColors,
    colorSpace,
    fill,
    strokeWidth
  });

  const svg = pattern.toSVG();
  function renderPattern() { return {__html: `${svg.outerHTML}`}; };

  return (
    <div dangerouslySetInnerHTML={renderPattern()} className={className} {...rest} />
  )
}

RenderTrianglify.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  cellSize: number.isRequired,
  variance: number.isRequired,
  seed: string,
  xColors: oneOfType([string, array]),
  xColors: oneOfType([string, array]),
  colorSpace: string,
  fill: bool.isRequired,
  strokeWidth: number.isRequired,
  className: string,
  style: string,
}

export default RenderTrianglify