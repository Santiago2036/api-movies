# Generated by Django 4.2.1 on 2023-05-19 03:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("movies_app", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="actor",
            name="imagen",
            field=models.CharField(max_length=2000),
        ),
        migrations.AlterField(
            model_name="movies",
            name="description",
            field=models.CharField(max_length=2000),
        ),
        migrations.AlterField(
            model_name="movies",
            name="imagen",
            field=models.CharField(max_length=2000),
        ),
    ]