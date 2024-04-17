from api.models import Company, Vacancy
from rest_framework import serializers


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=False, allow_blank=False,
                                 max_length=200)
    description = serializers.CharField(read_only=False, allow_blank=True,
                                        max_length=300)
    city = serializers.CharField(read_only=False, allow_blank=True,
                                 max_length=200)
    address = serializers.CharField(read_only=False, allow_blank=True,
                                    max_length=200)

    def create(self, validated_data):
        return Company.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.id = instance.id
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get("description", instance.name)
        instance.city = validated_data.get("city", instance.name)
        instance.address = validated_data.get("address", instance.name)

        instance.save()
        return instance


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']
