class DataHelper{

    constructor(){
        throw new Error('This class can not be instantiated.');
    }

    static dateToText(date){
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    static textToDate(text){
        if(!/^\d{4}-\d{2}-\d{2}$/.test(text)) 
            throw new Error('Date is non-default: yyyy-MM-dd');
        return new Date(...text.split('-').map((item, indice) => item - indice % 2));
    }
}