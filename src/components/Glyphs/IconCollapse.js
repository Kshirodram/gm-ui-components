import React from "react";
import Icon from "../Icon";

export default function Collapse(props) {
  return (
    <Icon {...props} glyphName="Collapse">
      <path
        d="M5.99999997,13.75 C5.58578641,13.75 5.24999997,13.4142136 5.24999997,13 C5.24999997,12.5857864 5.58578641,12.25 5.99999997,12.25 L18,12.25 C18.4142136,12.25 18.75,12.5857864 18.75,13 C18.75,13.4142136 18.4142136,13.75 18,13.75 L5.99999997,13.75 Z M5.99999997,16.75 C5.58578641,16.75 5.24999997,16.4142136 5.24999997,16 C5.24999997,15.5857865 5.58578641,15.25 5.99999997,15.25 L18,15.25 C18.4142136,15.25 18.75,15.5857865 18.75,16 C18.75,16.4142136 18.4142136,16.75 18,16.75 L5.99999997,16.75 Z M12,8.93933982 L14.4696699,6.46966989 C14.7625631,6.17677667 15.2374369,6.17677667 15.5303301,6.46966989 C15.8232233,6.76256311 15.8232233,7.23743685 15.5303301,7.53033007 L12,11.0606602 L8.4696699,7.53033007 C8.17677668,7.23743685 8.17677668,6.76256311 8.4696699,6.46966989 C8.76256312,6.17677667 9.23743686,6.17677667 9.53033008,6.46966989 L12,8.93933982 Z"
         
        fillRule="nonzero"
      />
    </Icon>
  );
}

Collapse.displayName = "Collapse";