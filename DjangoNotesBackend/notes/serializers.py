from rest_framework import serializers

from django.contrib.auth import authenticate

from users.models import CustomUser as User
from .models import Note


# Uses the model created and changes the format to something an API could use
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note  # Which model we are using
        fields = ('id', 'text', )  # Which fields of the model we want to convert

# User Auth Serializer Section. (Could this be placed into 'users' app?)
# Could normally user 'allauth', 'rest-auth', 'djoser' for more options, keeping simple.


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,  # Email here?
                                        validated_data['password'])
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")

