import cn from 'classnames';
import { useId } from 'react';
import { useSelector } from 'react-redux';

const ProgressBar = () => {
  const ids = useSelector((state) => state.levels.value.ids);
  const levels = useSelector((state) => state.levels.value.entities);

  const win = 'bg-white';
  const lose = 'bg-green-500';

  const preClasses = {
    'mx-auto': true,
    'w-10': true,
    'h-10': true,
    'm-2': true,
    'rounded-full': true,
    [win]: true,
    [lose]: true,
  };

  const classes = ids.map((item) => {
    if (levels[item].ended === 'false') {
      preClasses[win] = true;
      preClasses[lose] = false;
      const result = cn(preClasses);
      return result;
    }

    preClasses[win] = false;
    preClasses[lose] = true;
    const result = cn(preClasses);
    return result;
  });

  return (
    <div className="container mx-auto grid grid-cols-5">
      {classes.map((item, i) => (
        <button key={useId} className={item}>
          <span className="object-center">{i + 1}</span>
        </button>
      ))}
    </div>
  );
};

export default ProgressBar;
