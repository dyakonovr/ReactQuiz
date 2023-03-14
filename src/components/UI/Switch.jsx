import { setExplanationIsNeeded } from '../../store/reducers/ActionCreators';
import { store } from '../../store/store';

function Switch() {
  // Функции
  function handleClick() {
    store.dispatch(setExplanationIsNeeded());
  }
  // Функции END

  return (
    <div className='switch-wrapper'>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" onClick={(e) => handleClick(e)}></span>
      </label>
      Включить пояснения после вопросов
    </div>
  );
};

export default Switch;