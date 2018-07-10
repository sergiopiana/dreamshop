
SELECT 
P.Nombre as Nombre, P.Observaciones, P.FotoPath as Foto, R.Nombre as rubro, S.Nombre as subrubro, ROUND(PR.precio, 2) as Precio
FROM
	productos P
LEFT JOIN rubros R  On P.Rubro = R.IdRubro  
LEFT JOIN rubros S  On P.SubRubro = S.IdRubro  
LEFT JOIN precios_venta PR On PR.IdProducto = P.IdProducto 
where PR.IdLista = 3 and P.Rubro <> 143 and P.activo = 'A'


    
    