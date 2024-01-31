from django.shortcuts import render
from django.http import Http404
from campeonatos.data import camps

# Create your views here.
def campeonatos(request):
    print('campeonatos app 2!')
    return render(
        request,
        'campeonatos/index.html',
        {
            'title': 'Campeonatos',
            'camps': camps,
        }
    )
    
def camp(request, camp_id):
    
    found_camp = None
    
    for camp in camps:
        if camp['id'] == camp_id:
            found_camp = camp
            break
    
    if found_camp is None:
        raise Http404('camp não encontrado')
    
    return render(
        request,
        'campeonatos/index.html',
        {
            'title': 'camp',
            'camp': found_camp
        }
    )
