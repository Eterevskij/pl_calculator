import React, { useState } from 'react';
import { Slider } from 'antd';


const getTimeForm = (month, type) => {
    if(type === 'range') {
        if(month < 12) {
            return 'месяцев';
        } else if(month === 12) {
            return 'года';
        } else {
            return 'лет';
        }
    } else if(type === 'chosen') {
        debugger
        if(month === 3) {
            return 'месяца';
        } else if(month <= 9) {
            return 'месяцев';
        } else if(month === 12) {
            return 'год';
        } else if(month > 12 && month < 12 * 5 ) {
            return 'года';
        } else if(month >= 12 * 5 ) {
            return 'лет';
        }
    }

}

const convertToYears = (month) => {
    if(month % 12 === 0) {
        return month / 12;
    } else {
        return month;
    }
}

const CalculatorSlider = (props) => {

    const {title, type, min, max, handler, loanAmount, initialFee} = props;
    let specifiedStep;
    let sliderHandler;

    const [value, setValue] = useState(min);

    if(value === min) {
        handler(min)
    }

    if(loanAmount < value) {
        setValue(loanAmount);
        handler(loanAmount);
    }

    if(type === 'money') {
        specifiedStep = 100000;

        sliderHandler = (value) => {

            debugger
            if(initialFee && value > loanAmount) {
                setValue(loanAmount);
                handler(loanAmount);
            } else {
                setValue(value);
                handler(value);
            }

        }
        
    } else if(type === 'month') {
        specifiedStep = 3;

        sliderHandler = (newValue) => {

            if(value >= 12) {
                setStep(12)
            } else {
                setStep(3)
            }

            debugger
            if(newValue > 12 && newValue % 12 !== 0) {
                setValue(newValue - 3);
                handler(newValue  - 3);
            } else {
                setValue(newValue);
                handler(newValue);
            }

            console.log('Шаг', step);
            console.log('Значение', value);


        }

    }

    const [step, setStep] = useState(specifiedStep);

    return (
        <div className="calculatorSlider__wrapper">

            <p className="calculatorSlider__title">{title}</p>
            {type === 'money' ?
            <p className="calculatorSlider__currentValue">{value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")}₽</p>
            :
            <p className="calculatorSlider__currentValue">{`${convertToYears(value)}
                                                           ${getTimeForm(value, 'chosen')}`}</p>
            }
            <Slider
                min={min}
                max={max}
                step={step}
                onChange={sliderHandler}
                className="calculatorSlider__slider"
                // tipFormatter={null}
                value={value}
            />

            <div className="calculatorSlider__range__wrapper">

                {type === 'money' ? <>
                    <p className="calculatorSlider__range__item">{(min / 1000000).toString().replace(/[.]/g, ",")} млн ₽</p>
                    <p className="calculatorSlider__range__item">{(max / 1000000).toString().replace(/[.]/g, ",")} млн ₽</p>
                </>
                :
                <>
                    <p className="calculatorSlider__range__item">{`От ${convertToYears(min)} ${getTimeForm(min, 'range')}`}</p>
                    <p className="calculatorSlider__range__item">{`До ${convertToYears(max)} ${getTimeForm(max, 'range')}`}</p>
                </>
                }
            </div>

        </div>

    )
}

export default CalculatorSlider; 