from django.urls import path
from apps.reservas.views import agregar_actividad, listar_actividades, detalles_actividad

app_name = 'reservas'
urlpatterns = [
    path("actividad/agregar/", agregar_actividad, name="agregar_actividad"),
    path("actividad/", listar_actividades, name="listar_actividades"),
    path('actividad/<int:pk>', detalles_actividad, name="detalles_actividad")
]

