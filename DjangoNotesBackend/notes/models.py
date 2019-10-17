from django.db import models
from users.models import CustomUser as User


class Note(models.Model):
    text = models.CharField(max_length=255)
    # Linking to the CustomUser model for post ownership.
    owner = models.ForeignKey(User, related_name="notes",
                              on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text
