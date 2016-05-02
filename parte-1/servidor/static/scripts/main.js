window.oficina= window.oficina || {};
	(function($){
		oficina.abertura = function(hash){
			var dados = {}, 

			load = function(url) {
				// cria ações no placeholder do input
				$('input')
					.keypress(function(event){
						// anula ação da tecla enter no input
						if (event.keyCode == 13){
							event.preventDefault();
							$('[data-botao="'+$(this).attr('data-input')+'"]').trigger('click');
						}
					})
					.each(function(){
						$(this)
							.attr('onfocus','this.placeholder = ""')
							.attr('onblur','this.placeholder = "'+this.placeholder+'"');
					});

				$('[data-botao="nome"]').click(enviaNome);
				$('[data-botao="senha"]').click(enviaSenha);

				$('[data-minha-senha]').remove()
				$('body').append('<!-- Para descobrir a sua senha digite o comando oficina.minhaSenha() no console do navegador-->')

				$.ajax({
					type: 'POST',
					url: '/entrar',
					data: JSON.stringify(dados),
					dataType:'json',
					success: function(data){
						dados = data
						carrega();
					}
				});
			},

			// Ação ao enviar o nome para o servidor
			enviaNome = function(event){
				event.preventDefault();
				dados.nome = $('[data-input="nome"]').val();
				if (dados.nome != '')
					$.ajax({
						type: 'POST',
						url: '/usuario',
						data: JSON.stringify(dados),
						dataType:'json',
						success: function(data){
							dados.nome = data
							$('[data-botao="nome"]').parent().hide();
							$('[data-botao="senha"]').parent().fadeIn();
						}
					});
			},

			// Ação ao enviar a senha para o servidor
			enviaSenha = function(event){
				event.preventDefault();
				dados.senha = $('[data-input="senha"]').val()
				$.ajax({
					type: 'POST',
					url: '/senha',
					data: JSON.stringify(dados),
					dataType:'json',
					success: function(data){
						if(data.loggado){
							$('[data-botao="senha"]').parent().hide();
							$('[data-aviso]').hide();
							$('h1')
								.hide()
								.html('Parabéns, '+data.nome.toUpperCase()+'. <br>Log efetuado com sucesso.')
								.fadeIn();

							$('body').append('<span>Se quiser saber um pouco mais sobre essa oficina <a href="https://github.com/carloslemos/oficina">clique aqui</span>');

						} else{
							$('[data-input="senha"]')
								.attr('placeholder','senha incorreta')
								.attr('onblur','this.placeholder = "senha incorreta"')
								.val('')

							$('[data-aviso]').fadeIn();
						}
					}
				});
			},

			// Função de entrada na página. Verifica se o usuário já inseriu a senha correta
			carrega = function(){
				if(!dados.loggado && !dados.nome)
					$('[data-botao="nome"]').parent().fadeIn();
				else if(!dados.loggado)
					$('[data-botao="senha"]').parent().fadeIn();
				else {
					$('h1')
						.hide()
						.html('Você já loggou, '+dados.nome.toUpperCase()+'. <br>Em instantes continuaremos.')
						.fadeIn();

					$('body').append('<span>Se quiser saber um pouco mais sobre essa oficina <a href="https://github.com/carloslemos/oficina">clique aqui</span>');
				}
			};

			return { // todos os objetos aqui são públicos
				// implementação do método de inicialização público
				init: function(){
					load();
				}
			};
		};


		// Acão de pedir a senha ao servidor
		oficina.minhaSenha = function(){
			// console.log()
			$.ajax({
				type: 'POST',
				url: '/mpw',
				data: JSON.stringify(true),
				dataType:'json',
				success: function(data){
					console.log('Anote sua senha: \n'+data.senha);
				}
			});

			return 'Servidor fazendo a requisição da sua senha. Aguarde';
		};

		//Let the carnage begins!
		(new oficina.abertura()).init();
	}(jQuery));