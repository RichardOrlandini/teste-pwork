import { Page } from "@playwright/test";
import data from './unidadeDeNegocio.json';

export class UnidadeDeNegocio {
    readonly page: Page;
    readonly defaultUnidadeDeNegocio: string;

    constructor(page: Page) {
        this.page = page;
        this.defaultUnidadeDeNegocio = data.default.name;
    }
    
    //Ações
    async executa() {
        await this.page.locator('div').filter({ hasText: /^Unidade de NegócioUnidade de Negócio$/ }).nth(1).click();
        await this.page.getByRole('button', { name: 'Abrir' }).click();
        await this.page.getByRole('option', { name: this.defaultUnidadeDeNegocio }).click();
    }

    async executaCom(massa: string) {
        await this.page.locator('div').filter({ hasText: /^Unidade de NegócioUnidade de Negócio$/ }).nth(1).click();
        await this.page.getByRole('button', { name: 'Abrir' }).click();
        await this.page.getByRole('option', { name: massa }).click();
    }
}
