
from rest_framework import serializers
from .models import Actor, Movies
from drf_writable_nested import WritableNestedModelSerializer


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ('id','name', 'last_name', 'age','imagen', 'create_at')
        read_only_fields = ('create_at',)


class MoviesSerializer(WritableNestedModelSerializer,serializers.ModelSerializer):
    actors = ActorSerializer(many=True)
    class Meta:
        model = Movies
        fields = '__all__'
        #fields = ('id','name','gender', 'description', 'year', 'imagen', 'create_at')
        read_only_fields = ('create_at',)

        def create(self, validated_data):
            actors_data = validated_data.pop('actors')
            pelicula = Movies.objects.create(**validated_data)
            for actor_data in actors_data:
                actor, _ = Actor.objects.get_or_create(**actor_data)
                pelicula.actors.add(actor)
            return pelicula

