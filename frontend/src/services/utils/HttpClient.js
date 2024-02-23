import delay from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`);

    await delay(500);

    return response.json();
  }

  async post(path, body) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      body,
    });

    return response.json();
  }
}

export default HttpClient;
