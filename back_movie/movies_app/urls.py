from importlib.resources import path
from django.urls import path,include
from rest_framework import routers
from .views import ActorViewSet,MoviesViewSet


router = routers.DefaultRouter()

router.register('api/actor', ActorViewSet, 'actor')
router.register('api/movies',MoviesViewSet, 'movies')

urlpatterns = [
    ##path('api/employe/',Employe_Crud.as_view(), name= 'employes'),
    ##path('api/employe/<int:id>/',Employe_detail.as_view(), name= 'employe'),
    path('', include(router.urls))
    ]
