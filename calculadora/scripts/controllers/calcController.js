//Um conjunto de atributos e métodos    

class CalcController {

    //Método construtor
    constructor() {
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize() {

      let displayCalcEl = document.querySelector('#display')
      let dataEl = document.querySelector('#data')
      let timeEl = document.querySelector('#hora')

      displayCalcEl.innerHTML = "4567"
      dataEl.innerHTML = '22/01/2020'
      timeEl.innerHTML = '08:32'
    }

    get displayCalc() {
        return this._displayCalc
    }

    set displayCalc(value) {
        this._displayCalc = value
    }

    get currentDate() {
        return this._currentDate
    }

    set currentDate(valor) {
        this._currentDate
    } 


}