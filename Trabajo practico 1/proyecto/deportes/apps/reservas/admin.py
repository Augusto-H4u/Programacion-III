from django.contrib import admin
from apps.reservas.models import ActividadesDeportivas


@admin.register(ActividadesDeportivas)
class ActividadDeportivaAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'descripcion', 'lugar', 'cupo']
    search_fields = ['nombre']
    list_filter = ['cupo']
