# Script para automatizar git add, commit e push
# Salve este arquivo como gitpush.ps1

# Ir para a pasta do projeto
Set-Location "C:\Users\Fabio tec Bass\Desktop\serverbpm"

# Perguntar mensagem do commit
$mensagem = Read-Host "Digite a mensagem do commit"

# Adicionar arquivos alterados
git add .

# Criar commit com a mensagem
git commit -m "$mensagem"

# Enviar para o GitHub
git push
