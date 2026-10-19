from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404
from .forms import ActividadForm
from .models import ActividadesDeportivas


def listar_actividades(request):
    actividades = ActividadesDeportivas.objects.all()

    return render(request, 'listar_actividades.html', {'actividades': actividades})


def agregar_actividad(request):
    if request.method == 'POST':
        form = ActividadForm(request.POST)

        if form.is_valid():
            form.save()
            messages.success(request, "¡La actividad ha sido ingresada con exito!")
            return redirect('reservas:listar_actividades')
    else:
        form = ActividadForm()
    return render(request, 'agregar_actividad.html', {'form': form})


def detalles_actividad(request, pk):
    actividad = get_object_or_404(ActividadesDeportivas, pk=pk)

    return render(request, "detalles_actividad.html", {'actividad': actividad})
