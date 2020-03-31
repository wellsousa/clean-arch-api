criar o package.json:

npm init -y

pacote para padronização de commits baseado em https://www.conventionalcommits.org/en/v1.0.0/ para
garantir que um commit obdeça um padrão

Pacote para padronizar commits:

npm install -D git-commit-msg-linter

Adicionar o jest:

npm install -D jest

    você deverá rodar tambem o comando:
       npx jest --init

    As configurações serão:
        * package.json - yes
        * test environment - node
        * coverage reports - yes
        * clear mocks - yes

para instalar o express:

npm install express