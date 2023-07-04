export interface ClientesModel {
    // DadosPessoais
    massaTipoDePessoa: string;
    massaNome: string;
    massaNomeFantasia: string;
    massaCnpj: string;
    massaCodigoPostal: string;
    massaTipoLogradouro: string;
    massaLogradouro: string;
    massaNumero: string;
    massaComplemento: string;
    massaBairro: string;
    massaSelectPais: string;
    massaSelectEstado: string;
    massaSelectCidade: string;
  
    // DadosTecnicos
    massaCnae: string;
    massaInscricaoEstadual: string;
    massaInscricaoMunicipal: string;
    massaInscricaoSuframa: string;
    massaSelectIndicadorInscricaoEstadual: string;
    massaSelectContaContabil: string;
    massaOptanteDoSimplesNacional: boolean;
    massaPis: string;
    massaCofins: string;
    massaCsll: string;
    massaValorMinimo: string;
    massaReterAbaixoDoValorMinimo: boolean;
    massaSelectTipoDeRetencao: string;
    massaNdiasParaVencimentoDaNFSe: string;
    massaNdiaLimiteParaFaturamento: string;
    massaMoedaDoSeguro: string;
    massaPercentualDoSeguro: string;
    massaCalcularSeguroSobreMLEeFrete: string;
    massaLimiteDeCredito: string;
    massaSelectCbImpostosEstaduais: string;
    massaSelectCbImpostosFederais: string;
    massaSelectCbPagamentoDeDespesas: string;
    massaVencimentoRadar: string;
    massaVencimentoProcuracao: string;
    massaEmailParaRecebimentoDaNFSe: string;
    massaCertificadoDigital: string;
    massaSenhaDoCertificado: string;
    massaConfirmeSenha: string;
    massaSerie: string;
    massaProximoNumeroDeDanfe: string;
  
    massaImportador: boolean;
    massaExportador: boolean;
    massaRestricaoFinanceira: boolean;
    massaOea: boolean;

    //Contatos

    massaNomeDoContato: string;
    massaNomeResumido: string;

    massaExSrSrta: string;
    massaGenero: string;
    massaDataNascimento: string;
    massaTelefone: string;
    massaCelular: string;
    massaEmail: string;
    massaDepartamento: string;
    massaCargo: string;

    massaResponsavelPeloIcms: boolean;
    massaReceberFaturamento: boolean;
    massaReceberMapaDeFollowup: boolean;
    massaReceberNumerario: boolean;
    massaReceberEmailDeMarketing: boolean;
    massaReceberMantraSicarga: boolean;

    massaDespachante : string;
  }
  


  /*

,
  "caseImportador": {
    "massaTipoDePessoa": "PessoaJurídica",
    "massaNome": "João",
    "massaNomeFantasia": "Empresa João",
    "massaCnpj": "90566050000123",
    "massaCodigoPostal": "12345",
    "massaLogradouro": "Rua A",
    "massaNumero": "10",
    "massaComplemento": "",
    "massaBairro": "Centro",
    "massaSelectPais": "BRASIL-105",
    "massaSelectEstado": "SãoPaulo-SP",
    "massaSelectCidade": "SãoPaulo-3550308",
    "massaCnae": "12345",
    "massaInscricaoEstadual": "123456",
    "massaInscricaoMunicipal": "654321",
    "massaSelectIndicadorInscricaoEstadual": "Opção 1",
    "massaSelectContaContabil": "Opção 2",
    "massaOptanteDoSimplesNacional": true,
    "massaPis": "1",
    "massaCofins": "5",
    "massaCsll": "9",
    "massaValorMinimo": "1",
    "massaReterAbaixoDoValorMinimo": true,
    "massaSelectTipoDeRetencao": "Porprocesso",
    "massaNdiasParaVencimentoDaNFSe": "31/10/2023",
    "massaNdiaLimiteParaFaturamento": "31/10/2023",
    "massaMoedaDoSeguro": "220-DOLARDOSEUA",
    "massaPercentualDoSeguro": "2",
    "massaCalcularSeguroSobreMLEeFrete": true,
    "massaLimiteDeCredito": "5000",
    "massaSelectCbImpostosEstaduais": "Opção 4",
    "massaSelectCbImpostosFederais": "Opção 5",
    "massaSelectCbPagamentoDeDespesas": "Opção 6",
    "massaVencimentoRadar": "2023-12-31",
    "massaVencimentoProcuracao": "2024-01-01",
    "massaEmailParaRecebimentoDaNFSe": "joao@example.com",
    "massaCertificadoDigital": "caminho/do/certificado.pfx",
    "massaSenhaDoCertificado": "senha",
    "massaConfirmeSenha": "senha",
    "massaSerie": "A",
    "massaProximoNumeroDeDanfe": "1000",
    "massaImportador": true,
    "massaExportador": false,
    "massaRestricaoFinanceira": false,
    "massaOea": true
  },
  "caseExportador": {
    "massaTipoDePessoa": "PessoaJurídica",
    "massaNome": "João",
    "massaNomeFantasia": "Empresa João",
    "massaCnpj": "123456789",
    "massaCodigoPostal": "12345",
    "massaLogradouro": "Rua A",
    "massaNumero": "10",
    "massaComplemento": "",
    "massaBairro": "Centro",
    "massaSelectPais": "Brasil",
    "massaSelectEstado": "São Paulo",
    "massaSelectCidade": "São Paulo",
    "massaCnae": "0113000 - Cultivo de cana-de-açúcar",
    "massaInscricaoEstadual": "123456",
    "massaInscricaoMunicipal": "654321",
    "massaSelectIndicadorInscricaoEstadual": "ContribuinteIsento",
    "massaSelectContaContabil": "1-CIRCULANTE",
    "massaOptanteDoSimplesNacional": true,
    "massaPis": "12345",
    "massaCofins": "54321",
    "massaCsll": "98765",
    "massaValorMinimo": "1000",
    "massaReterAbaixoDoValorMinimo": true,
    "massaSelectTipoDeRetencao": "Porprocesso",
    "massaNdiasParaVencimentoDaNFSe": "30",
    "massaNdiaLimiteParaFaturamento": "15",
    "massaMoedaDoSeguro": "220-DOLARDOSEUA",
    "massaPercentualDoSeguro": "2",
    "massaCalcularSeguroSobreMLEeFrete": true,
    "massaLimiteDeCredito": "5000",
    "massaSelectCbImpostosEstaduais": "CONTA DO DESPACHANTE - Banco Itaú Unibanco S.A. - 341 • Ag. 00003 • C/C 333333",
    "massaSelectCbImpostosFederais": "CONTA DO DESPACHANTE - Banco Itaú Unibanco S.A. - 341 • Ag. 00003 • C/C 333333",
    "massaSelectCbPagamentoDeDespesas": "CONTA DO DESPACHANTE - Banco Itaú Unibanco S.A. - 341 • Ag. 00003 • C/C 333333",
    "massaVencimentoRadar": "2023-12-31",
    "massaVencimentoProcuracao": "2024-01-01",
    "massaEmailParaRecebimentoDaNFSe": "joao@example.com",
    "massaCertificadoDigital": "certificadoDigital.pfx",
    "massaSenhaDoCertificado": "123",
    "massaConfirmeSenha": "123",
    "massaSerie": "1",
    "massaProximoNumeroDeDanfe": "1",
    "massaImportador": true,
    "massaExportador": false,
    "massaRestricaoFinanceira": false,
    "massaOea": true
  }
  */