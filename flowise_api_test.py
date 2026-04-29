import requests

API_URL = "https://cloud.flowiseai.com/api/v1/vector/upsert/06b70cbe-3e62-4cf4-8e33-9d74263c3edd"


def query(payload):
    response = requests.post(API_URL, json=payload, timeout=30)
    response.raise_for_status()
    return response.json()


if __name__ == "__main__":
    output = query({
        "overrideConfig": {
            "topK": 1,
            "googleGenerativeAPIKey": "example",
            "modelName": "example",
            "tasktype": "example",
        }
    })
    print(output)
