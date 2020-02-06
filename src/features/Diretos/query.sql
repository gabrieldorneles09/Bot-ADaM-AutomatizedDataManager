select cast(dataabertura as text) data_hora_abertura,
protocoloum as numero_manifestacao,
codigoidentificacao as codigo_identificacao,
origemmanifestacao as origem_manifestacao,
chave_externa_beneficiario__r_plano__c as plano,
cpfcnpj,
nomerazaosocial as nome_razao_social,
tiporegistromanifestacao as tipo_registro,
tipo,
subtipo, 
categoria, 
areanegocio as area_negocio,
tipo_solicitante,
subject as assunto,
chave_externa_beneficiario__r_codigo_da_empresa__c as cod_empresa,
chave_externa_beneficiario__r_nome_da_empresa__c as nome_empresa,
proprietariomanifestacao as proprietario,
criadopor as criado_por
from tb_st_motivo_salesforce
where 
status not in ('Cancelado') and
(
	categoria like '%Informação%' or 
	categoria like '%Solicitação%' or 
	categoria like '%Reclamação%'
) and
lower(subject) not like '%teste%' and
origemmanifestacao in ('Telefone','Chat','Facebook','Twitter','Instagram','LinkedIn','Youtube','Web','ReclameAqui','MidiaSocialSegurado') and
lower(chave_externa_beneficiario__r_plano__c) like '%direto%' and
dataabertura >= cast(date(now()) - 1 as timestamp) and dataabertura <= cast(CONCAT(date(now()) - 1,' 23:59:59') as timestamp);