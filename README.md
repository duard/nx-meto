# Projeto BASE

Atualizar o projeto inteiro, sempre mantenha ele atualizado, não seja um goiaba.

https://awesomeopensource.com/project/juliandavidmr/awesome-nestjs

```shell
npm uninstall -g angular-cli
npm install -g @angular/cli@latest
npx ng update --all --force
```

Gerar todas as Entities do seu banco de dados

```shell
npx typeorm-model-generator -h localhost -d seubancodedados -u seuusuario -x suasenha -e mysql -o .
```

Criar uma nova Library NestJS

```shell
nx generate @nrwl/nest:library lib-nome-a-ser-creiada
```
