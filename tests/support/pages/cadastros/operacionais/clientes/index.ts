import { nomeComNumeroAleatorio } from "../../../../utils/helper";
import { Locator, Page } from "@playwright/test";
import { ClientesModel } from './cliente.model';
//import path from 'path';

const URL = '/cadastros/operacionais/cliente';

export class OperacionaisClientesPage {
    readonly page: Page;

    readonly inputLoginNameOrEmail: Locator;
    readonly inputLoginSenha: Locator;
    readonly buttonNovo: Locator;
    readonly selectTipoDePessoa: Locator;
    readonly inputNome: Locator;
    readonly inputNomeFantasia: Locator;
    readonly inputCnpj: Locator;
    readonly codigoPostal: Locator;
    readonly tipoLogradouro: Locator;
    readonly logradouro: Locator;
    readonly numero: Locator;
    readonly complemento: Locator;
    readonly bairro: Locator;
    readonly pais: Locator;
    readonly estado: Locator;
    readonly cidade: Locator;
    readonly buttonProximo: Locator;
    readonly inputCnae: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonNovo = page.getByRole('button', { name: 'Novo' });
        this.selectTipoDePessoa = page.getByRole('combobox').filter({ hasText: 'Tipo de Pessoa *Tipo de Pessoa *' });
        this.inputNome = page.getByLabel('Nome *');
        this.inputNomeFantasia = page.getByLabel('Nome Fantasia *');
        this.inputCnpj = page.getByLabel('CNPJ *');
        this.codigoPostal = page.getByLabel('Código Postal *');
        this.tipoLogradouro = page.getByRole('combobox').filter({ hasText: 'Tipo logradouro *Tipo logradouro *' });
        this.logradouro = page.getByLabel('Logradouro *', { exact: true });
        this.numero = page.getByLabel('Número *');
        this.complemento = page.getByLabel('Complemento');
        this.bairro = page.getByLabel('Bairro *');
        this.pais = page.getByRole('combobox').filter({ hasText: 'País *País *' });
        this.estado = page.getByRole('combobox').filter({ hasText: 'Estado *Estado *' });
        this.cidade = page.getByRole('combobox').filter({ hasText: 'Cidade *Cidade *' });
        this.buttonProximo = page.getByRole('button', { name: 'Próximo' });
    }
    //Ações
    async go() {
        await this.page.goto(URL);
    }

    async executa(data: ClientesModel, nomeUnidadeNegocio? : string) {

        const name = await nomeComNumeroAleatorio(data.massaNome);
        await this.executaDadosPessoais(data, name);
        await this.executaDadosTecnicos(data);
        await this.executaContatos(data);
        await this.executaUnidadesDeNegocio(nomeUnidadeNegocio);
        await this.executaDespachantes(data.massaDespachante);
        await this.executaSelectServicos();// caso queria que os serviços sejam opcionais, receber um boolean ou os serviços que quer pelo json. no caso recebendo a data e os servicos em forma de boolean para saber se marca  check box ou não.
        await this.deveTerCliente(name, data.massaCnpj);
    }

    async executaDadosPessoais(data: ClientesModel, name : string) {
        await this.buttonNovo.click();

        await this.selectTipoDePessoa.click();
        await this.page.getByRole('option', { name: data.massaTipoDePessoa }).click();

        await this.inputNome.fill(name);
        await this.inputNomeFantasia.fill(data.massaNomeFantasia);
        await this.inputCnpj.fill(data.massaCnpj);
        await this.codigoPostal.fill(data.massaCodigoPostal);

        //Tipo logradouro
        await this.page.getByRole('textbox', { name: 'Tipo logradouro' }).click();
        await this.page.getByRole('textbox', { name: 'Tipo logradouro' }).fill(data.massaTipoLogradouro);
        await this.page.getByRole('option', { name: data.massaTipoLogradouro }).click();

        await this.logradouro.fill(data.massaLogradouro);
        await this.numero.fill(data.massaNumero);
        await this.complemento.fill(data.massaComplemento);
        await this.bairro.fill(data.massaBairro);

        //País
        await this.page.getByRole('combobox').filter({ hasText: 'País *País *' }).getByRole('button', { name: 'Abrir' }).click();
        await this.page.getByRole('textbox', { name: 'País' }).fill(data.massaSelectPais.slice(0, 3));
        await this.page.getByRole('option', { name: data.massaSelectPais }).click();

        //Estado
        await this.page.getByLabel('Estado *').click();
        await this.page.getByRole('combobox').filter({ hasText: 'Estado  *Estado *' }).getByRole('button', { name: 'Abrir' }).click();
        await this.page.getByRole('textbox', { name: 'Estado' }).fill(data.massaSelectEstado.slice(0, 3));
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('option', { name: data.massaSelectEstado }).click();

        //Cidade
        await this.page.getByLabel('Cidade *').click();
        await this.page.getByRole('combobox').filter({ hasText: 'Cidade *Cidade *' }).getByRole('button', { name: 'Abrir' }).click();
        await this.page.getByRole('textbox', { name: 'Cidade' }).fill(data.massaSelectCidade.slice(0, 3));
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('option', { name: data.massaSelectCidade }).click();

        await this.buttonProximo.click();
    }

    async executaDadosTecnicos(data: ClientesModel) {

        await this.page.getByLabel('CNAE *').click();
        await this.page.getByRole('textbox', { name: 'CNAE' }).click();
        await this.page.getByLabel('CNAE *').fill(data.massaCnae.slice(0, 7));
        await this.page.getByText('0113000 - Cultivo de cana-de-açúcar').click();

        await this.page.getByLabel('Inscrição Estadual', { exact: true }).fill(data.massaInscricaoEstadual);

        await this.page.getByLabel('Inscrição Municipal').fill(data.massaInscricaoMunicipal);

        await this.page.getByLabel('Inscrição Suframa').click();
        await this.page.getByLabel('Inscrição Suframa').fill(data.massaInscricaoSuframa);

        await this.page.getByRole('combobox').filter({ hasText: 'Indicador Inscrição EstadualIndicador Inscrição Estadual' }).getByRole('button', { name: 'Abrir' }).click();
        await this.page.getByRole('option', { name: data.massaSelectIndicadorInscricaoEstadual }).click();

        await this.page.getByRole('combobox').filter({ hasText: 'Conta Contábil *Conta Contábil *' }).getByRole('button', { name: 'Abrir' }).click();
        await this.page.getByRole('textbox', { name: 'Conta Contábil' }).fill(data.massaSelectContaContabil.slice(0, 3));
        await this.page.getByRole('option', { name: data.massaSelectContaContabil }).click();


        if (data.massaOptanteDoSimplesNacional) {
            await this.page.getByLabel('Optante do Simples Nacional').check();
        }

        await this.page.getByLabel('% PIS').click();
        await this.page.getByLabel('% PIS').fill(data.massaPis);

        await this.page.getByLabel('% COFINS').click();
        await this.page.getByLabel('% COFINS').fill(data.massaCofins);

        await this.page.getByLabel('% CSLL').click();
        await this.page.getByLabel('% CSLL').fill(data.massaCsll);

        await this.page.getByLabel('Valor mínimo', { exact: true }).click();
        await this.page.getByLabel('Valor mínimo', { exact: true }).fill(data.massaValorMinimo);

        if (data.massaReterAbaixoDoValorMinimo) {
            await this.page.getByLabel('Reter abaixo do valor mínimo').check();
        }

        await this.page.getByRole('combobox').filter({ hasText: 'Tipo de RetençãoTipo de Retenção' }).getByRole('button', { name: 'Abrir' }).click();
        await this.page.getByRole('option', { name: data.massaSelectTipoDeRetencao }).click();


        await this.page.getByLabel('Dias para vencimento da NFS-e').click();
        await this.page.getByLabel('Dias para vencimento da NFS-e').fill(data.massaNdiasParaVencimentoDaNFSe);

        await this.page.getByLabel('Dia limite para faturamento').click();
        await this.page.getByLabel('Dia limite para faturamento').fill(data.massaNdiaLimiteParaFaturamento);

        await this.page.getByLabel('Moeda do Seguro').click();
        await this.page.getByRole('textbox', { name: 'Moeda do Seguro' }).fill(data.massaMoedaDoSeguro.slice(0, 3));
        await this.page.getByRole('option', { name: data.massaMoedaDoSeguro }).click();

        await this.page.getByLabel('Percentual do Seguro').click();
        await this.page.getByLabel('Percentual do Seguro').fill(data.massaPercentualDoSeguro);

        if (data.massaCalcularSeguroSobreMLEeFrete) {
            await this.page.getByLabel('Calcular Seguro sobre MLE + Frete').check();
        }

        await this.page.getByLabel('Limite de Crédito *').click();
        await this.page.getByLabel('Limite de Crédito *').fill(data.massaLimiteDeCredito);

        await this.page.getByLabel('Conta Bancária (Impostos Estaduais)').click();
        await this.page.getByLabel('Conta Bancária (Impostos Estaduais)').fill(data.massaSelectCbImpostosEstaduais.slice(0, 9));
        await this.page.getByText(data.massaSelectCbImpostosEstaduais).click();

        await this.page.getByRole('combobox').filter({ hasText: 'Conta Bancária (Impostos Federais)Conta Bancária (Impostos Federais)' }).getByRole('button', { name: 'Abrir' }).click();
        await this.page.getByText(data.massaSelectCbImpostosFederais).click();

        await this.page.getByRole('combobox').filter({ hasText: 'Conta Bancária (Pagamento de Despesas)Conta Bancária (Pagamento de Despesas)' }).getByRole('button', { name: 'Abrir' }).click();
        await this.page.getByText(data.massaSelectCbPagamentoDeDespesas).click();


        await this.page.getByLabel('Vencimento (Radar) *').fill(data.massaVencimentoRadar);
        await this.page.getByLabel('Vencimento (Procuração) *').fill(data.massaVencimentoProcuracao);
        await this.page.getByLabel('Email para Recebimento da NFS-e *').fill(data.massaEmailParaRecebimentoDaNFSe);

        /*
        const certificadoDigitalPath = path.resolve(__dirname, '../../../utils/', data.massaCertificadoDigital);
        const certificadoDigitalInput = await this.page.locator('div').filter({ hasText: /^Certificado Digital$/ }).getByRole('button');
        await certificadoDigitalInput.setInputFiles(certificadoDigitalPath);
        */

        await this.page.getByLabel('Senha do certificado').click();
        await this.page.getByLabel('Senha do certificado').fill(data.massaSenhaDoCertificado);


        await this.page.getByLabel('Confirme a senha').click();
        await this.page.getByLabel('Confirme a senha').fill(data.massaConfirmeSenha);


        await this.page.getByLabel('Série').click();
        await this.page.getByLabel('Série').fill(data.massaSerie);

        await this.page.getByLabel('Próximo número de DANFE').click();
        await this.page.getByLabel('Próximo número de DANFE').fill(data.massaProximoNumeroDeDanfe);

        if (data.massaImportador) await this.page.getByLabel('Importador').check();
        if (data.massaExportador) await this.page.getByLabel('Exportador').check();
        if (data.massaRestricaoFinanceira) await this.page.getByLabel('Restrição Financeira').check();
        if (data.massaOea) await this.page.getByLabel('OEA').check();

        await this.page.getByRole('button', { name: 'Próximo' }).click();
    }

    //PERGUNTAR PARA CLAUDEMIR SE ESSA TELA DE CADASTRO DE DADIS TECNICOS, CONTATOS, UNIDADES DE NEGOCIOS DESPACHENTE SÃO UTILIZADOS EM DEMAIS TELAS, SE FOREM, COMPONENTIZAR ELES TAMBÉM.
    async executaContatos(data: ClientesModel) {

        await this.page.getByRole('button', { name: 'NOVO' }).click();

        await this.page.getByLabel('Nome do Contato *').fill(data.massaNomeDoContato);
        await this.page.getByLabel('Nome Resumido').fill(data.massaNomeResumido);

        await this.page.locator('div').filter({ hasText: /^Gênero$/ }).locator('div').click();
        await this.page.getByRole('option', { name: data.massaGenero }).click();

        await this.page.getByPlaceholder('Ex.: Sr., Srta.').fill(data.massaExSrSrta);
        await this.page.getByPlaceholder('DD/MM/YYYY').fill(data.massaDataNascimento);
        await this.page.getByLabel('Telefone').fill(data.massaTelefone);
        await this.page.getByLabel('Celular').fill(data.massaCelular);
        await this.page.getByLabel('E-mail *').fill(data.massaEmail);
        await this.page.getByLabel('Departamento').fill(data.massaDepartamento);
        await this.page.getByLabel('Cargo').fill(data.massaCargo);

        await (data.massaResponsavelPeloIcms ? this.page.locator('label').filter({ hasText: 'Responsável pelo ICMS' }).check() : Promise.resolve());
        await (data.massaReceberFaturamento ? this.page.locator('label').filter({ hasText: 'Receber Faturamento' }).check() : Promise.resolve());
        await (data.massaReceberMapaDeFollowup ? this.page.locator('label').filter({ hasText: 'Receber Mapa de Follow-Up' }).check() : Promise.resolve());
        await (data.massaReceberNumerario ? this.page.locator('label').filter({ hasText: 'Receber Numerário' }).check() : Promise.resolve());
        await (data.massaReceberEmailDeMarketing ? this.page.locator('label').filter({ hasText: 'Receber E-mail de Marketing' }).check() : Promise.resolve());
        await (data.massaReceberMantraSicarga ? this.page.locator('label').filter({ hasText: 'Receber MANTRA / Siscarga' }).check() : Promise.resolve());

        await this.page.getByRole('button', { name: 'Adicionar' }).click();
        await this.page.getByRole('button', { name: 'Próximo' }).click();

    }

    async executaUnidadesDeNegocio(nomeUnidadeNegocio?: string) {

        if (nomeUnidadeNegocio){
            await this.page.getByPlaceholder('FILTRE UTILIZANDO O SEPARADOR \'|\' EX: UNIDADE DE NEGÓCIO').fill(nomeUnidadeNegocio.slice(0, 5));
            await this.page.getByRole('checkbox', { name: 'Select Row checkbox' }).click();
        }
  
        await this.page.getByRole('button', { name: 'Próximo' }).click();
    }

    async executaDespachantes(massaNameDespachante: string) {
        await this.page.getByPlaceholder('FILTRE UTILIZANDO O SEPARADOR \'|\' EX: NOME DO DESPACHANTE').fill(massaNameDespachante.slice(0, 5));
        await this.page.getByRole('checkbox', { name: 'Select Row checkbox' }).click();
        await this.page.getByRole('button', { name: 'Próximo' }).click();
    }

    async executaSelectServicos() {
        await this.page.getByRole('checkbox', { name: 'Select All Rows checkbox' }).click();
        await this.page.getByRole('button', { name: 'Finalizar' }).click();
    }


    async deveTerCliente(massaName: string, massaCnpj: string) {
        await this.page.getByPlaceholder('FILTRE UTILIZANDO O SEPARADOR \'|\' EX: CÓDIGO | NOME | NOME FANTASIA | CNPJ | CPF | LOCALIDADE | DATA DE CRIAÇÃO').fill(massaName);
        
        let codigoElement = await this.page.$('.MuiDataGrid-cell[data-field="id"]');
        if (codigoElement) {
          let codigoText = await this.page.evaluate(element => element.textContent, codigoElement);
          await this.page.locator(`button[name="btn-view-${codigoText}"]`).click();
        } else {
          console.log("Elemento não encontrado!");
        }

        //await expect(this.page.getByText(`O Cliente ${massaName} foi cadastrado.`));
        await expect(await this.inputNome.innerText()).toBe(massaName);
        await expect(await this.inputCnpj.innerText()).toBe(massaCnpj); 

    }
}
