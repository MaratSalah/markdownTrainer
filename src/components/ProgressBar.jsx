/* eslint-disable react/prop-types */


import cn from "classnames";
import { useId } from "react";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const levels = useSelector((state) => state.levels.value);

  const prevClasses = {
    'mx-auto': true,
    'w-10': true,
    'h-10': true,
    'm-2': true,
    'rounded-full': true,
    'bg-blue-500': true,
    'bg-red-500': true,
  };

  const classes = levels.map((item) => {
    if (item.ended === 'false') {
      prevClasses['bg-red-500'] = true;
      prevClasses['bg-blue-500'] = false;
      const progressClasses = cn(prevClasses);
      return progressClasses;
    }

    prevClasses['bg-red-500'] = false;
    prevClasses['bg-blue-500'] = true;
    const progressClasses = cn(prevClasses);
    return progressClasses;
  });

  return (
    <div className="container mx-auto grid grid-cols-5">
      {classes.map((item) => (<div key={useId} className={item}></div>))}
    </div>
  );
};

export default ProgressBar;
