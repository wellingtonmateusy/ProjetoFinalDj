from django.shortcuts import render

# Create your views here.
def home(request):
    print('home app 2!')
    return render(
        request,
        'home/index.html',
        {
            'title': '',
        }
    )

# Create your views here.
