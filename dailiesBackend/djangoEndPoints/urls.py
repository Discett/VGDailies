from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
#from . import views as local_view
from . import views
from rest_framework.authtoken import views as rest_framework_views

urlpatterns = [
    # Session Login
    url(r'^login/$',             views.get_auth_token,    name='login'),
    url(r'^logout/$',            views.logout_user,       name='logout'),
    url(r'^auth/$',              views.login_form,        name='login_form'),
    url(r'^getUserDailies/$',    views.getUserDailies,    name='getUserDailies'),
    url(r'^addUserDaily/$',      views.addUserDaily,      name='addUserDaily'),
    url(r'^removeUserDaily/$',   views.removeUserDaily,   name='removeUserDaily'),
    url(r'^get_auth_token/$', rest_framework_views.obtain_auth_token, name='get_auth_token'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
