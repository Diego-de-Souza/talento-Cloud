/*
==========================================================================
			SP de consulta diaria de produtos vendidos
==========================================================================
*/

create or alter procedure sp_consulta_vendas as
begin
	--declaração de variaveis
	declare @quantVendas int,
			@dataAtual DATETIME = GETDATE();

	--selecione a quantidade de vendas e atribui a avariavel
	@quantVendas = select sum() from vendas WHERE dataVenda = @dataAtual;
end