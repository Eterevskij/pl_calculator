import React, { useState } from 'react';
import { Row, Col, Select, Button } from 'antd';

import CalculatorSlider from './CalculatorSlider';





const PriceCalculator = () => {

    const interestRate = 10.2;

    const Option = Select.Option;

    const [loanAmount, setLoanAmount] = useState(); // сумма кредита
    const [initialFee, setInitialFee] = useState(); // первоначальный взнос
    const [creditTerm, setCreditTerm] = useState(); // срок кредита

    let loanTotal = loanAmount - initialFee;
    let monthlyPayment = loanTotal / creditTerm;
    const taxDeduction = loanAmount / 10;

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
                            <CalculatorSlider handler={setLoanAmount} title='Сумма кредита' type='money' min={1500000} max={60000000} />
                            <CalculatorSlider handler={setInitialFee} loanAmount={loanAmount} initialFee title='Первоначальный взнос' type='money' min={1500000} max={60000000} />
                            <CalculatorSlider handler={setCreditTerm} title='Срок кредита' type='month' min={3} max={180} />
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