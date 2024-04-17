from django.urls import path
# import api.views as views
import api.generic_views as views

app_name = 'api'

urlpatterns = [
    path('companies', views.company_list),
    path('companies/<int:pk>', views.company_detail),
    path('companies/<int:pk>/vacancies', views.vacancies_by_company),
    path('vacancies', views.VacancyList.as_view()),
    path('vacancies/<int:pk>', views.VacancyDetail.as_view()),
    path('vacancies/top10', views.VacancyTop10.as_view())
]
