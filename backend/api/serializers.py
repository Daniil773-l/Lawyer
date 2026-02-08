from rest_framework import serializers
from .models import ContactRequest

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactRequest
        fields = "__all__"