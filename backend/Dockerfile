FROM python:3.9

EXPOSE 5000

ADD . /backend

WORKDIR /backend

RUN pip install -r requirements.txt

CMD ["python","app.py"]
