import { LoginModel } from '../support/pages/login/login.model';
import { HomeModel } from '../support/pages/home/home.model'
import dataLogin from '../support/pages/login/login.json';
import { LoginPage } from '../support/pages/login/index'
import dataHome from '../support/pages/home/home.json';
import { HomePage } from '../support/pages/home';
import { test } from '@playwright/test';

let loginPage : LoginPage;
let homePage : HomePage;

test.beforeEach(({ page }) => {
  loginPage = new LoginPage(page);
})

test.describe('Login', () => {

  test('deve fazer login', async ({ page }) => {

    //Dado que tenho um usuário válido.
    const user = dataLogin.sucess as LoginModel;
    const home = dataHome.static as HomeModel;

    //E que estou na página de login
    await loginPage.ir();

    //Quando faço o login
    await loginPage.executa(user);
    
    //Então devo entrar na aplicação.
    homePage = new HomePage(page);
    await homePage.eHome();
    await page.screenshot();
    await homePage.logout();

  });

  test('não deve fazer login, com nome errado', async () => {

    //Dado que tenho um usuário válido.
    const user = dataLogin.failureName as LoginModel;

    //E que estou na página de login
    await loginPage.ir();

    //Quando faço o login
    await loginPage.executa(user);

    //Então não devo entrar na aplicação.
    await loginPage.deveTerTitulo();
  });

  test('não deve fazer login, com senha errada', async () => {

    //Dado que tenho um usuário válido.
    const user = dataLogin.failurePassword as LoginModel;

    //E que estou na página de login
    await loginPage.ir();

    //Quando faço o login
    await loginPage.executa(user);

    //Então não devo entrar na aplicação.
    await loginPage.deveTerTitulo();

  });

  test('não deve fazer login, com campos vazios', async () => {

    //Dado que tenho um usuário válido.
    const user = dataLogin.required as LoginModel;

    //E que estou na página de login
    await loginPage.ir();

    //Quando faço o login
    await loginPage.executa(user);

    //Então não devo entrar na aplicação.
    await loginPage.deveTerTitulo();
  });

});

