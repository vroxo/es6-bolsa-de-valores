class ListNegociacoes{

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        return [].concat(this._negociacoes); // Programação defenciva, devolvo uma copia do meu Array e não o original.
    }
}