from django import template

register = template.Library()

@register.filter
def get_team_info(team, logo_path):
    team_info = f'{team}<img src="{logo_path}" alt="" style="width: 30px;">'
    
    return team_info
