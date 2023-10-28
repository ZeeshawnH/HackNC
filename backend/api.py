# import requests
import os
import openai

# openai.organization = os.getenv("OPENAI_ORGANIZATION")
openai.api_key = os.getenv("OPENAI_API_KEY")
openai.Model.list()


def gpt():
    print("hello")
