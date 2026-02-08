from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ContactSerializer
from .models import ContactRequest

@api_view(["GET"])
def hello(request):
    return Response({"message": "Hello from Django"})

@api_view(["POST"])
def create_contact(request):
    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"status": "saved"})
    
    return Response(serializer.errors, status=400)

@api_view(["GET"])
def get_contacts(request):
    contacts = ContactRequest.objects.all().order_by("-created_at")
    serializer = ContactSerializer(contacts, many=True)
    return Response(serializer.data)