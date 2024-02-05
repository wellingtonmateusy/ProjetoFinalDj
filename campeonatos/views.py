from django.shortcuts import render
from django.http import JsonResponse
from datetime import datetime
from  mwrogue.esports_client import EsportsClient


# Create your views here.
def campeonatos(request):
    return render(
        request,
        'campeonatos/index.html',
        {
            'title': '| Campeonatos',
        }
    )

def get_team_abbreviation(team):
    team_mappings = {
        'Fluxo': {'name': 'Fluxo', 'abbreviation': 'FX'},
        'FURIA': {'name': 'FURIA', 'abbreviation': 'FUR'},
        'INTZ': {'name': 'INTZ', 'abbreviation': 'ITZ'},
        'KaBuM! Esports': {'name': 'KaBuM! Esports', 'abbreviation': 'KBM'},
        'Liberty': {'name': 'Liberty', 'abbreviation': 'LBR'},
        'Los Grandes': {'name': 'Los Grandes', 'abbreviation': 'LOS'},
        'LOUD': {'name': 'LOUD', 'abbreviation': 'LLL'},
        'paiN Gaming': {'name': 'paiN Gaming', 'abbreviation': 'PNG'},
        'RED Canids': {'name': 'RED Canids', 'abbreviation': 'RED'},
        'Vivo Keyd Stars': {'name': 'Vivo Keyd Stars', 'abbreviation': 'VKS'},
    }

    # Remover caracteres especiais, converter para minúsculas e remover espaços
    team_key = ''.join(team)

    # Obter as informações da equipe com base no mapeamento
    team_info = team_mappings.get(team_key, {'name': team_key, 'abbreviation': team_key})

    # Retorna a abreviação da equipe se estiver presente no dicionário, senão retorna uma string vazia
    return team_info.get('abbreviation', '')


def get_team_logo_path(team):
    team_logos = {
        'Fluxo': 'lib/LogosOrgs/Fluxo.png',
        'FURIA': 'lib/LogosOrgs/FURIA.png',
        'INTZ': 'lib/LogosOrgs/INTZ.png',
        'KaBuM! Esports': 'lib/LogosOrgs/KaBum.png',
        'Liberty': 'lib/LogosOrgs/Liberty.png',
        'Los Grandes': 'lib/LogosOrgs/Los.png',
        'LOUD': 'lib/LogosOrgs/LOUD.png',
        'paiN Gaming': 'lib/LogosOrgs/PaiN.png',
        'RED Canids': 'lib/LogosOrgs/RED.png',
        'Vivo Keyd Stars': 'lib/LogosOrgs/Vivo.png',
    }

    # Remover caracteres especiais, converter para minúsculas e remover espaços
    team_key = ''.join(team)

    # Retorna o caminho do logotipo da equipe se estiver presente no dicionário, senão retorna um valor padrão
    return team_logos.get(team_key, 'caminho/do/seu/logotipo_padrao.png')



def fetch_game_data(site, start_date, end_date):
    response = site.cargo_client.query(
        tables="ScoreboardGames=SG, ScoreboardPlayers=SP, Tournaments=T",
        join_on="SG.GameId=SP.GameId, SG.OverviewPage=T.OverviewPage",
        fields="SG.GameId, SG.DateTime_UTC, SG.Team1, SG.Team2, SG.Team1Score, SG.Team2Score, SG.Patch",
        where=f"T.Name='CBLOL 2024 Split 1' AND SG.DateTime_UTC >= '{start_date}' AND SG.DateTime_UTC <= '{end_date}'",
        group_by="SG.GameId",
        order_by="SG.DateTime_UTC",
    )

    game_data = []
    current_date = None

    for result in response:
        try:
            datetime_utc = datetime.strptime(result['DateTime UTC'], '%Y-%m-%d %H:%M:%S')
            date = datetime_utc.date()
            formatted_date = date.strftime('%d/%m/%Y')
        except KeyError:
            formatted_date = "A coluna 'DateTime_UTC' não está presente no OrderedDict."

        if date != current_date:
            day_of_week = date.strftime('%a')
            if day_of_week == 'Sat':
                day_of_week = 'Sáb'
            elif day_of_week == 'Sun':
                day_of_week = 'Dom'
            day_title = f'{day_of_week} - {formatted_date}'
            game_data.append({'date_title': day_title})
            current_date = date

        game_data.append({
            'date': formatted_date,
            'team1': result['Team1'],
            'team1_score': result['Team1Score'],
            'team1_abbreviation': get_team_abbreviation(result['Team1']),
            'team1_logo_path': get_team_logo_path(result['Team1']),
            'team2_score': result['Team2Score'],
            'team2': result['Team2'],
            'team2_abbreviation': get_team_abbreviation(result['Team2']),
            'team2_logo_path': get_team_logo_path(result['Team2']),
        })

    return game_data

def cblol(request):
    site = EsportsClient("lol")
    
    game_data1 = fetch_game_data(site, '2024-01-19', '2024-01-22')
    game_data2 = fetch_game_data(site, '2024-01-26', '2024-01-29')
    game_data3 = fetch_game_data(site, '2024-02-02', '2024-02-05')

    # Adicione o caminho do logotipo e a abreviação ao contexto para cada equipe em game_data1, game_data2, game_data3
    for game_data in [game_data1, game_data2, game_data3]:
        for game in game_data:
            if 'team1' in game:
                game['team1_logo_path'] = get_team_logo_path(game['team1'])
                game['team1_abbreviation'] = get_team_abbreviation(game['team1'])
            else:
                # Trate o caso em que 'team1' não está presente no dicionário
                game['team1_logo_path'] = None  # Ou qualquer valor padrão que você deseje
                game['team1_abbreviation'] = ''

            if 'team2' in game:
                game['team2_logo_path'] = get_team_logo_path(game['team2'])
                game['team2_abbreviation'] = get_team_abbreviation(game['team2'])
            else:
                # Trate o caso em que 'team2' não está presente no dicionário
                game['team2_logo_path'] = None  # Ou qualquer valor padrão que você deseje
                game['team2_abbreviation'] = ''

    return render(request, 'campeonatos/cblol.html', {
        'title': '| CBLOL 2024 1° Split',
        'game_data1': game_data1,
        'game_data2': game_data2,
        'game_data3': game_data3
    })  

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