from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


@api_view(['GET', 'POST'])
def company_list(request):
    """
        API endpoints for company listing
    """
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, pk):
    """
        single company details 
    """
    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    if request.method == 'PUT':
        serializer = CompanySerializer(company, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def vacancies_by_company(request, pk):
    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    vacancies = Vacancy.objects.filter(company=company)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)


class VacancyList(APIView):
    """
        List all vacancies
    """

    def get(self, request, format=None):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = VacancySerializer(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  

class VacancyDetail(APIView):
    """
        Retrivew single vacancy detail
    """

    def get_object(self, pk):
        try:
            return Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk, format=None):
        try:
            vacancy = Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class VacancyTop10(APIView):
    """
        Get top 10 Vacancies
    """

    def get(self, request, format=None):
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
