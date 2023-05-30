import axios from 'axios';

describe('App Integration', () => {
  it('Return 200 if run', async() => {
    const response = await axios.get('https://ns-ecommerce-stage.onrender.com/')
    expect(response.status).toBe(200)
    expect(response.data).toBe('Hello World! stage')
  });
});
