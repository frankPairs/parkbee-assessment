import React from 'react';

function Loading() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        background: '0 0',
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      height={50}
      width={50}
      data-testid="loading-spinner"
    >
      <path d="M25.684 82.776a40 40 0 0047.014-64.728 42 40 35.992 01-47.014 64.728" fill="#4d00ff">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51;360 50 51"
        />
      </path>
    </svg>
  );
}

export { Loading };
