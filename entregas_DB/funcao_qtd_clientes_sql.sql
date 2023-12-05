/*
==========================================================================
			SP de consulta diaria de cadastro de clientes
==========================================================================
*/

CREATE FUNCTION somaClientesDia ()         
    RETURNS  int 
    as
    BEGIN
		--declaração de variaveis
		DECLARE @quantidadeClientes int,
				@dataAtual DATETIME = getDate(); 
		--contagem de clientes no dia
      @quantidadeClientes =(select count(clientes) as Quantidade_Clientes 
							from vendas where dataCadastro = @dataAtual);  
  
    RETURN @quantidadeClientes; 
  END 