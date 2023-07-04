import { UnidadeDeNegocioModel, } from '../support/components/UnidadeDeNegocio/unidadeDeNegocio.model';
import massasDespachante from '../support/pages/cadastros/operacionais/despachante/despachante.json';
import massaUnidadadeDeNegocio from '../support/components/UnidadeDeNegocio/unidadeDeNegocio.json';
import { ClientesModel } from '../support/pages/cadastros/operacionais/clientes/cliente.model';
import { DespachanteModel } from '../support/pages/cadastros/operacionais/despachante/despachante.model';
import { OperacionaisClientesPage } from '../support/pages/cadastros/operacionais/clientes';
import massasCliente from '../support/pages/cadastros/operacionais/clientes/clientes.json';
import { UnidadeDeNegocio } from '../support/components/UnidadeDeNegocio';
import { LoginPage } from '../support/pages/login/index'
import { SideBar } from '../support/components/SideBar';
import { test } from '@playwright/test';
import { OperacionaisDespachantePage } from '../support/pages/cadastros/operacionais/despachante';


test.beforeEach(async ({ page }) => {
  //ambiente
  let loginPage: LoginPage;
  let unidadeDeNegocio: UnidadeDeNegocio;
  loginPage = new LoginPage(page);
  await loginPage.rapidoLogin();
  unidadeDeNegocio = new UnidadeDeNegocio(page);
  const udnTreinamento = massaUnidadadeDeNegocio.treinamento as UnidadeDeNegocioModel;
  await unidadeDeNegocio.executaCom(udnTreinamento.name);
})

test.describe('follow up', () => {

  test.describe('Cadastros', () => {

    /*
    test('Criando Despachante', async ({ page }) => {
      const sideBar = new SideBar(page);
      const data = massasDespachante.caseDefault as DespachanteModel;
  
      await sideBar.goCadastros();
      await sideBar.goOperacionais("Despachantes");
      const operacionaisDespachantePage = new OperacionaisDespachantePage(page);
      await operacionaisDespachantePage.execute(data);
    });
  */
    test('Criando importador', async ({ page }) => {
      const sideBar = new SideBar(page);
      //const udnQuickcomex = massaUnidadadeDeNegocio.treinamento as UnidadeDeNegocioModel;
      const data = massasCliente.caseDefault as ClientesModel;
      await sideBar.irCadastros();
      await sideBar.irOperacionais("Clientes");
      const operacionaisClientesPage = new OperacionaisClientesPage(page);
      await operacionaisClientesPage.executa(data);
    });


  });
});



















/*
getByRole('option', { name: 'BRASIL-105' })
   
   // proxima tela DADOS TECNICOS.

   /*
    await operacionaisClientesPage.executeDadosTecnicos();

    getByRole('option', { name: '0111301-Cultivodearroz' })

    await page.getByLabel('CNAE *').click();
    await page.getByRole('textbox', { name: 'CNAE' }).click();
    await page.getByLabel('CNAE *').fill('0113');
    await page.getByText('0113000 - Cultivo de cana-de-açúcar').click();
  
    await page.getByLabel('Inscrição Estadual', { exact: true }).click();
    await page.getByLabel('Inscrição Estadual', { exact: true }).fill('3333');
  
    await page.getByLabel('Inscrição Municipal').click();
    await page.getByLabel('Inscrição Municipal').fill('333333');
  
    await page.getByRole('combobox').filter({ hasText: 'Indicador Inscrição EstadualIndicador Inscrição Estadual' }).getByRole('button', { name: 'Abrir' }).click();
    await page.getByRole('option', { name: 'ContribuinteIsento' }).click();
  
    await page.getByRole('combobox').filter({ hasText: 'Conta Contábil *Conta Contábil *' }).getByRole('button', { name: 'Abrir' }).click();
    await page.getByRole('textbox', { name: 'Conta Contábil' }).fill('1 - C');
    await page.getByRole('option', { name: '1-CIRCULANTE' }).click();
  
    await page.getByLabel('Optante do Simples Nacional').check();
  
    await page.getByLabel('% PIS').click();
    await page.getByLabel('% PIS').fill('8');
  
    await page.getByLabel('% COFINS').click();
    await page.getByLabel('% COFINS').fill('8');
  
    await page.getByLabel('% CSLL').click();
    await page.getByLabel('% CSLL').fill('8');
  
    await page.getByLabel('Valor mínimo', { exact: true }).click();
    await page.getByLabel('Valor mínimo', { exact: true }).fill('8,000');
  
    await page.getByLabel('Reter abaixo do valor mínimo').check();
  
    await page.getByRole('combobox').filter({ hasText: 'Tipo de RetençãoTipo de Retenção' }).getByRole('button', { name: 'Abrir' }).click();
    await page.getByRole('option', { name: 'Porprocesso' }).click();
  
    await page.getByLabel('Dias para vencimento da NFS-e').click();
    await page.getByLabel('Dias para vencimento da NFS-e').fill('10');
  
    await page.getByLabel('Dia limite para faturamento').click();
    await page.getByLabel('Dia limite para faturamento').fill('30');
  
    await page.getByLabel('Moeda do Seguro').click();
    await page.getByRole('textbox', { name: 'Moeda do Seguro' }).fill('220');
    await page.getByRole('option', { name: '220-DOLARDOSEUA' }).click();
  
    await page.getByLabel('Percentual do Seguro').click();
    await page.getByLabel('Percentual do Seguro').fill('10');
  
    await page.getByLabel('Calcular Seguro sobre MLE + Frete').check();
  
    await page.getByLabel('Limite de Crédito *').click();
    await page.getByLabel('Limite de Crédito *').fill('3000');
  
    await page.getByRole('combobox').filter({ hasText: 'Conta Bancária (Impostos Estaduais)Conta Bancária (Impostos Estaduais)' }).getByRole('button', { name: 'Abrir' }).click();
    await page.getByText('CONTA DO DESPACHANTE - Banco Itaú Unibanco S.A. - 341 • Ag. 00003 • C/C 333333').click();
  
    await page.getByRole('combobox').filter({ hasText: 'Conta Bancária (Impostos Federais)Conta Bancária (Impostos Federais)' }).getByRole('button', { name: 'Abrir' }).click();
    await page.getByText('CONTA DO DESPACHANTE - Banco Itaú Unibanco S.A. - 341 • Ag. 00003 • C/C 333333').click();
  
    await page.getByRole('combobox').filter({ hasText: 'Conta Bancária (Pagamento de Despesas)Conta Bancária (Pagamento de Despesas)' }).getByRole('button', { name: 'Abrir' }).click();
    await page.getByText('CONTA DO DESPACHANTE - Banco Itaú Unibanco S.A. - 341 • Ag. 00003 • C/C 333333').click();
  
    await page.getByLabel('Vencimento (Radar) *').click();
    await page.getByLabel('Vencimento (Radar) *').fill('10/07/2023');
  
    await page.getByLabel('Vencimento (Procuração) *').click();
  
    await page.getByLabel('Vencimento (Procuração) *').click();
    await page.getByLabel('Vencimento (Procuração) *').fill('10/08/2033');
  
    await page.getByLabel('Email para Recebimento da NFS-e *').click();
    await page.getByLabel('Email para Recebimento da NFS-e *').fill('richard.aleixo@quickcomex.com.br');
  
    await page.locator('div').filter({ hasText: /^Certificado Digital$/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^Certificado Digital$/ }).getByRole('button').setInputFiles('automation.pfx');
  
    await page.getByLabel('Senha do certificado').click();
    await page.getByLabel('Senha do certificado').fill('123');
  
    await page.getByLabel('Confirme a senha').click();
    await page.getByLabel('Confirme a senha').fill('123');
  
    await page.getByLabel('Série').click();
    await page.getByLabel('Série').fill('1');
  
    await page.getByLabel('Próximo número de DANFE').click();
    await page.getByLabel('Próximo número de DANFE').fill('1');
*/


