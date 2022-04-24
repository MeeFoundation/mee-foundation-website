import React from 'react';

export const LandingPage: React.FC = () => (
  <div className="flex flex-col gap-2 items-center">
    <h1 className="text-lg font-extrabold">Test Title Here</h1>
    <button
      type="button"
      onClick={() => {
      }}
      className="btn btn-outline btn-primary mx-auto my-2 w-40"
    >
      Test Button
    </button>
  </div>
);
