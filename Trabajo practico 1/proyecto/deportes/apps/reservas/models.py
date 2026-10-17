from tkinter.constants import CASCADE

from django.db import models


class ActividadesDeportivas(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    lugar = models.CharField(max_length=100)
    cupo = models.IntegerField()

    def __str__(self):
        return self.nombre


class Horario(models.Model):
    actividad = models.ForeignKey(ActividadesDeportivas, on_delete=models.CASCADE, related_name="horario")
    dia = models.CharField(max_length=10)
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()

    def __str__(self):
        return f"{self.actividad.nombre} de {self.hora_inicio} a {self.hora_fin}"


class Inscripcion(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    dni = models.IntegerField()
    fecha_inscripcion = models.DateTimeField(auto_now_add=True)
    opciones_estado = [("ACTIVA", "Activa"), ("CANCELADA", "Cancelada")]
    estado = models.CharField(max_length=10, choices=opciones_estado, default="ACTIVA")
    horario = models.ForeignKey(Horario, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.nombre} {self.apellido} dni: {self.dni}"

