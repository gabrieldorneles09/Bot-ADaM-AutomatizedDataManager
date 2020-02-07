select operacao, cast(data as text) as data, 
sum(oferecidas) as Recebidas, 
sum(atendidas) as Atendidas, 
(sum(oferecidas)-sum(atendidas)) as Abandonadas 
from telefonia 
where data between cast(date(now()) - 1 as timestamp) and cast(CONCAT(date(now()) - 1,' 23:59:59') as timestamp) and 
(
lower(operacao) = 'ouvidoria' or
lower(operacao) = 'institucional saude odonto' or 
lower(operacao) = 'relacionamento prestige'
)
group by data, operacao