import { useSelector } from 'react-redux';
import cn from 'classnames';

const Helper = () => {
  const helperIsShow = useSelector((state) => state.helper.value);

  const currentLevel = useSelector((state) => state.levels.value.currentLevel);
  const rightAnswer = useSelector(
    (state) => state.levels.value.entities[currentLevel].exercise
  );

  const opacity = 'opacity-0';

  const helperClasses = [
    { [opacity]: true },
    'transition',
    'bg-violet-400',
    'rounded-lg',
    'p-2',
    'text-white',
    'duration-300',
    'ease-in',
  ];

  if (helperIsShow === false) {
    helperClasses[0][opacity] = true;
  } else {
    helperClasses[0][opacity] = false;
  }

  return <div className={cn(helperClasses)}>{rightAnswer}</div>;
};

export default Helper;
