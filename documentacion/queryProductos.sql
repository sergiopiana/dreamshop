SELECT 
P.IdProducto as id ,P.Nombre as nombre, P.Observaciones as descripcion, P.FotoPath as imagen, R.Nombre as rubro, S.Nombre as subrubro, cotizacion , ROUND(PR.precio, 0) as precioDolar, round(PR.Precio * cotizacion,0) as precio,  P.BajaStock as stock
FROM
	productos P
LEFT JOIN rubros R  On P.Rubro = R.IdRubro  
LEFT JOIN rubros S  On P.SubRubro = S.IdRubro  
LEFT JOIN precios_venta PR On PR.IdProducto = P.IdProducto 
LEFT JOIN (SELECT * FROM alppavne_sistema.cotizacionmoneda order by ID desc LIMIT 1) as cotizacion On PR.Moneda
where PR.IdLista = 3 and P.Rubro <> 143 and P.activo = 'A' and P.BajaStock = 'S'
order by imagen desc

