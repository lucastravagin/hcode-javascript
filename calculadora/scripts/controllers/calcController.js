//Um conjunto de atributos e métodos    

class CalcController {

    //Método construtor
    constructor() {
        this._displayCalcEl = document.querySelector('#display')
        this._dateEl = document.querySelector('#data')
        this._timeEl = document.querySelector('#hora')
        this._currentDate;
        this.initialize();
        this.locale = 'pt-BR'
    }

    initialize() {
        this.setDisplatDateTime()
        setInterval(() => {
            this.setDisplatDateTime()
        }, 1000)
    }

    initiButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g")
    }

    setDisplatDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this.locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale)
    }

    get displayTime() {
        return this._timeEl.innerHTML
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value
    }

    get displayDate() {
        return this._dateEl.innerHTML
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value
    }

    get currentDate() {
        return new Date()
    }

    set currentDate(valor) {
        this._currentDate
    }
}