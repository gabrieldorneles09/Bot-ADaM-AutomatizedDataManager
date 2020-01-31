select cast(dataabertura as text) data_hora_abertura,
protocoloum numero_manifestacao,
tipo,
subtipo,
categoria,
areanegocio,
status,
motivo,
codigoidentificacao,
nomerazaosocial,
case 
when slaestourado = 0 then 'Dentro do Prazo'
when slaestourado = 1 then 'Fora do Prazo'
end as sla,
cast(datafechamento as text),
criadopor,
proprietariomanifestacao
from tb_st_motivo_salesforce 
where dataabertura >= cast(date(now()) - 1 as timestamp) and dataabertura <= cast(CONCAT(date(now()) - 1,' 23:59:59') as timestamp)
and tiporegistromanifestacao like '%Direto%'
and areanegocio like 'Saúde%'
and 
(
	categoria like '%Solicitação%'
	or categoria like '%Informação%'
	or categoria like '%Reclamação%'
)
and status not in ('Cancelado')
and email like '%@rededor.com.br'
and lower(subject) not like '%teste%';