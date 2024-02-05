from django.shortcuts import render
from datetime import datetime
from  mwrogue.esports_client import EsportsClient

def tournament_matches(site, request):

    respose = site.cargo_client.query(
        tables="MatchSchedule=MS",
        fields="MS.Team1, MS.Team2, MSDataTime_UTC, MS.OverviewPage",
        where="MS.OverviewPage = 'CBLOL 2024 Split 1' ",
        order_by="MS.DateTime_UTC",
        limit = 2
    )

    print (respose)
