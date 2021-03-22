import React, {ChangeEvent, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {dataApi, loadingReducer} from './selectors/selectors';
import {getDataThunk, setFilteredData, setIsRegister, setMessage, setValueInputText} from "./redux/dataReducer";
import {Preloader} from "./PreLoader/Preloader";

export const App = () => {
	const {data, valueInputText, filteredData, isRegister, message} = useSelector(dataApi)
	const {status} = useSelector(loadingReducer)
	const dispatch = useDispatch();

	const validate = (value: any) => {
		if (Number(value)) {
			if (!message) {
				dispatch(setMessage("Number"))
			}
		} else {
			if (!message) {
				dispatch(setMessage("String"))
			}
		}
		return value
	}
	const onChangeInputValue = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => dispatch(setValueInputText(event.currentTarget.value)
		), [dispatch])

	const onChangeHandler = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => dispatch(setIsRegister(event.currentTarget.checked)
		), [dispatch])

	const onClickFilterLength = useCallback(
		() => dispatch(setFilteredData(data.filter(el => el.length > +valueInputText))
		), [dispatch, data, valueInputText])

	const onClickSubStringValue = useCallback(() => {
		isRegister
			? dispatch(setFilteredData(data.filter(el => [valueInputText].every(ell => el.includes(ell)))))
			: dispatch(setFilteredData(data.filter(el => [valueInputText.toLowerCase()].every(ell => el.toLowerCase().includes(ell.toLowerCase())))))
	}, [data, isRegister, valueInputText, dispatch])
	console.log('1')
	useEffect(() => {
		dispatch(getDataThunk())
	}, [dispatch])

	if (status === 'loading') {
		return <Preloader/>
	}
	return (
		<div>
			При вводе значений появятся нужные кнопки:
			<br/>
			<input type="text" value={validate(valueInputText)} onChange={onChangeInputValue}/>
			{message === "Number" &&
      <div>
          <button onClick={onClickFilterLength}>фильтр по длине слов</button>
      </div>
			}
			{message === "String" &&
      <div>
          <button onClick={onClickSubStringValue}>фильтр по подстроке</button>
          <span>регистр:</span><input type="checkbox" checked={isRegister} onChange={onChangeHandler}/>
      </div>
			}
			{message ? message : ""}
			<div>Результат: {filteredData.length !== 0 ? filteredData.map((el, index) => <span
				key={index}> {index}.{el}; </span>) : 'Нет совпадений'}
			</div>
		</div>
	);
}
export default App;
