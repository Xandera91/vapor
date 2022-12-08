# Vapor @ v1.0

## Motivação:

Esse projeto foi iniciado com o intuito de maximizar o meu conhecimento em **HTML, CSS, MySQL, PHP e JavaScript** durante meu curso técnico de T.I na instituição de ensino Senac de Piracicaba.

## Stack:
```
>**HTML;**
>**CSS;**
>**MySQL;**
>**PHP;**
>**JavaScript;**
```
## Pré Requisitos:
```
>**XAMPP;**
>**Servidor web;** Apache
>**Servidor SQL;** MySQL
>**Visual Studio Code;** ou qualquer IDE
>**Browser;** Google Chrome, Opera, Edge, Firefox...
```
## Como executar:
No console do seu VS Code use o "git clone" para puxar meu repositório para a pasta "htdocs" dentro do xampp. Após isso crie um banco de dados no "admin" do seu MySQL com o nome "vapor" e depois restaure o arquivo "vapor.sql" dentro do seu banco vapor para criar o banco de dados. Feito isso nos "modulos/conexao.php" configure os campos de acordo com o seu banco como exemplificado abaixo:
```
$hostname = "localhost";
$username = "user";
$password = "teste123";
$database = "vapor";
$port = 3306;

$conn = mysqli_connect($hostname, $username, $password, $database, $port);
```
Agora abasta você abrir o seu browser e inserir o caminho da sua aplicação, exemplo: localhost/vapor/painel

## Em Breve:
Com o avançar do meu conhecimento pretendo alimentar essa aplicação, então fique de olho para acompanhar minha evolução e aprender junto comigo. Qualquer dúvida ou conselho, message me!

## Criador:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/119460126?v=4" width="100px;" alt="Foto do Alexandre no GitHub"/><br>
        <sub>
          <b>Alexandre Guadagnini</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
