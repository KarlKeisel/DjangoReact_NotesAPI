from django.conf.urls import include, url
from rest_framework import routers

from .api import NoteViewSet, RegistrationAPI, LoginAPI, UserAPI


# Takes the endpoint created in api.py and creates a url path to it.
router = routers.DefaultRouter()
router.register('notes', NoteViewSet)

urlpatterns = [
    url("", include(router.urls)),
    url("auth/register/$", RegistrationAPI.as_view()),
    url("auth/login/$", LoginAPI.as_view()),
    url("auth/user/$", UserAPI.as_view()),
]