from django.db import models

class Tournaments(models.Model):
    Name = models.CharField(max_length=255)
    OverviewPage = models.CharField(max_length=255)

class ScoreboardGames(models.Model):
    GameId = models.IntegerField(primary_key=True)
    DateTime_UTC = models.DateTimeField()
    Team1 = models.CharField(max_length=255)
    Team2 = models.CharField(max_length=255)
    Team1Score = models.IntegerField()
    Team2Score = models.IntegerField()
    Patch = models.CharField(max_length=255)
    OverviewPage = models.ForeignKey(Tournaments, on_delete=models.CASCADE)

class ScoreboardPlayers(models.Model):
    # Adicione campos necessários para o modelo ScoreboardPlayers, se necessário
    GameId = models.ForeignKey(ScoreboardGames, on_delete=models.CASCADE)

