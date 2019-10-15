from rest_framework import viewsets, permissions

from .models import Note
from .serializers import NoteSerializer


# Takes the converted serializer and equips it with an API endpoint to talk to the model
class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    permission_classes = [permissions.AllowAny, ]  # Expects an iterable
    serializer_class = NoteSerializer
