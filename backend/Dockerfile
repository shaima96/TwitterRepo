FROM python:3.9

EXPOSE 80

ADD . /backend

WORKDIR /backend

RUN pip install -r requirements.txt

CMD ["python","app.py"]
