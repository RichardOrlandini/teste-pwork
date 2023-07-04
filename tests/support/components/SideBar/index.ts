import { Page } from "@playwright/test";

export class SideBar {

    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    //Ações
    async irCadastros() {
        await this.page.getByRole('button', { name: 'Cadastros' }).click();
        return this;
    }

    async irGerais(text: string){
        await this.page.getByRole('button', { name: 'Gerais' }).click();
        await this.page.getByRole('link', { name: text }).click();

    }
    
    async irOperacionais(text: string){
        await this.page.getByRole('button', { name: 'Operacionais' }).click();
        await this.page.getByRole('link', { name: text }).click();

    }

    async irFinanceiros(text: string){
        await this.page.getByRole('button', { name: 'Financeiros' }).click();
        await this.page.getByRole('link', { name: text }).click();
    }

    //Validações 
}


