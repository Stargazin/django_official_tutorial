from __future__ import absolute_import

#from django.db.models.loading import get_model
#from django.http import HttpResponse
#from django.shortcuts import get_object_or_404, get_list_or_404
from django.views.generic import TemplateView


class SampleView(TemplateView):
    template_name = "sample.html"