from os import environ

from .base import *


DEBUG = False

DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.postgresql_psycopg2',
		'NAME': 'django',
		'USER': environ['DB_USERNAME'],
		'PASSWORD': environ['DB_PASSWORD'],
		'HOST': 'localhost',
		'PORT': '',
	}
}

ALLOWED_HOSTS = ['*']


# SECURE_CONTENT_TYPE_NOSNIFF = True
# SECURE_BROWSER_XSS_FILTER = True
# SECURE_SSL_REDIRECT = True

SESSION_COOKIE_SECURE = True

CSRF_COOKIE_SECURE = True
CSRF_COOKIE_HTTPONLY = True

X_FRAME_OPTIONS = 'DENY'