function mostrarDescricao(cuboId) {
    var descricaoDiv = document.getElementById('descricao');
    descricaoDiv.style.display = 'block';
    
    if (cuboId === 'cubo1') {
        descricaoDiv.innerHTML = '<h2>Descrição do Cubo 1</h2><p>Esta é a descrição do Cubo 1.</p>';
    } else if (cuboId === 'cubo2') {
        descricaoDiv.innerHTML = '<h2>Descrição do Cubo 2</h2><p>Esta é a descrição do Cubo 2.</p>';
    }
}
