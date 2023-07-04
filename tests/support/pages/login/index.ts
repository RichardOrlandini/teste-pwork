import {URL_HML, URL_DEV} from '../../../../playwright.config';
import { Locator, Page, expect } from "@playwright/test";
import { LoginModel } from "./login.model";
import data from './login.json';

export class LoginPage {
    readonly page: Page;
    readonly inputLoginNameOrEmail: Locator;
    readonly inputLoginSenha: Locator;
    readonly textAlert: string;
    readonly user = data.sucess as LoginModel;
    readonly unidadeDeNegocio: string;


    constructor(page: Page) {
        this.page = page;
        this.inputLoginNameOrEmail = page.locator("//input[@id='username']");
        this.inputLoginSenha = page.locator("//input[@id='password']");
        this.textAlert = 'Invalid username or password.';
        this.unidadeDeNegocio = 'QUICKCOMEX-154795';
    }

    //Ações
    async ir() {
        await this.page.goto(URL_HML);
    }

    async executa(user: LoginModel) {
        await this.inputLoginNameOrEmail.fill(user.name);
        await this.inputLoginSenha.fill(user.password);
        await this.page.click('#kc-login');
    }

    async rapidoLogin(){
        await this.ir();
        await this.executa(this.user);
    }

    async deveTerTitulo() {
        const target = this.page.locator('#input-error');
        await expect(target).toHaveText(this.textAlert);
    }
}

