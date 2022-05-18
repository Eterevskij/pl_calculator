import React, { useState } from 'react';
import { Row, Col, Select, Button, Slider } from 'antd';


const creditTermOptions = [
    "3 месяца",
    "6 месяца",
    "9 месяца",
    "1 год",
    "2 года",
    "3 года",
    "4 года",
    "5 лет",
    "6 лет",
    "7 лет",
    "8 лет",
    "9 лет",
    "10 лет",
    "11 лет",
    "12 лет",
    "13 лет",
    "14 лет",
    "15 лет",
]


const PriceCalculator = () => {

    const Option = Select.Option;

    const [sliderValue, setSliderValue] = useState({
        loanAmount: 1000000,
        initialFee: 1000000,
        creditTerm: 0
    });

    const interestRate = 10.2;
    const taxDeduction = 1480743;
    const loanTotal = 2480743;
    const monthlyPayment = 80743;

    const handleSlider = (sliderName, value) => {

        if(sliderName === 'loanAmount' && value < sliderValue.initialFee) {
            setSliderValue({ ...sliderValue, ['initialFee']: value,[sliderName]: value  })
        } else if(sliderName === 'initialFee' && value > sliderValue.loanAmount) {
            setSliderValue({ ...sliderValue, ['initialFee']: sliderValue.loanAmount})
        } else {
            setSliderValue({ ...sliderValue, [sliderName]: value })
        }

    }

    return (
        <div className="calculator__wrapper">

            <p className="calculator__title">Рассчитать стоимость</p>
            <p className="calculator__subtitle">Рассчитайте выгодные условия ипотеки для клиента в <span className="calculator__subtitle__bank">Сбербанк</span></p>

            <div className="calculator__content">
                <Row gutter={40}>
                    <Col span={12}>

                        <div className="calculator__content__select__wrapper">

                            <Select className='calculator__content__select' placeholder='Способ подтверждения дохода'>
                                <Option>Самозанятый</Option>
                                <Option>Вариант 2</Option>
                                <Option>Вариант 3</Option>
                            </Select>

                            <Select className='calculator__content__select' placeholder='Программа кредитования'>
                                <Option>Готовое жильё</Option>
                                <Option>Вариант 2</Option>
                                <Option>Вариант 3</Option>
                            </Select>

                            <Select className='calculator__content__select' placeholder='Выберите скидку'>
                                <Option>Скидка от застройщика на 1 год</Option>
                                <Option>Вариант 2</Option>
                                <Option>Вариант 3</Option>
                            </Select>

                        </div>

                        <div className="calculator__content__sliders__wrapper">

                            <div className="calculatorSlider__wrapper">

                                <p className="calculatorSlider__title">Сумма кредита</p>

                                <p className="calculatorSlider__currentValue">{sliderValue.loanAmount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")}₽</p>

                                <Slider
                                    min={1500000}
                                    max={60000000}
                                    step={10000}
                                    onChange={(value) => handleSlider('loanAmount', value)}
                                    className="calculatorSlider__slider"
                                    tipFormatter={null}
                                    value={sliderValue.loanAmount}
                                />

                                <div className="calculatorSlider__range__wrapper">

                                    <p className="calculatorSlider__range__item">1,5 млн ₽</p>
                                    <p className="calculatorSlider__range__item">60 млн ₽</p>

                                </div>

                            </div>
                            <div className="calculatorSlider__wrapper">

                                <p className="calculatorSlider__title">Первоначальный взнос</p>

                                <p className="calculatorSlider__currentValue">{sliderValue.initialFee.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")}₽</p>

                                <Slider
                                    min={1500000}
                                    max={60000000}
                                    step={10000}
                                    onChange={(value) => handleSlider('initialFee', value)}
                                    className="calculatorSlider__slider"
                                    tipFormatter={null}
                                    value={sliderValue.initialFee}
                                />

                                <div className="calculatorSlider__range__wrapper">

                                    <p className="calculatorSlider__range__item">1,5 млн ₽</p>
                                    <p className="calculatorSlider__range__item">60 млн ₽</p>

                                </div>

                            </div>

                            <div className="calculatorSlider__wrapper">

                                <p className="calculatorSlider__title">Срок кредита</p>
                                <p className="calculatorSlider__currentValue">{creditTermOptions[sliderValue.creditTerm]}</p>

                                <Slider
                                    min={0}
                                    max={creditTermOptions.length - 1}
                                    step={1}
                                    onChange={(value) => handleSlider('creditTerm', value)}
                                    className="calculatorSlider__slider"
                                    tipFormatter={null}
                                    value={sliderValue.creditTerm}
                                />

                                <div className="calculatorSlider__range__wrapper">

                                    <p className="calculatorSlider__range__item">От 3 месяцев</p>
                                    <p className="calculatorSlider__range__item">До 15 лет</p>

                                </div>

                            </div>

                        </div>

                    </Col>

                    <Col span={12}>
                        <div className="calculator__calculatedBlock">
                            <Row gutter={[0, 40]}>

                                <Col span={12}>
                                    <div className="calculator__calculatedBlock__item">
                                        <p className="calculator__calculatedBlock__item__name">Процентная ставка</p>
                                        <p className="calculator__calculatedBlock__item__value">{String(interestRate).replace(/[.]/g, ",")} %</p>
                                    </div>
                                </Col>

                                <Col span={12}>
                                    <div className="calculator__calculatedBlock__item">
                                        <p className="calculator__calculatedBlock__item__name">Ежемесячный платеж</p>
                                        <p className="calculator__calculatedBlock__item__value">{Math.round(monthlyPayment).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")} ₽</p>
                                    </div>
                                </Col>

                                <Col span={12}>
                                    <div className="calculator__calculatedBlock__item">
                                        <p className="calculator__calculatedBlock__item__name">Сумма кредита</p>
                                        <p className="calculator__calculatedBlock__item__value">{Math.round(loanTotal).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")} ₽</p>
                                    </div>
                                </Col>

                                <Col span={12}>
                                    <div className="calculator__calculatedBlock__item">
                                        <p className="calculator__calculatedBlock__item__name">Налоговый вычет</p>
                                        <p className="calculator__calculatedBlock__item__value">{taxDeduction.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")} ₽</p>
                                    </div>
                                </Col>

                            </Row>

                            <Button className="calculator__calculatedBlock__button">Рассчитать</Button>

                            <p className="calculator__calculatedBlock__notice">Не является публичной офертой.</p>

                        </div>
                    </Col>

                </Row>
            </div>

        </div>

    )
}

export default PriceCalculator; 