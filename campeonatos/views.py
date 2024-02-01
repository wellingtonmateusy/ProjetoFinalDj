from django.shortcuts import render


# Create your views here.
def campeonatos(request):
    print('campeonatos app 2!')
    return render(
        request,
        'campeonatos/index.html',
        {
            'title': '| Campeonatos',
        }
    )
