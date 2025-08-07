function anajuro(){
    let capital = parseInt(document. getElementById ('capital').value);

    let índice = parseInt(document. getElementById ('indice').value);

    let tempo = parseInt(document. getElementById ('tempo').value);
    índice=índice/100

    let juros=capital*índice*tempo;
    let montante=capital+juros;
    document.getElementById('montante').textContent= 'montante:' + montante;
    document.getElementById('juros').textContent= 'juros:' + juros;
}