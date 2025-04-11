from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

# 🔁 Для создания/обновления вакансий
class VacancyWriteSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = serializers.IntegerField()  # ID-компании

    def create(self, validated_data):
        company_id = validated_data.pop('company')
        company = Company.objects.get(id=company_id)
        return Vacancy.objects.create(company=company, **validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        company_id = validated_data.get('company')
        if company_id:
            instance.company = Company.objects.get(id=company_id)
        instance.save()
        return instance

# 👀 Для отображения вакансий
class VacancyReadSerializer(serializers.ModelSerializer):
    company = CompanySerializer()  # Вложенный объект с названием компании

    class Meta:
        model = Vacancy
        fields = '__all__'
