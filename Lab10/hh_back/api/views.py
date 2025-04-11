from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import (
    CompanySerializer,
    VacancyReadSerializer,
    VacancyWriteSerializer
)

# 📌 GET all companies | POST new company
@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


# 📌 GET, PUT, DELETE single company
@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        company.delete()
        return Response({"message": "Company deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)


# 📌 GET all vacancies of a company
@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)

    vacancies = company.vacancies.all()
    serializer = VacancyReadSerializer(vacancies, many=True)
    return Response(serializer.data)


# 📌 GET all vacancies | POST new vacancy
@api_view(['GET', 'POST'])
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancyReadSerializer(vacancies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancyWriteSerializer(data=request.data)
        if serializer.is_valid():
            vacancy = serializer.save()
            return Response(VacancyReadSerializer(vacancy).data, status=201)
        return Response(serializer.errors, status=400)


# 📌 GET, PUT, DELETE single vacancy
@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return Response({"error": "Vacancy not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = VacancyReadSerializer(vacancy)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = VacancyWriteSerializer(vacancy, data=request.data)
        if serializer.is_valid():
            vacancy = serializer.save()
            return Response(VacancyReadSerializer(vacancy).data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        vacancy.delete()
        return Response({"message": "Vacancy deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)


# 📌 GET top 10 vacancies by salary
@api_view(['GET'])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancyReadSerializer(vacancies, many=True)
    return Response(serializer.data)
