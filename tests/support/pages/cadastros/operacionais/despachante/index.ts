import { Locator, Page } from "@playwright/test";
import { DespachanteModel } from "./despachante.model";

export class OperacionaisDespachantePage {

    readonly buttonNovo: Locator;
    readonly inputNome: Locator;
    readonly inputRegistro: Locator;
    readonly inputCpfCnpj: Locator;
    readonly inputCep: Locator;
    readonly inputLogradouro: Locator;
    readonly inputNumero: Locator;
    readonly inputBairro: Locator;
    readonly selectEstado: Locator;
    readonly selectCidade: Locator;
    readonly inputTelefone: Locator;
    readonly inputSenha: Locator;
    readonly inputLimiteDeRecolhimento: Locator;
    readonly selectPeriodo: Locator;
    readonly inputSobre: Locator;
    //readonly inputSindicato: Locator;
    readonly inputCertificadoDigital: Locator;
    readonly buttonProximo: Locator;

    constructor(page : Page){
        this.buttonNovo = page.getByRole('button', { name: 'Novo' });
        this.inputNome = page.getByLabel('Nome *');
        this.inputRegistro = page.getByLabel('Registro *');
        this.inputCpfCnpj = page.getByLabel('CPF/CNPJ*');
        this.inputCep = page.getByLabel('CEP *');
        this.inputLogradouro = page.getByLabel('LOGRADOURO *');
        this.inputNumero = page.getByLabel('NÚMERO *');
        this.inputBairro = page.getByLabel('BAIRRO *');

        this.inputTelefone = page.getByLabel('TELEFONE *');
        this.inputSenha = page.getByLabel('SENHA DO SISCOMEX *');
        this.inputLimiteDeRecolhimento = page.getByLabel('LIMITE DE RECOLHIMENTO *');
        this.selectPeriodo = page.getByLabel('PERÍODO *');
        //this.inputSindicato = page.getByLabel('SINDICATO *');
        this.inputCertificadoDigital = page.getByLabel('CERTIFICADO DIGITAL *');
        this.buttonProximo = page.getByRole('button', { name: 'Próximo' });
    }

    async execute(data : DespachanteModel){
        await this.buttonNovo.click();

        await this.inputNome.fill(data.massaNome);
        await this.inputRegistro.fill(data.massaRegistro);
        await this.inputCpfCnpj.fill(data.massaCnpj);
        await this.inputCep.fill(data.massaCep);
        await this.inputLogradouro.fill(data.massaLogradouro);
        await this.inputNumero.fill(data.massaNumero);
        await this.inputBairro.fill(data.massaBairro);
        await this.inputTelefone.fill(data.massaTelefone);
        await this.inputLimiteDeRecolhimento.fill(data.massaLimiteDeRecolhimento);
        //await this.inputSindicato.fill(data.massaSin);
        //await this.inputCertificadoDigital.fill(data.);
        await this.buttonProximo.click();
    }
}