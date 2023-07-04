import { Locator, Page, expect } from "@playwright/test";
import { LoginPage } from "../login";

export class HomePage {

    readonly page: Page;
    readonly title: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.title = page.locator("//h1[contains(@class, 'MuiTypography-root') and contains(@class, 'MuiTypography-h1') and contains(@class, 'MuiTypography-colorTextPrimary') and text()='Página Inicial']");
    }

    //Ações
    async ir() {
        await this.page.goto('/');
    }

    async logout(){
        await this.page.getByRole('button', { name: 'sair' }).click();
    }

    //Validações
    async deveTerTitulo(textHome: string) {
        if (this.title) {
            const text = await this.title.innerText();
            return text === textHome;
        }
        return false;
    }

    async eHome() {
       await expect(this.title).toBeVisible();
    }
    

}