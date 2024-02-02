from django.shortcuts import render
from datetime import datetime
from  mwrogue.esports_client import EsportsClient
from django.http import HttpResponse


# Create your views here.
def campeonatos(request):
    return render(
        request,
        'campeonatos/index.html',
        {
            'title': '| Campeonatos',
        }
    )

def cblol(request):
    site = EsportsClient("lol")
    response = site.cargo_client.query(
        tables="ScoreboardGames=SG, ScoreboardPlayers=SP, Tournaments=T",
        join_on="SG.GameId=SP.GameId, SG.OverviewPage=T.OverviewPage",
        fields="SG.GameId, SG.DateTime_UTC, SG.Team1, SG.Team2, SG.Team1Score, SG.Team2Score, SG.Patch",
        where="T.Name='CBLOL 2024 Split 1' AND SG.DateTime_UTC <= '2024-01-21'",
        group_by="SG.GameId",
        order_by="SG.DateTime_UTC",
    )

    game_data = []
    for result in response:
        try:
            datetime_utc = datetime.strptime(result['DateTime UTC'], '%Y-%m-%d %H:%M:%S')
            date = datetime_utc.date()
        except KeyError:
            date = "A coluna 'DateTime_UTC' não está presente no OrderedDict."

        game_data.append({
            'date': date,
            'team1': result['Team1'],
            'team1_score': result['Team1Score'],
            'team2_score': result['Team2Score'],
            'team2': result['Team2'],
            'imgteam1': 'src = "/campeonatos/static/lib/LogosOrgs/LOUD.png"'
        })

    return render(request, 'campeonatos/cblol.html',{'title': '| CBLOL 2024 1° Split', 'game_data': game_data})

def lpl(request):
    return render(
        request,
        'campeonatos/lpl.html',
        {
            'title': '| LPL 2024 1° Split',
        }
    )

def lck(request):
    return render(
        request,
        'campeonatos/lck.html',
        {
            'title': '| LCK 2024 1° Split',
        }
    )

def lcs(request):
    return render(
        request,
        'campeonatos/lcs.html',
        {
            'title': '| LCS 2024 1° Split',
        }
    )

def lec(request):
    return render(
        request,
        'campeonatos/lec.html',
        {
            'title': '| LEC 2024 1° Split',
        }
    )

def lla(request):
    return render(
        request,
        'campeonatos/lla.html',
        {
            'title': '| LLA 2024 1° Split',
        }
    )