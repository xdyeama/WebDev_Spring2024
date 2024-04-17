from django.shortcuts import render
from django.http import JsonResponse, Http404
from api.models import Company, Vacancy


def getCompanies(request):
    companies = Company.objects.all()
    companies = [company.to_json() for company in companies]
    return JsonResponse({"companies": companies})


def getCompany(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist:
        raise Http404("No company with such id")
    return JsonResponse({"company": company.to_json()})


def getVacanciesByCompany(request, company_id):
    try:
        company = Company.objects.get(pk=company_id).to_json()
        vacancies = Vacancy.objects.filter(company=company['id'])
        vacancies = [vacancy.to_json() for vacancy in vacancies]
    except Company.DoesNotExist:
        raise Http404("No company with such id")
    return JsonResponse({"vacancies": vacancies})


def getVacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse({"vacancies": vacancies})


def getVacanyByID(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(pk=vacancy_id)
    except Vacancy.DoesNotExist:
        raise Http404("No vacancy with such ID")
    return JsonResponse({"vacancy": vacancy.to_json()})


def getTop10Vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')
    vacancies = [vacancy.to_json() for vacancy in vacancies]
    vacancies = vacancies[:10]
    return JsonResponse({"vacancies": vacancies})
