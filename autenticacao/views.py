from django.shortcuts import render

def autenticacao(request):
    return render(request, 'autenticacao/login.html')

def login(request):
    return render(
        request,
        'autenticacao/login.html',
        {
            'title': '| Login',
        }
    )

def cadastro(request):
    return render(
        request,
        'autenticacao/cadastro.html',
        {
            'title': '| Cadastro',
        }
    )
