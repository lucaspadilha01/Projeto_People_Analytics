// dFeriados — feriados nacionais brasileiros, fixos e móveis.
// Cole em Power Query: Página Inicial > Transformar dados > Nova Consulta > Consulta em branco
// > Editor Avançado, e substitua todo o conteúdo por este código.
//
// Os móveis derivam da Páscoa, calculada pelo algoritmo de Meeus/Jones/Butcher
// (gregoriano anônimo) — vale para qualquer ano do calendário gregoriano.

let
    AnoInicial = 2015,
    AnoFinal   = 2035,

    // Domingo de Páscoa para um ano
    Pascoa = (ano as number) as date =>
        let
            a = Number.Mod(ano, 19),
            b = Number.IntegerDivide(ano, 100),
            c = Number.Mod(ano, 100),
            d = Number.IntegerDivide(b, 4),
            e = Number.Mod(b, 4),
            f = Number.IntegerDivide(b + 8, 25),
            g = Number.IntegerDivide(b - f + 1, 3),
            h = Number.Mod(19 * a + b - d - g + 15, 30),
            i = Number.IntegerDivide(c, 4),
            k = Number.Mod(c, 4),
            l = Number.Mod(32 + 2 * e + 2 * i - h - k, 7),
            m = Number.IntegerDivide(a + 11 * h + 22 * l, 451),
            s = h + l - 7 * m + 114,
            mes = Number.IntegerDivide(s, 31),
            dia = Number.Mod(s, 31) + 1
        in
            #date(ano, mes, dia),

    FeriadosDoAno = (ano as number) as list =>
        let
            p = Pascoa(ano),
            fixos = {
                [Data = #date(ano, 1, 1),   Feriado = "Confraternização Universal", Tipo = "Fixo"],
                [Data = #date(ano, 4, 21),  Feriado = "Tiradentes",                 Tipo = "Fixo"],
                [Data = #date(ano, 5, 1),   Feriado = "Dia do Trabalho",            Tipo = "Fixo"],
                [Data = #date(ano, 9, 7),   Feriado = "Independência",              Tipo = "Fixo"],
                [Data = #date(ano, 10, 12), Feriado = "Nossa Senhora Aparecida",    Tipo = "Fixo"],
                [Data = #date(ano, 11, 2),  Feriado = "Finados",                    Tipo = "Fixo"],
                [Data = #date(ano, 11, 15), Feriado = "Proclamação da República",   Tipo = "Fixo"],
                [Data = #date(ano, 12, 25), Feriado = "Natal",                      Tipo = "Fixo"]
            },
            // Consciência Negra: nacional a partir de 2024 (Lei 14.759/2023)
            consciencia =
                if ano >= 2024
                then { [Data = #date(ano, 11, 20), Feriado = "Consciência Negra", Tipo = "Fixo"] }
                else {},
            moveis = {
                [Data = Date.AddDays(p, -48), Feriado = "Carnaval (segunda)",  Tipo = "Móvel"],
                [Data = Date.AddDays(p, -47), Feriado = "Carnaval",            Tipo = "Móvel"],
                [Data = Date.AddDays(p, -46), Feriado = "Quarta-feira de Cinzas", Tipo = "Móvel"],
                [Data = Date.AddDays(p, -2),  Feriado = "Sexta-feira Santa",   Tipo = "Móvel"],
                [Data = p,                    Feriado = "Páscoa",              Tipo = "Móvel"],
                [Data = Date.AddDays(p, 60),  Feriado = "Corpus Christi",      Tipo = "Móvel"]
            }
        in
            fixos & consciencia & moveis,

    Anos     = List.Numbers(AnoInicial, AnoFinal - AnoInicial + 1),
    Todos    = List.Combine(List.Transform(Anos, each FeriadosDoAno(_))),
    Tabela   = Table.FromRecords(Todos),
    Tipada   = Table.TransformColumnTypes(Tabela, {{"Data", type date}, {"Feriado", type text}, {"Tipo", type text}}),
    Ordenada = Table.Sort(Tipada, {{"Data", Order.Ascending}})
in
    Ordenada

// Carnaval, Cinzas e Páscoa não são feriados nacionais de direito — são
// ponto facultativo (Cinzas até 14h). Se o RH conta esses dias como úteis,
// remova-os de `moveis` antes de calcular [Dia Útil] no Calendario.
//
// Feriados municipais e estaduais NÃO estão aqui. Se a Home Experience
// opera em uma praça só, acrescente as datas dela à lista `fixos`.
