import React from "react"
import Icon from "../Icon";

export default function Plus(props) {
  return (
    <Icon {...props} glyphName="Plus">
      <path
        d="M12.75,11.1944444 L12.75,3.74999997 C12.75,3.3357864 12.4142136,2.99999996 12,2.99999996 C11.5857864,2.99999996 11.25,3.3357864 11.25,3.74999997 L11.25,11.1944444 L3.74999997,11.1944444 C3.3357864,11.1944444 2.99999996,11.5302309 2.99999996,11.9444444 C2.99999996,12.358658 3.3357864,12.6944444 3.74999997,12.6944444 L11.25,12.6944444 L11.25,20.25 C11.25,20.6642136 11.5857864,21 12,21 C12.4142136,21 12.75,20.6642136 12.75,20.25 L12.75,12.6944444 L20.25,12.6944444 C20.6642136,12.6944444 21,12.358658 21,11.9444444 C21,11.5302309 20.6642136,11.1944444 20.25,11.1944444 L12.75,11.1944444 Z"
        id="Plus"
         
        fillRule="nonzero"
      />
    </Icon>
  );
}

Plus.displayName = "Plus";