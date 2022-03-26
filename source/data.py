import json
import requests

url = "https://aerodatabox.p.rapidapi.com/flights/%7BsearchBy%7D/KL1395/2020-06-10"

headers = {
    'x-rapidapi-host': "aerodatabox.p.rapidapi.com",
    'x-rapidapi-key': "eba13d5c36mshf3468974d77a55ep141171jsn483f22443c2d"
    }


response = requests.get(url, headers)

print(response.status_code)

data = response.text

# dataJsonFormat = json.loads(data)

print(data)