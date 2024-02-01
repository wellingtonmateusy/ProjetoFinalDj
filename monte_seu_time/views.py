from django.shortcuts import render


def monte_seu_time(request):
    return render(
        request,
        'monte_seu_time/index.html',
        {
            'title': '| Monte seu time',
        }
    )

def cblol(request):
    return render(
        request,
        'monte_seu_time/cblol.html',
        {
            'title': '| Cblol 2024 1° Split',
        }
    )

def lpl(request):
    return render(
        request,
        'monte_seu_time/lpl.html',
        {
            'title': '| LPL 2024 1° Split',
        }
    )

def lck(request):
    return render(
        request,
        'monte_seu_time/lck.html',
        {
            'title': '| LCK 2024 1° Split',
        }
    )

def lcs(request):
    print('monte_seu_time app 2!')
    return render(
        request,
        'monte_seu_time/lcs.html',
        {
            'title': '| LCS 2024 1° Split',
        }
    )

def lec(request):
    print('monte_seu_time app 2!')
    return render(
        request,
        'monte_seu_time/lec.html',
        {
            'title': '| LEC 2024 1° Split',
        }
    )

def lla(request):
    return render(
        request,
        'monte_seu_time/lla.html',
        {
            'title': '| LLA 2024 1° Split',
        }
    )