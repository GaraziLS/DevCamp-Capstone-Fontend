## Creating an API: first steps

To create an API we'll need two things, pip (with some dependencies) and postman. You can get them [in the pip official site](https://pip.pypa.io/en/stable/installing/) and in the [Postman official site](https://www.postman.com/).

Now, with that installed, we'll create another folder in the backend directory called API. Here's where the API will be.

Now, for the dependencies we'll need the Request library, among others. We'll type (while in our project directory) ``pip install requests``.

In the terminal, we'll type this (after importing requests by writing ``python`` and then ``import requests``):

``r = requests("API URL")``.

We can also do ```r.json()`` to see all the data. If we want to grab elements we can treat it like a dictionary: ``r.json()['item'].

Apart fron the requests library we'll also need pipenv. This allows to grab all our libraries and put them inside a single environment. To install it, go to [this page](https://pipenv-es.readthedocs.io/es/latest/).

After installing it, we'll go to the folder that will host our backend project and, in the terminal, we'll type this:

``pipenv --python 3``

This will install pipenv in this specific directory.

Now to install dependencies we'll type this:

``pipenv install PackageName``.

To run the virtual environment, we'll write ``pipenv shell``. This will run the virtual environment. To exit it we can close the terminal or write ``exit()``.

## Using Postman to test API connections

We have the ability to make requests in Postman, and even mock servers. If we make requests, we have the ability to choose the API verb.

To test the API, paste the localhost and click request.

## Configuring Flask to create APIs

We'll need Flask to create the API. So after starting a new pip environment in the backend > API folder, we'll type ``pipenv install flask``.

Now with the virtual enviromnent running we'll run ``flask inport Flask``