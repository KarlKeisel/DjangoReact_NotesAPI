from rest_framework import serializers

from .models import Note


# Uses the model created and changes the format to something an API could use
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note  # Which model we are using
        fields = ('id', 'text', )  # Which fields of the model we want to convert

