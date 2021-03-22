import loginApi from './login.api';

describe('Login API', () => {
  it('should accept valid login', async () => {
    const user = await loginApi('wizeline', 'Rocks!');
    expect(user).toBeDefined();
  });

  it('should reject invalid login', async () => {
    try {
      await loginApi('bad', 'credentials');
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
