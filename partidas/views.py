from django.shortcuts import render


# Create your views here.
def partidas(request):
    print('partidas app 2!')
    return render(
        request,
        'partidas/index.html',
        {
            'title': '| Partidas',
        }
    )