export function obtenerEdad(birthYear) {

    if (typeof birthYear != "string" && birthYear && Number(birthYear.getTime())) {
        birthYear = new Date(birthYear, "yyyy-MM-dd");
    }

    let values = birthYear.split("-");
    let dia = values[2];
    let mes = values[1];
    let ano = values[0];

    const mesesArray = [
        {numberMes: '1', stringMes: 'Enero'},
        {numberMes: '2', stringMes: 'Febrero'},
        {numberMes: '3', stringMes: 'Marzo'},
        {numberMes: '4', stringMes: 'Abril'},
        {numberMes: '5', stringMes: 'Mayo'},
        {numberMes: '6', stringMes: 'Junio'},
        {numberMes: '7', stringMes: 'Julio'},
        {numberMes: '8', stringMes: 'Agosto'},
        {numberMes: '9', stringMes: 'Septiembre'},
        {numberMes: '10', stringMes: 'Octubre'},
        {numberMes: '11', stringMes: 'Noviembre'},
        {numberMes: '12', stringMes: 'Diciembre'}
    ];

    const mesString = mesesArray.filter(mesArray => {
        return mesArray.numberMes === mes;
    });

    let hoy = new Date().getFullYear();
    let edad = hoy - ano;

    return([{dia, mes, ano},
        {mesString},
        hoy, 
        edad
    ]);
}