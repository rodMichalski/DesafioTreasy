angular.module('warriors').constant('tree', [{
    codigo: "Campos Confecções",
    descricao: "Campos Confecções",
    observacao: "",
    opened: false,
    tree: [
        {
            codigo: "Bermudas",
            descricao: "Bermudas",
            observacao: "Diversas Bermudas",
            tree: []
        },
        {
            codigo: "Calças",
            descricao: "Calças",
            observacao: "Diversas Calças",
            tree: [
                {
                    codigo: "Sarja (m)",
                    descricao: "Sarja (m)",
                    observacao: "Calças de Sarja tamanho M",
                    tree: []
                },
                {
                    codigo: "Social",
                    descricao: "Social",
                    observacao: "Calças Sociais",
                    tree: []
                }
            ]
        },
        {
            codigo: "Camisas",
            descricao: "Camisas",
            observacao: "Diversas Camisas",
            tree: [
                {
                    codigo: "Esporte",
                    descricao: "Esporte",
                    observacao: "Camisas de Esportes",
                    tree: []
                },
                {
                    codigo: "Gola Polo",
                    descricao: "Gola Polo",
                    observacao: "Camisas Gola Polo",
                    tree: []
                },
                {
                    codigo: "Grife",
                    descricao: "Grife",
                    observacao: "Camisas de Grife",
                    tree: [
                        {
                            codigo: "Dudalina",
                            descricao: "Marca Dudalina",
                            observacao: "Camisas da Marca Dudalina",
                            tree: []
                        },
                    ]
                },
                {
                    codigo: "Social",
                    descricao: "Social",
                    observacao: "Camisas Sociais",
                    tree: []
                }
            ]
        },
        {
            codigo: "Terno",
            descricao: "Terno",
            observacao: "Ternos Completos",
            tree: []
        }
    ]
}]); 