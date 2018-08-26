function exibirDados() {
	var nomes = ["pikachu", "ditto", "charizard", "lugia", "squirtle"];
	var j = 0;

	for (var i = 0; i < 5; i++) {
		var url = "https://pokeapi.co/api/v2/pokemon/" + nomes[i] + "/";

		$.ajax
			({
				url: url,
				type: "get",
				dataType: "json",
				success: function (dados) {
					console.log(dados.id);
					document.getElementById("divResultado").innerHTML += gerarResultado(dados);

				},
				error: function (erro) {
					console.log(erro);
				}
			});
	};

}
function gerarResultado(dados) {

	if (typeof dados.types[1] != 'undefined')
		var type2 = '<li class="float-sm-right list-group-item"><h4>' + dados.types[0].type.name + ' and ' + dados.types[1].type.name + '</h4></li>';
	else {
		var type2 = '<li class="list-group-item"><h4>' + dados.types[0].type.name + '</h4></li>';
	}
	return '<div class="col-sm-right">' +
		'<ul class="lista list-group">' +
		'<img class="mx-auto pokeImagem" src="imagens/' + dados.name + '.gif"/>' +
		'<li class="list-group-item list-group-item-primary"><h4>' + dados.id + '</h4></li>' +
		'<li class="list-group-item"><h4>' + dados.name + '</h4></li>' +
		type2 +
		'</div>';


};