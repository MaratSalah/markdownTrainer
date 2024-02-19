import { useDispatch, useSelector } from 'react-redux';
import { changeHelperVision } from '../slices/helperSlice';

const HelpButton = () => {
  const dispatch = useDispatch();
  const helperState = useSelector((state) => state.helper.value);

  const onClickButton = () => {
    if (helperState === false) {
      dispatch(changeHelperVision(true));
      return;
    }
    dispatch(changeHelperVision(false));
    return;
  };

  return <button onClick={onClickButton}>{'?'}</button>;
};

export default HelpButton;
