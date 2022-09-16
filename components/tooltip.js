import React, { useMemo } from 'react';

export default (props) => {
  const data = useMemo(
    () => props.api.getDisplayedRowAtIndex(props.rowIndex).data,
    []
  );

  return (
    <div
      className="custom-tooltip"
      style={{
        backgroundColor: '#474747',
        color: 'white',
        padding: '10px',
        fontSize: '18px',
      }}
    >
      <div>
        <span>{data.reviewHeadline}</span>
      </div>
      <br />
      <div>{data.reviewText}</div>
    </div>
  );
};
