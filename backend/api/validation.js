module.exports = app => {
    function existsOrError(value, msg) {
        if(!value) throw msg // Se não está setado.
        if(Array.isArray(value) && value.length === 0) throw msg // Não existe
        if(typeof value === 'string' && !value.trim()) throw msg // Se for String e caso ela esteja vazia.
    }
    
    function notExistsOrError(value, msg) { // Se não existir: Ok. Se existir: Error
        try {
            existsOrError(value, msg)
        } catch (msg) {
            return 
        }
        throw msg
    } 
    
    function equalsOrError(valueA, valueB, msg) { 
        if(valueA !== valueB) throw msg // Se o ValorA for diferente do B, lança o Erro
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}