from .base import *

DEBUG = True

DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.postgresql_psycopg2',
		'NAME': 'django',
		'USER': 'django',
		'PASSWORD': 'django',
		'HOST': 'localhost',
		'PORT': '',
	}
}