from django.shortcuts import render


def monte_seu_time(request):
    print('monte_seu_time app 2!')
    return render(
        request,
        'monte_seu_time/index.html',
        {
            'title': '| Monte seu time',
        }
    )
