from rest_framework import viewsets,permissions
from .models import Actor, Movies
from .serializers import ActorSerializer, MoviesSerializer

class ActorViewSet(viewsets.ModelViewSet):

    queryset = Actor.objects.all()
    ##permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]
    serializer_class = ActorSerializer

class MoviesViewSet(viewsets.ModelViewSet):

    queryset = Movies.objects.all()
    ##permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny ]
    serializer_class = MoviesSerializer