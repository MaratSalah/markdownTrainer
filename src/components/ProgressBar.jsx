import cn from "classnames";
import { useId } from "react";

const ProgressBar = (props) => {
  const { progress, setProgress } = props;

  const classes = progress.map((item) => {
    if (item === 'false') {
      const progressClass = cn({
        'w-10': true,
        'h-10': true,
        'm-2': true,
        'rounded-full': true,
        'bg-green-500': true,
      });
      return progressClass;
    }

    const progressClass = cn({
      'w-10': true,
      'h-10': true,
      'm-2': true,
      'rounded-full': true,
      'bg-red-500': true,
    });
    return progressClass;
  });

  return (
    <div className="container mx-auto grid grid-cols-5">
      {classes.map((item) => (<div key={useId} className={item}></div>))}
    </div>
  );
};

export default ProgressBar;
