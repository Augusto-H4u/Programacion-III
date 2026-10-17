from django import forms
from .models import ActividadesDeportivas


class ActividadForm(forms.ModelForm):
    class Meta:
        model = ActividadesDeportivas
        fields = ['nombre', 'descripcion', 'lugar', 'cupo']

        widgets = {
            'nombre': forms.TextInput(attrs={'class': 'form-control'}),
            'descripcion': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
            'lugar': forms.TextInput(attrs={'class': 'form-control'}),
            'cupo': forms.NumberInput(attrs={'class': 'form-control'}),
        }

