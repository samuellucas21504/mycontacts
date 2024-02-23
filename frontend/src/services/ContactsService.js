import delay from '../utils/delay';

class ContactsService {
  #contactsUrl = 'http://localhost:3001/contacts'

  async getAll(orderBy) {
    const response = await fetch(`${this.#contactsUrl}?orderBy=${orderBy}`);

    await delay(500);

    return response.json();
  }
}

export default new ContactsService();
