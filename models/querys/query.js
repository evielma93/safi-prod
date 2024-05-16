
class Query{

    getInvoices(){
        return `select 
        GenEmpresa.Empresa, 
        fac_comprobante.Ruc,
        ClaveAcceso,
        (CASE TipoDocumento WHEN 1 THEN 'FACTURA' WHEN 4 THEN 'NOTA DE CRÉDITO' WHEN 6 THEN 'GUÍA DE REMISIÓN' WHEN 7 THEN 'COMPROBANTE DE RETENCIÓN' WHEN 3 THEN 'LIQUIDACION COMPRA' END) as 'TipoDocumento',
        SUBSTRING(ClaveAcceso,25,15) as Num_Doc,
        NumeroAutorizacion,
        FechaAutorizacion,
        MensajeFirmador,
        EstadoFirmador,
        MensajeProceso,
        EstadoComprobanteId,
        FORMAT(FechaCreacion, 'yyyy-MM-dd') AS FechaCreacion,
        FechaActualizacion,
        (CASE EstadoEmail WHEN 0 THEN 'PENDIENTE' WHEN 1 THEN 'ENVIADO' WHEN 2 THEN 'ERROR' END) as 'Estado_Envío_Email',
        FechaNotificacion as 'Fecha_Envío_Email',
        documentoid
        from 
        SafiBDDParametros..Fac_Comprobante inner join
            SafiBDDParametros..GenEmpresa on SafiBDDParametros..Fac_Comprobante.Ruc=SafiBDDParametros..GenEmpresa.Ruc
        where TipoDocumento = 1 and ClaveAcceso like '%001024%'
        order by Empresa`;
    }

    obtainAuthorizedInvoices(){
        return `select 
        GenEmpresa.Empresa, 
        Fac_Comprobante_Historial.Ruc,
        ClaveAcceso,
        (CASE TipoDocumento WHEN 1 THEN 'FACTURA' WHEN 4 THEN 'NOTA DE CRÉDITO' WHEN 6 THEN 'GUÍA DE REMISIÓN' WHEN 7 THEN 'COMPROBANTE DE RETENCIÓN' WHEN 3 THEN 'LIQUIDACION COMPRA' END) as 'TipoDocumento',
        SUBSTRING(ClaveAcceso,25,15) as Num_Doc,
        NumeroAutorizacion,
        FechaAutorizacion,
        MensajeFirmador,
        EstadoFirmador,
        MensajeProceso,
        EstadoComprobanteId,
        FORMAT(FechaCreacion, 'yyyy-MM-dd') AS FechaCreacion,
        FechaActualizacion,
        (CASE EstadoEmail WHEN 0 THEN 'PENDIENTE' WHEN 1 THEN 'ENVIADO' WHEN 2 THEN 'ERROR' END) as 'Estado_Envío_Email',
        FechaNotificacion as 'Fecha_Envío_Email',
        documentoid
        from 
        SafiBDDParametros..Fac_Comprobante_Historial inner join
            SafiBDDParametros..GenEmpresa on SafiBDDParametros..Fac_Comprobante_Historial.Ruc=SafiBDDParametros..GenEmpresa.Ruc
        where TipoDocumento = 1 and ClaveAcceso like '%001024%'
        order by Empresa`;
    }

    getInvoiceId(id){
        return `select 
        documentoid,
		CXCDIR.Nombre,
		CXCDIR.Direc1,
		CXCDIR.Ruc,
		CXCDIR.Email,
        ClaveAcceso,
        (CASE TipoDocumento WHEN 1 THEN 'FACTURA' WHEN 4 THEN 'NOTA DE CRÉDITO' WHEN 6 THEN 'GUÍA DE REMISIÓN' WHEN 7 THEN 'COMPROBANTE DE RETENCIÓN' WHEN 3 THEN 'LIQUIDACION COMPRA' END) as 'TipoDocumento',
        SUBSTRING(ClaveAcceso,25,15) as Num_Doc,
        EstadoFirmador,
        NumeroAutorizacion,
        FechaAutorizacion,
        FORMAT(FechaCreacion, 'yyyy-MM-dd') AS FechaCreacion,
        XmlOriginal
        from SafiBDDParametros..Fac_Comprobante_Historial 
		inner join V1791297954001_SAFI_3..CXCDIR on SafiBDDParametros..Fac_Comprobante_Historial.PersonaId = V1791297954001_SAFI_3..CXCDIR.CodigoID
		where documentoid = '${id}'`
    }

    getClientId(id){
        return `select * from CXCDIR where Clave = '${id}'`;
    }
    
    getInvoicesPerCustomer(id){
        return `select 
		CXCDIR.Nombre,
		CXCDIR.Direc1,
		CXCDIR.Ruc,
		CXCDIR.Email,
        ClaveAcceso,
        (CASE TipoDocumento WHEN 1 THEN 'FACTURA' WHEN 4 THEN 'NOTA DE CRÉDITO' WHEN 6 THEN 'GUÍA DE REMISIÓN' WHEN 7 THEN 'COMPROBANTE DE RETENCIÓN' WHEN 3 THEN 'LIQUIDACION COMPRA' END) as 'TipoDocumento',
        SUBSTRING(ClaveAcceso,25,15) as Num_Doc,
        EstadoFirmador,
        NumeroAutorizacion,
        FechaAutorizacion,
        FORMAT(FechaCreacion, 'yyyy-MM-dd') AS FechaCreacion,
        XmlOriginal
        from SafiBDDParametros..Fac_Comprobante_Historial 
		inner join V1791297954001_SAFI_3..CXCDIR on SafiBDDParametros..Fac_Comprobante_Historial.PersonaId = V1791297954001_SAFI_3..CXCDIR.CodigoID
		where V1791297954001_SAFI_3..CXCDIR.Clave = '${id}' `;
    }
    
    getInvoicesPerCustomeeer(id){
        return `select 
		CXCDIR.Nombre,
		CXCDIR.Direc1,
		CXCDIR.Ruc,
		CXCDIR.Email,
        ClaveAcceso,
        (CASE TipoDocumento WHEN 1 THEN 'FACTURA' WHEN 4 THEN 'NOTA DE CRÉDITO' WHEN 6 THEN 'GUÍA DE REMISIÓN' WHEN 7 THEN 'COMPROBANTE DE RETENCIÓN' WHEN 3 THEN 'LIQUIDACION COMPRA' END) as 'TipoDocumento',
        SUBSTRING(ClaveAcceso,25,15) as Num_Doc,
        EstadoFirmador,
        NumeroAutorizacion,
        FechaAutorizacion,
        FORMAT(FechaCreacion, 'yyyy-MM-dd') AS FechaCreacion,
        XmlOriginal,
        documentoid
        from SafiBDDParametros..Fac_Comprobante_Historial 
		inner join V1791297954001_SAFI_3..CXCDIR on SafiBDDParametros..Fac_Comprobante_Historial.PersonaId = V1791297954001_SAFI_3..CXCDIR.CodigoID
		where V1791297954001_SAFI_3..CXCDIR.Clave = '${id}' `;
    }

    getServices(){
        return `SELECT 
        [IMProducto] as Codigo
        ,[IMNombre] as Descripcion
        ,FORMAT(IMFecha, 'yyyy-MM-dd') AS Fecha
        FROM [V1791297954001_SAFI_3].[dbo].[INVMAE] `;
    }

    getServicesByLike(data){
        return `SELECT 
        [IMProducto] as Codigo
        ,[IMNombre] as Descripcion
        ,FORMAT(IMFecha, 'yyyy-MM-dd') AS Fecha
        FROM [V1791297954001_SAFI_3].[dbo].[INVMAE] 
        where IMNombre like '%${data}%' or IMProducto like '%${data}%' `;
    }

    getUges(){
        return `select * from V1791297954001_SAFI_3..CNTCC where Padre = 0 `;
    }

}

module.exports = {
    Query
}